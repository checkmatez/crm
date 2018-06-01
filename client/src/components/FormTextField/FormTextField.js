import React from 'react'
import TextField from '@material-ui/core/TextField'

export default ({
  input: { name, onChange, value, ...restInput },
  meta,
  ...rest
}) => (
  <TextField
    {...rest}
    name={name}
    helperText={meta.touched ? meta.error || meta.submitError : undefined}
    error={(meta.error || meta.submitError) && meta.touched}
    inputProps={restInput}
    onChange={onChange}
    value={value}
  />
)
