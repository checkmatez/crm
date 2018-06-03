import { IContext } from '../../utils'

export const customers = (
  parent,
  { first, skip, orderBy },
  { db }: IContext,
  info
) => db.query.customersConnection({ first, skip, orderBy }, info)
