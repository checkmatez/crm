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
import IconButton from '@material-ui/core/IconButton'
import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import styled from 'styled-components'
import setFieldData from 'final-form-set-field-data'
import createDecorator from 'final-form-focus'
import posed from 'react-pose'

import { ADD_COMPANY_MUTATION } from '../../mutations/addCompany'
import { COMPANIES_QUERY } from '../../queries/companies'
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

const ContactFieldContainer = styled.div`
  && {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`

const makeSubmitHandler = mutation => async (
  { manager, ...rest },
  { getFieldState }
) => {
  try {
    await mutation({
      variables: {
        data: {
          managerId: getFieldState('manager').data.id,
          ...rest,
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

class CompanyEdit extends Component {
  static propTypes = {}

  static defaultProps = {}

  handleCompanyCreateCompleted = () => {
    this.props.history.push('/companies')
  }

  updateCache = (cache, { data: { createCompany } }) => {
    const { companies } = cache.readQuery({ query: COMPANIES_QUERY })
    cache.writeQuery({
      query: COMPANIES_QUERY,
      data: {
        companies: {
          ...companies,
          edges: [...companies.edges, { cursor: '', node: createCompany }],
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
        <FieldArray name="emails">
          {({ fields }) => (
            <Fragment>
              {fields.map((name, index) => {
                const field = (
                  <Field
                    key={`${name}-${index}`}
                    name={name}
                    type="email"
                    label="Email"
                    placeholder="abc@abc.ru"
                    autoComplete="new-password"
                    margin="normal"
                    fullWidth
                    component={FormTextField}
                  />
                )
                if (index === fields.length - 1) {
                  return (
                    <ContactFieldContainer>
                      <IconButton tabIndex={-1} onClick={() => fields.push('')}>
                        <AddCircleOutline />
                      </IconButton>
                      {field}
                    </ContactFieldContainer>
                  )
                }
                return field
              })}
            </Fragment>
          )}
        </FieldArray>
        <FieldArray name="phones">
          {({ fields }) => (
            <Fragment>
              {fields.map((name, index) => {
                const field = (
                  <Field
                    key={`${name}-${index}`}
                    name={name}
                    type="phone"
                    label="Телефон"
                    placeholder="+792587454555"
                    margin="normal"
                    fullWidth
                    component={FormTextField}
                  />
                )
                if (index === fields.length - 1) {
                  return (
                    <ContactFieldContainer>
                      <IconButton tabIndex={-1} onClick={() => fields.push('')}>
                        <AddCircleOutline />
                      </IconButton>
                      {field}
                    </ContactFieldContainer>
                  )
                }
                return field
              })}
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
          Добавить
        </Button>
      </StyledForm>
    </PaperStyled>
  )

  renderFinalForm = createCompany => (
    <FinalForm
      onSubmit={makeSubmitHandler(createCompany)}
      initialValues={{
        name: '',
        manager: null,
        emails: [''],
        phones: [''],
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
        mutation={ADD_COMPANY_MUTATION}
        update={this.updateCache}
        onCompleted={this.handleCompanyCreateCompleted}
      >
        {this.renderFinalForm}
      </Mutation>
    )
  }
}

export default CompanyEdit
