import * as jwt from 'jsonwebtoken'
import { Client } from 'elasticsearch'

import { Prisma } from './generated/prisma'

export interface IContext {
  db: Prisma
  es: Client
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

export type Errors = {
  [key: string]: string
  _error?: string
}

export class ValidationError extends Error {
  errors: Errors
  constructor(errors: Errors, message = 'The request is invalid.') {
    super(message)
    this.errors = errors
  }
}
