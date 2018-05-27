import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import CssBaseline from '@material-ui/core/CssBaseline'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

import configureApollo from '../../config/configureApollo'
import SignupForm from '../SignupForm'

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
        <Center>
          <CssBaseline />
          <SignupForm />
        </Center>
      </ApolloProvider>
    )
  }
}

export default App
