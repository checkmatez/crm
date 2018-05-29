import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import * as validator from 'validator'

import { IContext, ValidationError, Errors } from '../../utils'

export const signup = async (parent, args, { db }: IContext, info) => {
  const errors: Errors = {}

  if (!validator.isEmail(args.email)) {
    errors.email = 'Некорректный email'
  } else if (await db.exists.User({ email: args.email })) {
    errors.email = 'Пользователь с таким email уже существует.'
  }

  if (!validator.isLength(args.password, { min: 6 })) {
    errors.password = 'Пароль должен содержать минимум 6 символов'
  }

  if (Object.keys(errors).length) {
    throw new ValidationError(errors)
  }

  const password = await bcrypt.hash(args.password, 10)
  const user = await db.mutation.createUser({
    data: { ...args, password },
  })

  return {
    user,
    accessToken: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
  }
}
