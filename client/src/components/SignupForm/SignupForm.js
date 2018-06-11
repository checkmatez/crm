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
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import posed from 'react-pose'

import { SIGNUP_MUTATION } from '../../mutations/signup'
import { ACCESS_TOKEN_KEY } from '../../config/constants'
import { makeFormSubmitHandler, focusFirstErrorDecorator } from '../../utils'
import FormTextField from '../FormTextField'

const animationConfig = {
  visible: { opacity: 1, x: '0%' },
  hidden: { opacity: 0, x: '-100%' },
}
const PosedWrapper = posed.div(animationConfig)

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

const StyledInfoIcon = styled(InfoIcon)`
  && {
    font-size: ${p => p.theme.typography.pxToRem(20)};
    color: ${p => p.theme.palette.primary.main};
  }
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

class SignupForm extends Component {
  static propTypes = {}

  static defaultProps = {}

  handleSignupCompleted = ({ signup: { accessToken, user } }) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    this.props.history.push('/')
  }

  renderForm = ({ handleSubmit, submitting, pristine, submitError }) => (
    <PosedWrapper pose={this.props.match ? 'visible' : 'hidden'}>
      <PaperStyled>
        <StyledForm onSubmit={handleSubmit} noValidate autoComplete="off">
          <Typography variant="headline" gutterBottom>
            Регистрация
          </Typography>
          <Field
            name="email"
            component={FormTextField}
            type="email"
            label="Email"
            placeholder="abc@ya.ru"
            margin="normal"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip id="tooltip-email" title="Адрес электронной почты">
                    <StyledInfoIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <Field
            name="password"
            component={FormTextField}
            type="password"
            label="Пароль"
            placeholder="123"
            autoComplete="new-password"
            margin="normal"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Tooltip id="tooltip-email" title="Минимум 6 символов">
                    <StyledInfoIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="headline" gutterBottom>
            {submitError}
          </Typography>
          <StyledButton
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting || pristine}
          >
            Зарегистрироваться
          </StyledButton>
          <StyledButton component={Link} to="/login" size="small" disableRipple>
            Уже есть аккаунт? Войти
          </StyledButton>
        </StyledForm>
      </PaperStyled>
    </PosedWrapper>
  )

  renderFinalForm = signup => (
    <FinalForm
      onSubmit={makeFormSubmitHandler(signup)}
      initialValues={{ email: '', password: '' }}
      decorators={[focusFirstErrorDecorator]}
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
