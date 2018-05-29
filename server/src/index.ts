import * as debug from 'debug'
import { GraphQLServer } from 'graphql-yoga'

import { Prisma } from './generated/prisma'
import resolvers from './resolvers'

const debugApi = debug('api')
debugApi('starting server...')

const server = new GraphQLServer({
  resolvers,
  typeDefs: './src/schema.graphql',
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
      debug: true, // log all GraphQL queries & mutations sent to the Prisma API
      secret: process.env.PRISMA_SECRET, // only needed if specified in `database/prisma.yml` (value set in `.env`)
    }),
  }),
})

server.start(
  {
    port: process.env.PORT,
    // validationRules: [depthLimit(5)],
    tracing: true,
    cacheControl: true,
    debug: true,
    uploads: {
      maxFileSize: 10 * 1024 * 1024,
    },
    formatError: error => ({
      message: error.message,
      errors: error.originalError && error.originalError.errors,
      locations: error.locations,
      path: error.path,
    }),
  },
  ({ port }) => debugApi(`Server is running on http://localhost:${port}`)
)
