import gql from 'graphql-tag'

import { contactInfoFragment } from '../fragments/contactInfo'

export const ADD_CONTACT_MUTATION = gql`
  mutation addContact($data: ContactAddInput!) {
    addContact(data: $data) {
      ...ContactInfo
    }
  }
  ${contactInfoFragment}
`
