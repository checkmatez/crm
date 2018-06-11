import gql from 'graphql-tag'

import { userInfoFragment } from '../fragments/userInfo'

export const SEARCH_USER_QUERY = gql`
  query searchUser($search: String!) {
    searchUser(search: $search) {
      ...UserInfo
    }
  }
  ${userInfoFragment}
`
