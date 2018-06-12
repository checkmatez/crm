import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect, NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import styled, { css } from 'styled-components'

import CompanyList from '../CompanyList'
import CompanyDetails from '../CompanyDetails'
import CompanyEdit from '../CompanyEdit'
import ContactList from '../ContactList'
import ContactDetails from '../ContactDetails'
import ContactEdit from '../ContactEdit'

const StyledListItem = styled(ListItem).attrs({
  button: true,
  disableGutters: true,
})`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: ${p => p.theme.palette.action.selected};
  }
`

const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
`

const StyledPaper = styled(Paper)`
  && {
    margin-bottom: ${p => p.theme.spacing.unit * 2}px;
  }
`

const CompaniesRoute = ({ match }) => (
  <Switch>
    <Route path={`${match.url}`} exact component={CompanyList} />
    <Route path={`${match.url}/add`} component={CompanyEdit} />
    <Route path={`${match.url}/:id`} component={CompanyDetails} />
  </Switch>
)

const ContactsRoute = ({ match }) => (
  <Switch>
    <Route path={`${match.url}`} exact component={ContactList} />
    <Route path={`${match.url}/add`} component={ContactDetails} />
    <Route path={`${match.url}/:id`} component={ContactEdit} />
  </Switch>
)

const RouteLists = ({ match }) => (
  <React.Fragment>
    <StyledPaper>
      <StyledList>
        <StyledListItem component={StyledNavLink} to={`${match.url}/contacts`}>
          <Typography>Контакты</Typography>
        </StyledListItem>
        <StyledListItem component={StyledNavLink} to={`${match.url}/companies`}>
          <Typography>Компании</Typography>
        </StyledListItem>
      </StyledList>
    </StyledPaper>
    <Switch>
      <Route
        exact
        path={`${match.url}`}
        render={() => <Redirect to={`${match.url}/contacts`} />}
      />
      <Route path={`${match.url}/contacts`} component={ContactsRoute} />
      <Route path={`${match.url}/companies`} component={CompaniesRoute} />
    </Switch>
  </React.Fragment>
)
export default RouteLists
