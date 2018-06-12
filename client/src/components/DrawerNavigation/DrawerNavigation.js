import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import DashboardIcon from '@material-ui/icons/Dashboard'
import ViewListIcon from '@material-ui/icons/ViewList'
import SendIcon from '@material-ui/icons/Send'
import SettingsIcon from '@material-ui/icons/Settings'
import styled, { css } from 'styled-components'

const paperCss = css`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
  width: ${p => p.theme.spacing.unit * 7}px;
`

const paperClassName = 'paper'
const StyledDrawer = styled(Drawer).attrs({
  variant: 'permanent',
  anchor: 'left',
  open: false,
  classes: {
    paper: paperClassName,
  },
})`
  & .${paperClassName} {
    ${paperCss};
  }
`

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
    color: ${p =>
      p.theme.palette.type === 'light'
        ? p.theme.palette.primary.main
        : p.theme.palette.text.primary}};
  }
`

class DrawerNavigation extends Component {
  render() {
    return (
      <StyledDrawer>
        <List>
          <StyledListItem component={StyledNavLink} to="/dashboard">
            <DashboardIcon />
          </StyledListItem>
          <StyledListItem component={StyledNavLink} to="/lists">
            <ViewListIcon />
          </StyledListItem>
          <StyledListItem component={StyledNavLink} to="/login">
            <SendIcon />
          </StyledListItem>
          <StyledListItem component={StyledNavLink} to="/settings">
            <SettingsIcon />
          </StyledListItem>
        </List>
        <Divider />
      </StyledDrawer>
    )
  }
}

export default DrawerNavigation
