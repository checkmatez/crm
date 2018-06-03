import gql from 'graphql-tag'

import { customerInfoFragment } from '../fragments/customerInfo'

export const CUSTOMERS_QUERY = gql`
  query customers($first: Int!, $skip: Int!, $orderBy: CustomerOrderByInput) {
    customers(first: $first, skip: $skip, orderBy: $orderBy) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CustomerInfo
        }
      }
    }
  }
  ${customerInfoFragment}
`
