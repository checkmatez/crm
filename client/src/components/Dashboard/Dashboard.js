import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class Dashboard extends Component {
  static propTypes = {}

  static defaultProps = {}

  render() {
    return <Root>This is Dashboard</Root>
  }
}

export default Dashboard
