import gql from 'graphql-tag'

export const contactDetailInfoFragment = gql`
  fragment ContactDetailInfo on ContactDetail {
    id
    kind
    value
    rawValue
  }
`
