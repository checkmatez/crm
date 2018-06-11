import * as debug from 'debug'
import * as validator from 'validator'

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
    value: validator.normalizeEmail(value),
    rawValue: value,
  }))

  const phoneContactDetails = phones.map(value => {
    const phoneNumber = value.replace(/\D+/g, '').replace(/^8/, '7')
    return {
      kind: 'PHONE',
      value: phoneNumber,
      rawValue: value,
    }
  })

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
