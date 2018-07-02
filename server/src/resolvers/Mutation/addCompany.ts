import * as debug from 'debug'
import * as validator from 'validator'

import { IContext } from '../../utils'

const debugApi = debug('api')

export const addCompany = async (
  parent,
  { data: { name, legalName, note, managerId, emails, phones } },
  { db, es }: IContext,
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

  const company = await db.mutation.createCompany(
    {
      data: {
        name,
        legalName,
        note,
        manager: managerId && { connect: { id: managerId } },
        contactDetails: {
          create: [...emailContactDetails, ...phoneContactDetails],
        },
      },
    },
    info
  )
  const c = await es.create({
    index: 'companies',
    type: '_doc',
    id: company.id,
    body: company,
  })

  return company
}
