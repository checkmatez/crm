import gql from 'graphql-tag'

import { companyInfoFragment } from '../fragments/companyInfo'
import { userInfoFragment } from '../fragments/userInfo'

export const COMPANY_QUERY = gql`
  query company($id: ID!) {
    company(id: $id) {
      ...CompanyInfo
      manager {
        ...UserInfo
      }
    }
  }
  ${companyInfoFragment}
  ${userInfoFragment}
`
