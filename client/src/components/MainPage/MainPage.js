import React from 'react'
import PropTypes from 'prop-types'
import { Link, Route, Switch } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import styled, { css } from 'styled-components'

import ContactList from '../ContactList'

const Root = styled.div`
  flex: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
`

const MyToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 8px;
`

const StyledAppBar = styled(AppBar).attrs({
  position: 'absolute',
})`
  && {
    z-index: ${p => p.theme.zIndex.drawer + 1};
    left: ${p => p.theme.spacing.unit * 7}px;
  }
`

const StyledIconButton = styled(IconButton).attrs({
  color: 'inherit',
  'aria-label': 'open drawer',
})`
  margin-left: 12;
  margin-right: 36;
  display: ${p => (p.open ? 'none' : 'block')};
`

const paperCss = css`
  position: relative;
  white-space: nowrap;
  overflow-x: hidden;
  width: ${p => p.theme.spacing.unit * 7}px;
`
const StyledListItem = styled(ListItem).attrs({
  button: true,
  disableGutters: true,
})`
  && {
    justify-content: center;
  }
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

const MainContent = styled.main`
  margin-top: ${p => p.theme.mixins.toolbar.minHeight + 15}px;
  flex-grow: 1;
  background-color: ${p => p.theme.palette.background.default};
  padding: ${p => p.theme.spacing.unit * 3}px;
`

class MainPage extends React.Component {
  render() {
    return (
      <Root>
        <StyledDrawer>
          <List>
            <StyledListItem component={Link} to="/dashboard">
              <InboxIcon />
            </StyledListItem>
            <StyledListItem component={Link} to="/contacts">
              <StarIcon />
            </StyledListItem>
            <StyledListItem component={Link} to="/login">
              <SendIcon />
            </StyledListItem>
            <StyledListItem component={Link} to="/login">
              <DraftsIcon />
            </StyledListItem>
          </List>
          <Divider />
        </StyledDrawer>
        <StyledAppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Моя супер CRM
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <MainContent>
          <Route path="/contacts" component={ContactList} />
        </MainContent>
      </Root>
    )
  }
}

export default MainPage
