import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

import DrawerNavigation from '../DrawerNavigation'
import RouteLists from '../RouteLists'

const Root = styled.div`
  flex: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
`

const StyledAppBar = styled(AppBar).attrs({
  position: 'absolute',
})`
  && {
    z-index: ${p => p.theme.zIndex.drawer + 1};
    left: ${p => p.theme.spacing.unit * 7}px;
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
        <DrawerNavigation />
        <StyledAppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              Моя супер CRM
            </Typography>
          </Toolbar>
        </StyledAppBar>
        <MainContent>
          <Switch>
            <Route path="/lists" component={RouteLists} />
          </Switch>
        </MainContent>
      </Root>
    )
  }
}

export default MainPage
