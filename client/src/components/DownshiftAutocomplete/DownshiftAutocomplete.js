import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import Downshift from 'downshift'
import matchSorter from 'match-sorter'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import styled from 'styled-components'

import { SEARCH_USER_QUERY } from '../../queries/searchUser'

const Container = styled.div`
  position: relative;
`

const StyledPaper = styled(Paper)`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  margin-top: ${p => p.theme.spacing.unit};
`

class DownshiftAutocomplete extends Component {
  static propTypes = {}

  render() {
    const { input, meta, placeholder, setFieldId, ...rest } = this.props
    return (
      <Downshift
        {...input}
        itemToString={item => (item ? item.name : '')}
        onInputValueChange={inputValue => {
          input.onChange(inputValue)
        }}
        onSelect={item => setFieldId(item.id)}
      >
        {({
          getRootProps,
          getLabelProps,
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          highlightedIndex,
          selectedItem,
        }) => (
          <Container {...getRootProps({ refKey: 'innerRef' })}>
            <TextField
              InputProps={{
                ...getInputProps({
                  name: input.name,
                  placeholder,
                }),
              }}
              fullWidth
              {...rest}
            />
            <Query
              query={SEARCH_USER_QUERY}
              variables={{ search: inputValue }}
              fetchPolicy="network-only"
            >
              {({ data, loading, error }) => {
                if (!isOpen || !data || !data.searchUser.length) {
                  return null
                }
                return (
                  <StyledPaper square>
                    {data.searchUser.map((user, index) => {
                      const highlighted = index === highlightedIndex
                      return (
                        <MenuItem
                          {...getItemProps({ item: user })}
                          key={user.id}
                          selected={highlighted}
                          component="div"
                        >
                          {user.name}
                        </MenuItem>
                      )
                    })}
                  </StyledPaper>
                )
              }}
            </Query>
          </Container>
        )}
      </Downshift>
    )
  }
}

export default DownshiftAutocomplete
