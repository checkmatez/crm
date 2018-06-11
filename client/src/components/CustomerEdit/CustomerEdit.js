import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import { FORM_ERROR } from 'final-form'
import { Form as FinalForm, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import setFieldData from 'final-form-set-field-data'
import createDecorator from 'final-form-focus'
import posed from 'react-pose'

import { CREATE_CUSTOMER_MUTATION } from '../../mutations/createCustomer'
import { CUSTOMERS_QUERY } from '../../queries/customers'
import { makeFormSubmitHandler } from '../../utils'
import FormTextField from '../FormTextField'
import DownshiftAutocomplete from '../DownshiftAutocomplete'

const focusOnErrors = createDecorator()

const PaperStyled = styled(Paper)`
  padding: 20px;
  max-width: 500px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Обязательное поле'
  }
  return errors
}

const makeSubmitHandler = mutation => async (
  { name, manager, email, emails, phone, phones },
  { getFieldState }
) => {
  try {
    await mutation({
      variables: {
        data: {
          name,
          managerId: getFieldState('manager').data.id,
          emails: [email, ...emails],
          phones: [phone, ...phones],
        },
      },
    })
  } catch (error) {
    console.log(error)
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

class CustomerEdit extends Component {
  static propTypes = {}

  static defaultProps = {}

  handleCustomerCreateCompleted = () => {
    this.props.history.push('/customers')
  }

  updateCache = (cache, { data: { createCustomer } }) => {
    const { customers } = cache.readQuery({ query: CUSTOMERS_QUERY })
    cache.writeQuery({
      query: CUSTOMERS_QUERY,
      data: {
        customers: {
          ...customers,
          edges: [...customers.edges, { cursor: '', node: createCustomer }],
        },
      },
    })
  }

  renderForm = ({
    handleSubmit,
    submitting,
    pristine,
    submitError,
    form: { mutators },
  }) => (
    <PaperStyled>
      <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="headline" gutterBottom>
          Новый контакт
        </Typography>
        <Field
          name="name"
          component={FormTextField}
          label="Имя"
          placeholder="Иванов Иван Иванович"
          margin="normal"
        />
        <Field
          name="manager"
          component={DownshiftAutocomplete}
          allowNull
          label="Ответственный"
          placeholder="Иванов Иван Иванович"
          margin="normal"
          setFieldId={id => mutators.setFieldData('manager', { id })}
        />
        <Field
          name="email"
          component={FormTextField}
          label="Email"
          placeholder="abc@abc.ru"
          margin="normal"
          type="email"
          autoComplete="new-password"
        />
        <FieldArray name="emails">
          {({ fields }) => (
            <Fragment>
              {fields.map((name, index) => (
                <Field
                  key={name}
                  name={name}
                  type="email"
                  label="Email"
                  placeholder="abc@abc.ru"
                  autoComplete="new-password"
                  margin="normal"
                  component={FormTextField}
                />
              ))}
              <Button
                variant="raised"
                color="secondary"
                onClick={() => fields.push('')}
              >
                Добавить Email
              </Button>
            </Fragment>
          )}
        </FieldArray>
        <Field
          name="phone"
          type="phone"
          label="Телефон"
          placeholder="+792587454555"
          margin="normal"
          component={FormTextField}
        />
        <FieldArray name="phones">
          {({ fields }) => (
            <Fragment>
              {fields.map((name, index) => (
                <Field
                  key={name}
                  name={name}
                  type="phone"
                  label="Телефон"
                  placeholder="+792587454555"
                  margin="normal"
                  component={FormTextField}
                />
              ))}
              <Button
                variant="raised"
                color="secondary"
                onClick={() => fields.push('')}
              >
                Добавить телефон
              </Button>
            </Fragment>
          )}
        </FieldArray>
        <Typography variant="headline" gutterBottom>
          {submitError}
        </Typography>
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={submitting || pristine}
        >
          Создать
        </Button>
      </StyledForm>
    </PaperStyled>
  )

  renderFinalForm = createCustomer => (
    <FinalForm
      onSubmit={makeSubmitHandler(createCustomer)}
      initialValues={{
        name: '',
        manager: null,
        email: '',
        phone: '',
        emails: [],
        phones: [],
      }}
      decorators={[focusOnErrors]}
      mutators={{
        ...arrayMutators,
        setFieldData,
      }}
      validate={validate}
    >
      {this.renderForm}
    </FinalForm>
  )

  render() {
    return (
      <Mutation
        mutation={CREATE_CUSTOMER_MUTATION}
        update={this.updateCache}
        onCompleted={this.handleCustomerCreateCompleted}
      >
        {this.renderFinalForm}
      </Mutation>
    )
  }
}

export default CustomerEdit
