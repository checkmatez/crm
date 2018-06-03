import gql from 'graphql-tag'

import { customerInfoFragment } from '../fragments/customerInfo'
import { userInfoFragment } from '../fragments/userInfo'

export const CUSTOMER_QUERY = gql`
  query customer($id: ID!) {
    customer(id: $id) {
      ...CustomerInfo
      manager {
        ...UserInfo
      }
    }
  }
  ${customerInfoFragment}
  ${userInfoFragment}
`
