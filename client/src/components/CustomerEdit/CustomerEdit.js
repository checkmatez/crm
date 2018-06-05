import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import { Form as FinalForm, Field } from 'react-final-form'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import posed from 'react-pose'

import { CREATE_CUSTOMER_MUTATION } from '../../mutations/createCustomer'
import { CUSTOMERS_QUERY } from '../../queries/customers'
import { makeFormSubmitHandler } from '../../utils'
import FormTextField from '../FormTextField'

const PaperStyled = styled(Paper)`
  padding: 20px;
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

const makeSubmitHandler = mutation => async ({ phone, email, ...rest }) => {
  try {
    await mutation({
      variables: { data: { ...rest, phones: [phone], emails: [email] } },
    })
  } catch (error) {
    if (error.graphQLErrors.length && error.graphQLErrors[0].errors) {
      return error.graphQLErrors[0].errors
    }
    // if (error.graphQLErrors.length && error.graphQLErrors[0].message) {
    //   return { [FORM_ERROR]: error.graphQLErrors[0].message }
    // }
    // if (error.message) {
    //   return { [FORM_ERROR]: error.message }
    // }
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

  renderForm = ({ handleSubmit, submitting, pristine, submitError }) => (
    <PaperStyled>
      <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="headline" gutterBottom>
          Новый контакт
        </Typography>
        <Field
          name="name"
          label="Имя"
          placeholder="Иванов Иван Иванович"
          margin="normal"
          component={FormTextField}
        />
        <Field
          name="email"
          type="email"
          label="Email"
          placeholder="abc@abc.ru"
          autoComplete="new-password"
          margin="normal"
          component={FormTextField}
        />
        <Field
          name="phone"
          type="phone"
          label="Телефон"
          placeholder="+792587454555"
          margin="normal"
          component={FormTextField}
        />
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
      initialValues={{ name: '', email: '', phone: '' }}
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
