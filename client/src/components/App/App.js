import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

import configureApollo from '../../config/configureApollo'
import { ACCESS_TOKEN_KEY } from '../../config/constants'
import SignupForm from '../SignupForm'
import LoginForm from '../LoginForm'
import Dashboard from '../Dashboard'

const Center = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

class App extends Component {
  state = {
    apolloClient: null,
    hasToken: false,
  }

  async componentDidMount() {
    const { client } = await configureApollo()
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    this.setState({ apolloClient: client, hasToken: !!token })
  }

  render() {
    if (!this.state.apolloClient) {
      return <CircularProgress />
    }
    return (
      <ApolloProvider client={this.state.apolloClient}>
        <BrowserRouter>
          <Center>
            <CssBaseline />
            <Route
              exact
              path="/"
              render={() => (
                <Redirect
                  to={this.state.hasToken ? '/dashboard' : '/registration'}
                />
              )}
            />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/registration" component={SignupForm} />
            <Route path="/login" component={LoginForm} />
          </Center>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default App
