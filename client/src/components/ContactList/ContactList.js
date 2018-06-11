import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import format from 'date-fns/format'
import Button from '@material-ui/core/Button'

import TableHeaderToolbar from './TableHeaderToolbar'
import EnhancedTableHead from './EnhancedTableHead'
import { CUSTOMERS_QUERY } from '../../queries/customers'

const TableWrapper = styled.div`
  overflow-x: auto;
`

const StyledTable = styled(Table)`
  min-width: 1020;
`

class ContactList extends Component {
  static propTypes = {}

  state = {
    order: 'DESC',
    orderBy: 'name',
    selected: [],
  }

  handleSelectAllClick = (data, event, checked) => {
    if (checked) {
      this.setState({ selected: data.map(n => n.id) })
      return
    }
    // this.setState({ selected: [] })
  }

  handleClick = (event, id) => {
    const { selected } = this.state
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    this.setState({ selected: newSelected })
  }

  handleRequestSort = (columnId, event) => {
    this.setState(prevState => {
      if (prevState.orderBy === columnId) {
        return {
          order: prevState.order === 'ASC' ? 'DESC' : 'ASC',
        }
      }
      return { order: 'ASC', orderBy: columnId }
    })
  }

  isSelected = id => this.state.selected.indexOf(id) !== -1

  renderTableBody = customers =>
    customers.edges.map(({ node: customer }) => {
      const isSelected = this.isSelected(customer.id)
      const emailRow = customer.contactDetails.find(cd => cd.kind === 'EMAIL')
      return (
        <TableRow
          key={customer.id}
          hover
          role="checkbox"
          aria-checked={isSelected}
          selected={isSelected}
          tabIndex={-1}
          onClick={event => this.handleClick(event, customer.id)}
        >
          <TableCell padding="dense">
            <Checkbox checked={isSelected} />
          </TableCell>
          <TableCell component="th" scope="row" padding="none">
            <Typography
              component={Link}
              variant="body1"
              to={`/customer/${customer.id}`}
            >
              {customer.name}
            </Typography>
          </TableCell>
          <TableCell>
            {format(customer.createdAt, 'DD.MM.YYYY HH:mm')}
          </TableCell>
          <TableCell>
            {format(customer.updatedAt, 'DD.MM.YYYY HH:mm')}
          </TableCell>
          <TableCell>{customer.manager ? customer.manager.name : ''}</TableCell>
          <TableCell>{emailRow ? emailRow.value : ''}</TableCell>
        </TableRow>
      )
    })

  renderWithData = ({ data, loading, error }) => {
    const { order, orderBy, selected } = this.state
    return (
      <Paper>
        <TableHeaderToolbar numSelected={selected.length} />
        <TableWrapper>
          <StyledTable>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={(...args) =>
                this.handleSelectAllClick(data, ...args)
              }
              onRequestSort={this.handleRequestSort}
              rowCount={loading ? 0 : data.customers.edges.length}
            />
            <TableBody>
              {loading && <CircularProgress />}
              {!loading && this.renderTableBody(data.customers)}
            </TableBody>
          </StyledTable>
        </TableWrapper>
      </Paper>
    )
  }

  render() {
    return (
      <Query
        query={CUSTOMERS_QUERY}
        variables={{
          first: 10,
          skip: 0,
          orderBy: `${this.state.orderBy}_${this.state.order}`,
        }}
        fetchPolicy="cache-and-network"
      >
        {this.renderWithData}
      </Query>
    )
  }
}

export default ContactList
