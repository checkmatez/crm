import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { IContext } from '../../utils'

export const signup = async (parent, args, ctx: IContext, info) => {
  const password = await bcrypt.hash(args.password, 10)
  console.log(args)
  const user = await ctx.db.mutation.createUser({
    data: { ...args, password },
  })

  return {
    user,
    accessToken: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  }
}
