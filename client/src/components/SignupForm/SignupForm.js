import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Formik, Field } from 'formik'
import styled from 'styled-components'

import { SIGNUP_MUTATION } from '../../mutations/signup'
import { ACCESS_TOKEN_KEY } from '../../config/constants'

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const CustomField = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <TextField
    {...field}
    {...props}
    error={touched[field.name] && errors[field.name]}
    helperText={errors[field.name]}
  />
)

const StyledCustomField = styled(CustomField)`
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

  validateForm = values => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Required'
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address'
    }
    return errors
  }

  renderForm = ({ handleSubmit, loading, error }) => (
    <Root>
      <Form onSubmit={handleSubmit}>
        <Typography variant="headline" gutterBottom>
          Регистрация
        </Typography>
        <Field
          name="email"
          component={StyledCustomField}
          label="email"
          type="email"
          margin="normal"
        />
        <Field
          name="password"
          component={StyledCustomField}
          label="Пароль"
          margin="normal"
        />
        <Button variant="raised" color="primary" type="submit">
          Зарегистрироваться
        </Button>
      </Form>
    </Root>
  )

  // renderForm = (signup, { data, loading, error }) => (
  //   <Root>
  //     <Form
  //       noValidate
  //       autoComplete="off"
  //       onSubmit={e => {
  //         e.preventDefault()
  //         signup({
  //           variables: {
  //             email: this.state.email,
  //             password: this.state.password,
  //             name: '',
  //           },
  //         })
  //       }}
  //     >
  //       <Typography variant="headline" gutterBottom>
  //         Регистрация
  //       </Typography>
  //       <Field
  //         id="email"
  //         label="email"
  //         value={this.state.email}
  //         onChange={this.handleChange('email')}
  //         error={!!error}
  //         helperText={error && error.message}
  //         margin="normal"
  //       />
  //       <Field
  //         id="password"
  //         label="Пароль"
  //         value={this.state.password}
  //         onChange={this.handleChange('password')}
  //         margin="normal"
  //       />
  //       <Button variant="raised" color="primary" type="submit">
  //         Зарегистрироваться
  //       </Button>
  //     </Form>
  //   </Root>
  // )

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        onCompleted={this.handleSignupCompleted}
      >
        {(signup, { data, loading, error }) => {
          console.log('error', error)
          console.log('error JSON', JSON.stringify(error, null, 2))
          return (
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={this.validateForm}
              onSubmit={variables =>
                signup({
                  variables: {
                    ...variables,
                    name: '',
                  },
                })
              }
            >
              {({ handleSubmit }) =>
                this.renderForm({ handleSubmit, loading, error })
              }
            </Formik>
          )
        }}
      </Mutation>
    )
  }
}

export default SignupForm
