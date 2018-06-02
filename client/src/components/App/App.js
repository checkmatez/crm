import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withTheme } from '@material-ui/core/styles'
import styled, { ThemeProvider } from 'styled-components'

import configureApollo from '../../config/configureApollo'
import { ACCESS_TOKEN_KEY } from '../../config/constants'
import SignupForm from '../SignupForm'
import LoginForm from '../LoginForm'
import MainPage from '../MainPage'

// https://github.com/ReactTraining/react-router/issues/5866
Route.propTypes = {
  ...Route.propTypes,
  path: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}

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
  }

  async componentDidMount() {
    const { client } = await configureApollo()
    this.setState({ apolloClient: client })
  }

  render() {
    if (!this.state.apolloClient) {
      return <CircularProgress />
    }
    return (
      <ApolloProvider client={this.state.apolloClient}>
        <BrowserRouter>
          <ThemeProvider theme={this.props.theme}>
            <Center>
              <CssBaseline />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Redirect
                      to={
                        localStorage.getItem(ACCESS_TOKEN_KEY)
                          ? '/dashboard'
                          : '/registration'
                      }
                    />
                  )}
                />
                <Route
                  path={['/registration', '/login']}
                  render={({ match, ...rest }) => (
                    <Center>
                      <SignupForm
                        match={match.url === '/registration'}
                        {...rest}
                      />
                      <LoginForm match={match.url === '/login'} {...rest} />
                    </Center>
                  )}
                />
                <Route component={MainPage} />
              </Switch>
            </Center>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    )
  }
}

export default withTheme()(App)
