import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import { Link } from 'react-router-dom'
import { FORM_ERROR } from 'final-form'
import { Form as FinalForm, Field } from 'react-final-form'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import posed from 'react-pose'

import { LOGIN_MUTATION } from '../../mutations/login'
import { ACCESS_TOKEN_KEY } from '../../config/constants'
import { makeFormSubmitHandler } from '../../utils'
import FormTextField from '../FormTextField'

const animationConfig = {
  visible: { opacity: 1, x: '0%' },
  hidden: { opacity: 0, x: '100%' },
}

const PosedWrapper = styled(posed.div(animationConfig))`
  position: absolute;
`

const PaperStyled = styled(Paper)`
  width: 320px;
  padding: 20px;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledButton = styled(Button)`
  && {
    margin-top: ${p => p.theme.spacing.unit}px;
  }
`

const FormError = styled(Typography).attrs({
  variant: 'body1',
  color: 'error',
  gutterBottom: true,
})``

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Обязательное поле'
  }
  if (!values.password) {
    errors.password = 'Обязательное поле'
  }
  return errors
}

class LoginForm extends Component {
  static propTypes = {}

  static defaultProps = {}

  handleLoginCompleted = ({ login: { accessToken, user } }) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    this.props.history.push('/')
  }

  renderForm = ({
    handleSubmit,
    submitting,
    pristine,
    submitError,
    dirtySinceLastSubmit,
  }) => (
    <PosedWrapper pose={this.props.match ? 'visible' : 'hidden'}>
      <PaperStyled>
        <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
          <Typography variant="headline" gutterBottom>
            Логин
          </Typography>
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="abc@ya.ru"
            margin="normal"
            component={FormTextField}
          />
          <Field
            name="password"
            type="password"
            label="Пароль"
            placeholder="123"
            autoComplete="new-password"
            margin="normal"
            component={FormTextField}
          />
          {!dirtySinceLastSubmit && <FormError>{submitError}</FormError>}
          <StyledButton
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting || pristine}
          >
            Войти
          </StyledButton>
          <StyledButton
            component={Link}
            to="/registration"
            size="small"
            disableRipple
          >
            Нет аккаунта? Зарегистрироваться
          </StyledButton>
        </StyledForm>
      </PaperStyled>
    </PosedWrapper>
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
        mutation={LOGIN_MUTATION}
        onCompleted={this.handleLoginCompleted}
      >
        {this.renderFinalForm}
      </Mutation>
    )
  }
}

export default LoginForm
