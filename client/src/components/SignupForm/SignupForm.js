import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

import { SIGNUP_MUTATION } from '../../mutations/signup'
import { ACCESS_TOKEN_KEY } from '../../config/constants'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const Field = styled(TextField)`
  width: 200px;
`

const Root = styled(Paper)`
  padding: 20px;
`

class SignupForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = inputName => event =>
    this.setState({ [inputName]: event.target.value })

  handleSignupCompleted = ({ signup: { accessToken, user } }) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken)
    console.log('yahoo')
    // this.props.navigation.navigate('RegistrationChat')
  }

  renderForm = (signup, { data, loading, error }) => (
    <Root>
      <Form
        noValidate
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          signup({
            variables: {
              email: this.state.email,
              password: this.state.password,
              name: '',
            },
          })
        }}
      >
        <Typography variant="headline" gutterBottom>
          Регистрация
        </Typography>
        <Field
          id="email"
          label="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
          error={!!error}
          helperText={error && error.message}
          margin="normal"
        />
        <Field
          id="password"
          label="Пароль"
          value={this.state.password}
          onChange={this.handleChange('password')}
          margin="normal"
        />
        <Button variant="raised" color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Root>
  )

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        onCompleted={this.handleSignupCompleted}
      >
        {this.renderForm}
      </Mutation>
    )
  }
}

export default SignupForm
