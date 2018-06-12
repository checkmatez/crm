import gql from 'graphql-tag'

import { contactDetailInfoFragment } from '../fragments/contactDetailInfo'

export const companyInfoFragment = gql`
  fragment CompanyInfo on Company {
    id
    createdAt
    updatedAt
    name
    note
    manager {
      id
      name
    }
    contactDetails {
      ...ContactDetailInfo
    }
  }
  ${contactDetailInfoFragment}
`
