import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import { FORM_ERROR } from 'final-form'
import { Form as FinalForm, Field } from 'react-final-form'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import InfoIcon from '@material-ui/icons/InfoOutline'
import styled from 'styled-components'

import { SIGNUP_MUTATION } from '../../mutations/signup'
import { ACCESS_TOKEN_KEY } from '../../config/constants'
import FormTextField from '../FormTextField'

const PaperStyled = styled(Paper)`
  width: 300px;
  padding: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const TooltipContainer = styled.div`
  align-self: flex-end;
  margin-bottom: 8px;
  padding: 8px;
`

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Обязательное поле'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Некорректный email'
  }
  if (!values.password) {
    errors.password = 'Обязательное поле'
  } else if (values.password.length < 6) {
    errors.password = 'Пароль должен содержать минимум 6 символов'
  }
  return errors
}

const makeFormSubmitHandler = mutation => async values => {
  try {
    await mutation({ variables: values })
  } catch (error) {
    if (error.graphQLErrors.length && error.graphQLErrors[0].errors) {
      return error.graphQLErrors[0].errors
    }
    if (error.message) {
      return { [FORM_ERROR]: error.message }
    }
  }
  return undefined
}

class SignupForm extends Component {
  static propTypes = {}

  static defaultProps = {}

  handleSignupCompleted = ({ signup: { accessToken, user } }) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    this.props.history.push('/login')
  }

  renderForm = ({ handleSubmit, submitting, pristine, error }) => (
    <PaperStyled>
      <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
        <Typography variant="headline" gutterBottom>
          Регистрация
        </Typography>
        <FieldContainer>
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="abc@ya.ru"
            margin="normal"
            fullWidth
            component={FormTextField}
          />
          <TooltipContainer>
            <Tooltip id="tooltip-email" title="Адрес электронной почты">
              <InfoIcon />
            </Tooltip>
          </TooltipContainer>
        </FieldContainer>
        <FieldContainer>
          <Field
            name="password"
            type="password"
            label="Пароль"
            placeholder="123"
            autoComplete="new-password"
            margin="normal"
            fullWidth
            component={FormTextField}
          />
          <TooltipContainer>
            <Tooltip id="tooltip-email" title="Минимум 6 символов">
              <InfoIcon />
            </Tooltip>
          </TooltipContainer>
        </FieldContainer>
        <Typography variant="headline" gutterBottom>
          {error}
        </Typography>
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={submitting || pristine}
        >
          Зарегистрироваться
        </Button>
        <Button component={Link} to="/login" size="small" disableRipple>
          Уже есть аккаунт? Войти
        </Button>
      </StyledForm>
    </PaperStyled>
  )

  renderFinalForm = signup => (
    <FinalForm
      onSubmit={makeFormSubmitHandler(signup)}
      initialValues={{ email: '', password: '' }}
      validate={validate}
    >
      {this.renderForm}
    </FinalForm>
  )

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        onCompleted={this.handleSignupCompleted}
      >
        {this.renderFinalForm}
      </Mutation>
    )
  }
}

export default SignupForm
