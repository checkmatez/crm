import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'

import ContactList from '../ContactList'
import CustomerDetails from '../CustomerDetails'
import CustomerEdit from '../CustomerEdit'

const asd = ({ match }) => (
  <Switch>
    <Route path={`${match.url}`} exact component={ContactList} />
    <Route path={`${match.url}/add`} component={CustomerEdit} />
    <Route path={`${match.url}/:id`} component={CustomerDetails} />
  </Switch>
)

export default ({ match }) => (
  <Switch>
    <Route
      exact
      path={`${match.url}`}
      render={() => <Redirect to={`${match.url}/customers`} />}
    />
    <Route path={`${match.url}/customers`} component={asd} />
  </Switch>
)
