import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

class ContactEdit extends Component {
  render() {
    return (
      <Root>
        <Typography variant="body1">ContactEdit</Typography>
      </Root>
    )
  }
}

export default ContactEdit
