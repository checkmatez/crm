import { FORM_ERROR } from 'final-form'
import createDecorator from 'final-form-focus'

export const makeFormSubmitHandler = mutation => async values => {
  try {
    await mutation({ variables: values })
  } catch (error) {
    if (error.graphQLErrors.length && error.graphQLErrors[0].errors) {
      return error.graphQLErrors[0].errors
    }
    if (error.graphQLErrors.length && error.graphQLErrors[0].message) {
      return { [FORM_ERROR]: error.graphQLErrors[0].message }
    }
    if (error.message) {
      return { [FORM_ERROR]: error.message }
    }
  }
  return undefined
}

export const focusFirstErrorDecorator = createDecorator()
