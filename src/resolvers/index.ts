import { AuthPayload } from './AuthPayload'
import { auth } from './Mutation/auth'
import { post } from './Mutation/post'
import { Query } from './Query'

export default {
  Query,
  AuthPayload,
  Mutation: {
    ...auth,
    ...post,
  },
}
