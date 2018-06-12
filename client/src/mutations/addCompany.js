import gql from 'graphql-tag'

import { companyInfoFragment } from '../fragments/companyInfo'

export const ADD_COMPANY_MUTATION = gql`
  mutation addCompany($data: CompanyAddInput!) {
    addCompany(data: $data) {
      ...CompanyInfo
    }
  }
  ${companyInfoFragment}
`
