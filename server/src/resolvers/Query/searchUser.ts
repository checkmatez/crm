import { IContext } from '../../utils'

export const searchUser = async (
  parent,
  { search },
  { db, es }: IContext,
  info
) => {
  // db.query.users(
  //   {
  //     where: {
  //       OR: [{ name_contains: search }, { email_contains: search }],
  //     },
  //   },
  //   info
  // )

  const response = await es.search({
    index: 'companies',
    type: '_doc',
    body: {
      query: {
        match: {
          name: search,
        },
      },
    },
    _source: ['id', 'name'],
  })
  console.log('response', response)
  return response.hits.hits.map(hit => hit._source)
}
