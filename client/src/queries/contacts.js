import gql from 'graphql-tag'

import { contactInfoFragment } from '../fragments/contactInfo'

export const CONTACTS_QUERY = gql`
  query contacts($first: Int!, $skip: Int!, $orderBy: ContactOrderByInput) {
    contacts(first: $first, skip: $skip, orderBy: $orderBy) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...ContactInfo
        }
      }
    }
  }
  ${contactInfoFragment}
`
