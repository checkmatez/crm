import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { IContext } from '../../utils'

export const login = async (
  parent,
  { email, password },
  ctx: IContext,
  info
) => {
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) {
    throw new Error(`No such user found for email: ${email}`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  return {
    user,
    token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  }
}
