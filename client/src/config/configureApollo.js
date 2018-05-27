import { ApolloClient } from 'apollo-client'
import { split, from } from 'apollo-link'
import { withClientState } from 'apollo-link-state'
import { WebSocketLink } from 'apollo-link-ws'
import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { createUploadLink } from 'apollo-upload-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { CachePersistor } from 'apollo-cache-persist'
import { getMainDefinition } from 'apollo-utilities'

import {
  ACCESS_TOKEN_KEY,
  GRAPHQL_ENDPOINT,
  GRAPHQL_SUBSCRIPTIONS_ENDPOINT,
} from '../config/constants'

const SCHEMA_VERSION = '1' // Must be a string.
const SCHEMA_VERSION_KEY = 'apollo-schema-version'

const configureApollo = async () => {
  // configure cache
  const cache = new InMemoryCache()

  const persistor = new CachePersistor({
    cache,
    storage: localStorage,
    // uncomment if need to view additional logging info when cache is persisted or restored
    // debug: process.env.NODE_ENV === 'development',
  })
  // Read the current schema version from AsyncStorage.
  const currentVersion = localStorage.getItem(SCHEMA_VERSION_KEY)

  if (currentVersion === SCHEMA_VERSION) {
    // If the current version matches the latest version,
    // we're good to go and can restore the cache.
    await persistor.restore()
  } else {
    // Otherwise, we'll want to purge the outdated persisted cache
    // and mark ourselves as having updated to the latest version.
    await persistor.purge()
    await localStorage.setItem(SCHEMA_VERSION_KEY, SCHEMA_VERSION)
  }

  const stateLink = withClientState({
    cache,
    // resolvers,
    defaults: {
      carTrip: {
        __typename: 'CarTrip',
        isStarted: false,
      },
    },
  })

  // cached storage for the user token
  let token
  const withToken = setContext(async () => {
    // if we have a cached value, return it immediately
    if (token) return { headers: { authorization: `Bearer ${token}` } }

    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY)
    // cache it
    token = accessToken
    console.log(`authorization token = ${token}`) // eslint-disable-line no-console
    return { headers: { authorization: `Bearer ${token}` } }
  })

  const resetToken = onError(({ networkError }) => {
    if (networkError && networkError.statusCode === 401) {
      // remove cached token on 401 from the server
      token = null
    }
  })

  const authFlowLink = withToken.concat(resetToken)

  const uploadHttpLink = createUploadLink({ uri: GRAPHQL_ENDPOINT })

  const wsLink = new WebSocketLink({
    uri: GRAPHQL_SUBSCRIPTIONS_ENDPOINT,
    options: {
      reconnect: true,
    },
  })

  // subscriptions over websockets, queries and mutations over http
  const networkLink = split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query)
      return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    uploadHttpLink
  )

  const client = new ApolloClient({
    link: from([stateLink, authFlowLink, networkLink]),
    cache,
  })

  // eslint-disable-next-line no-unused-vars
  const unsubscribe = client.onResetStore(stateLink.writeDefaults)

  return { client }
}

export default configureApollo
