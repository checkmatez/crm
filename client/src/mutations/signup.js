import gql from 'graphql-tag'

import { userInfoFragment } from '../fragments/userInfo'

export const SIGNUP_MUTATION = gql`
  mutation signup($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      accessToken
      user {
        ...UserInfo
      }
    }
  }
  ${userInfoFragment}
`
