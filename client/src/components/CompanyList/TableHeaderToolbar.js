import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Toolbar from '@material-ui/core/Toolbar'
import { lighten } from '@material-ui/core/styles/colorManipulator'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import Typography from '@material-ui/core/Typography'
import styled, { css } from 'styled-components'

const highlight = css`
  color: ${p =>
    p.theme.palette.type === 'light'
      ? p.theme.palette.secondary.main
      : p.theme.palette.text.primary};
  background-color: ${p =>
    p.theme.palette.type === 'light'
      ? lighten(p.theme.palette.secondary.light, 0.85)
      : p.theme.palette.secondary.dark};
`

const StyledToolbar = styled(({ hl, ...rest }) => <Toolbar {...rest} />)`
  flex: 1;
  padding-right: ${p => p.theme.spacing.unit};
  ${p => p.hl && highlight};
`

const TitleDiv = styled.div`
  flex: 0 0 auto;
`

const SpacerDiv = styled.div`
  flex: 1 1 100%;
`

const ActionsDiv = styled.div`
  color: ${p => p.theme.palette.text.secondary};
`

class TableHeaderToolbar extends Component {
  static propTypes = {
    numSelected: PropTypes.number.isRequired,
  }

  static defaultProps = {}

  handleAddClick = () => {}

  render() {
    const { numSelected } = this.props
    return (
      <StyledToolbar hl={numSelected > 0}>
        <TitleDiv>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title" id="tableTitle">
              Компании
            </Typography>
          )}
        </TitleDiv>
        <SpacerDiv />
        <ActionsDiv>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <Fragment>
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
              <Button
                component={Link}
                to={`${this.props.url}/add`}
                variant="fab"
                color="primary"
                aria-label="add"
                onClick={this.handleAddClick}
              >
                <AddIcon />
              </Button>
            </Fragment>
          )}
        </ActionsDiv>
      </StyledToolbar>
    )
  }
}

export default TableHeaderToolbar
