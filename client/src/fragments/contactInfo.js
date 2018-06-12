import gql from 'graphql-tag'

import { contactDetailInfoFragment } from '../fragments/contactDetailInfo'

export const contactInfoFragment = gql`
  fragment ContactInfo on Contact {
    id
    createdAt
    updatedAt
    firstName
    lastName
    middleName
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
