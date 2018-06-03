import { IContext } from '../../utils'

export const customer = (parent, { id }, { db }: IContext, info) =>
  db.query.customer({ where: { id } }, info)
