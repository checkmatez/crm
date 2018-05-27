import { getUserId, IContext } from '../../utils'

export const me = (parent, args, ctx: IContext, info) => {
  const id = getUserId(ctx)
  return ctx.db.query.user({ where: { id } }, info)
}
