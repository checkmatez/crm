import gql from 'graphql-tag'

export const USER_WITH_EMAIL_EXISTS_QUERY = gql`
  query userWithEmailExists($email: String!) {
    userWithEmailExists(email: $email)
  }
`
