import gql from 'graphql-tag'

import { companyInfoFragment } from '../fragments/companyInfo'

export const COMPANIES_QUERY = gql`
  query companies($first: Int!, $skip: Int!, $orderBy: CompanyOrderByInput) {
    companies(first: $first, skip: $skip, orderBy: $orderBy) {
      aggregate {
        count
      }
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          ...CompanyInfo
        }
      }
    }
  }
  ${companyInfoFragment}
`
