import { IContext } from '../../utils'

export const company = (parent, { id }, { db }: IContext, info) =>
  db.query.company({ where: { id } }, info)
