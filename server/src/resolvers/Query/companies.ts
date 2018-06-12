import { IContext } from '../../utils'

export const companies = (
  parent,
  { first, skip, orderBy },
  { db }: IContext,
  info
) => db.query.companiesConnection({ first, skip, orderBy }, info)
