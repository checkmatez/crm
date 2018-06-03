import gql from 'graphql-tag'

import { contactDetailInfoFragment } from '../fragments/contactDetailInfo'

export const customerInfoFragment = gql`
  fragment CustomerInfo on Customer {
    id
    name
    createdAt
    updatedAt
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
