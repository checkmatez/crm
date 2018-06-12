import * as debug from 'debug'
import * as validator from 'validator'

import { IContext } from '../../utils'

const debugApi = debug('api')

export const addContact = async (
  parent,
  {
    data: {
      firstName,
      lastName,
      middleName,
      note,
      managerId,
      companyId,
      emails,
      phones,
    },
  },
  { db }: IContext,
  info
) => {
  const emailContactDetails = emails
    ? emails.map(value => ({
        kind: 'EMAIL',
        value: validator.normalizeEmail(value),
        rawValue: value,
      }))
    : []

  const phoneContactDetails = phones
    ? phones.map(value => {
        const phoneNumber = value.replace(/\D+/g, '').replace(/^8/, '7')
        return {
          kind: 'PHONE',
          value: phoneNumber,
          rawValue: value,
        }
      })
    : []

  const contactDetailsCreate = [...emailContactDetails, ...phoneContactDetails]

  const contact = await db.mutation.createContact(
    {
      data: {
        firstName,
        lastName,
        middleName,
        note,
        manager: managerId && { connect: { id: managerId } },
        contactDetails: contactDetailsCreate.length
          ? {
              create: contactDetailsCreate,
            }
          : undefined,
        workingHistory: companyId && {
          create: { company: { connect: { id: companyId } }, from: new Date() },
        },
      },
    },
    info
  )

  return contact
}
