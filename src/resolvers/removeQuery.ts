import { getUserId, IContext } from '../utils'

/* tslint:disable-next-line */
export const Query = {
  feed(parent, args, ctx: IContext, info) {
    return ctx.db.query.posts({ where: { isPublished: true } }, info)
  },

  drafts(parent, args, ctx: IContext, info) {
    const id = getUserId(ctx)

    const where = {
      isPublished: false,
      author: {
        id,
      },
    }

    return ctx.db.query.posts({ where }, info)
  },

  post(parent, { id }, ctx: IContext, info) {
    return ctx.db.query.post({ where: { id } }, info)
  },

  me(parent, args, ctx: IContext, info) {
    const id = getUserId(ctx)
    return ctx.db.query.user({ where: { id } }, info)
  },
}
