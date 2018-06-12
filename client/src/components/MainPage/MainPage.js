import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'

import DrawerNavigation from '../DrawerNavigation'
import RouteLists from '../RouteLists'

const Root = styled.div`
  flex: 1;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
`

const StyledAppBar = styled(AppBar).attrs({
  position: 'static',
})`
  && {
    z-index: ${p => p.theme.zIndex.drawer + 1};
  }
`
const MainContent = styled.main`
  flex: 1;
  background-color: ${p => p.theme.palette.background.default};
  padding: ${p => p.theme.spacing.unit * 3}px;
`

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

class MainPage extends React.Component {
  render() {
    return (
      <Root>
        <DrawerNavigation />
        <Column>
          <StyledAppBar>
            <Toolbar>
              <Typography
                variant="title"
                color="inherit"
                noWrap
                style={{ flex: 1 }}
              >
                Моя супер CRM
              </Typography>
              <IconButton color="inherit" onClick={this.props.onThemeChange}>
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </StyledAppBar>
          <MainContent>
            <Switch>
              <Route path="/lists" component={RouteLists} />
            </Switch>
          </MainContent>
        </Column>
      </Root>
    )
  }
}

export default MainPage
