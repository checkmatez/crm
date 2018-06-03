import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import styled from 'styled-components'

import { CUSTOMER_QUERY } from '../../queries/customer'

const Root = styled.div`
  flex: 1;
  flex-direction: row;
`

class CustomerDetails extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
  }

  static defaultProps = {}

  renderWithData = ({ data, loading, error }) => {
    if (loading) {
      return <CircularProgress />
    }
    const { customer } = data
    const emailRow = customer.contactDetails.find(cd => cd.kind === 'EMAIL')
    return (
      <Root>
        <Typography>This is CustomerDetails component</Typography>
        <Typography>{`Наименование: ${customer.name}`}</Typography>
        <Typography>{`Ответственный: ${
          customer.manager ? customer.manager.name : '<Не указан>'
        }`}</Typography>
        <Typography>{`Email: ${
          emailRow ? emailRow.value : '<Не указан>'
        }`}</Typography>
      </Root>
    )
  }

  render() {
    return (
      <Query
        query={CUSTOMER_QUERY}
        variables={{ id: this.props.match.params.id }}
        fetchPolicy="cache-and-network"
      >
        {this.renderWithData}
      </Query>
    )
  }
}

export default CustomerDetails
