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
    throw new Error(`Пользователя не существует или неверный пароль`)
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error('Пользователя не существует или неверный пароль')
  }

  return {
    user,
    accessToken: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  }
}
