import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow'
import styled from 'styled-components'
import dateFormat from 'date-fns/format'

import { CONTACTS_QUERY } from '../../queries/contacts'

const StyledTable = styled(Table)`
  min-width: 1020;
`

const columnData = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Фамилия, имя',
  },
  {
    id: 'createdAt',
    numeric: false,
    disablePadding: false,
    label: 'Дата создания',
  },
  {
    id: 'updatedAt',
    numeric: false,
    disablePadding: false,
    label: 'Дата изменения',
  },
  {
    id: 'managerName',
    numeric: false,
    disablePadding: false,
    label: 'Менеджер',
  },
  { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
]

class ContactList extends Component {
  state = {
    order: 'ASC',
    orderBy: 'lastName',
  }

  makeSortHandler = columnId => () => {
    this.setState(prevState => {
      if (prevState.orderBy === columnId) {
        return {
          order: prevState.order === 'ASC' ? 'DESC' : 'ASC',
        }
      }
      return { order: 'ASC', orderBy: columnId }
    })
  }

  renderTableHead = () => {
    const { order, orderBy } = this.state
    return (
      <TableHead>
        <TableRow>
          {columnData.map(column => (
            <TableCell
              key={column.id}
              numeric={column.numeric}
              padding={column.disablePadding ? 'none' : 'default'}
              sortDirection={
                orderBy === column.id ? order.toLowerCase() : false
              }
            >
              <TableSortLabel
                active={orderBy === column.id}
                direction={order.toLowerCase()}
                onClick={this.makeSortHandler(column.id)}
              >
                {column.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }

  renderTableBody = contacts => (
    <TableBody>
      {contacts.edges.map(({ node: contact }) => {
        const emailRow = contact.contactDetails.find(cd => cd.kind === 'EMAIL')
        return (
          <TableRow key={contact.id} tabIndex={-1}>
            <TableCell component="th" scope="row">
              <Typography
                component={Link}
                variant="body1"
                to={`${this.props.match.url}/${contact.id}`}
              >
                {`${contact.lastName} ${contact.firstName}`}
              </Typography>
            </TableCell>
            <TableCell>
              {dateFormat(contact.createdAt, 'DD.MM.YYYY HH:mm')}
            </TableCell>
            <TableCell>
              {dateFormat(contact.updatedAt, 'DD.MM.YYYY HH:mm')}
            </TableCell>
            <TableCell>{contact.manager ? contact.manager.name : ''}</TableCell>
            <TableCell>{emailRow ? emailRow.value : ''}</TableCell>
          </TableRow>
        )
      })}
    </TableBody>
  )

  renderQueryResult = ({ data, loading, error }) => {
    return (
      <Paper>
        <React.Fragment>
          <StyledTable>
            {this.renderTableHead()}
            {data && data.contacts && this.renderTableBody(data.contacts)}
          </StyledTable>
          {loading && <CircularProgress />}
        </React.Fragment>
      </Paper>
    )
  }

  render() {
    return (
      <Query
        query={CONTACTS_QUERY}
        variables={{
          first: 10,
          skip: 0,
          orderBy: `${this.state.orderBy}_${this.state.order}`,
        }}
        fetchPolicy="cache-and-network"
      >
        {this.renderQueryResult}
      </Query>
    )
  }
}

export default ContactList
