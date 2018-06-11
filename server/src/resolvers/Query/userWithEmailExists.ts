import { IContext } from '../../utils'

export const userWithEmailExists = (
  parent,
  { email },
  { db }: IContext,
  info
) => db.exists.User({ email })
