import { IContext } from '../../utils'

export const searchUser = (parent, { search }, { db }: IContext, info) =>
  db.query.users(
    {
      where: {
        OR: [{ name_contains: search }, { email_contains: search }],
      },
    },
    info
  )
