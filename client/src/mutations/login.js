import gql from 'graphql-tag'

import { userInfoFragment } from '../fragments/userInfo'

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
      user {
        ...UserInfo
      }
    }
  }
  ${userInfoFragment}
`
