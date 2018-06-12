import { IContext } from '../../utils'

export const contact = (parent, { id }, { db }: IContext, info) =>
  db.query.contact({ where: { id } }, info)

export const contacts = (
  parent,
  { first, skip, orderBy },
  { db }: IContext,
  info
) => db.query.contactsConnection({ first, skip, orderBy }, info)
