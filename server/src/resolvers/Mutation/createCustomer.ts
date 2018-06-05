import * as debug from 'debug'

import { IContext } from '../../utils'

const debugApi = debug('api')

export const createCustomer = async (
  parent,
  { data: { name, managerId, emails, phones } },
  { db }: IContext,
  info
) => {
  const emailContactDetails = emails.map(value => ({
    kind: 'EMAIL',
    value,
    rawValue: value,
  }))

  const phoneContactDetails = phones.map(value => ({
    kind: 'PHONE',
    value,
    rawValue: value,
  }))

  const customer = await db.mutation.createCustomer(
    {
      data: {
        name,
        manager: managerId && { connect: { id: managerId } },
        contactDetails: {
          create: [...emailContactDetails, ...phoneContactDetails],
        },
      },
    },
    info
  )

  return customer
}
