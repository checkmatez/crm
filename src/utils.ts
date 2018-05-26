import * as jwt from 'jsonwebtoken'

import { Prisma } from './generated/prisma'

export interface IContext {
  db: Prisma
  request: any
}

export function getUserId(ctx: IContext) {
  const authorization = ctx.request.get('Authorization')
  if (authorization) {
    const token = authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}
