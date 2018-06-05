import gql from 'graphql-tag'

import { customerInfoFragment } from '../fragments/customerInfo'

export const CREATE_CUSTOMER_MUTATION = gql`
  mutation createCustomer($data: CreateCustomerInput!) {
    createCustomer(data: $data) {
      ...CustomerInfo
    }
  }
  ${customerInfoFragment}
`
