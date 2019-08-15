import React from 'react';
import FieldSelect from './FieldSelect';
import {TextField, Typography} from "@material-ui/core";
import {FieldCheckbox} from "./components";
import {makeStyles} from "@material-ui/styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(3),
    width: "100%"
  },
}));

const simpleField = ({input, label, type, meta: {touched, error}}) => {
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>

      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched &&
        error &&
        <span className="errorMessage">
    {error}
    </span>}
      </div>
    </div>
  )
};

const textField = ({input, label, helperText, type, onChangeHandler, disabled, inputProps, meta: {touched, error}, required}) => {
  return (
    <div>
      <TextField
        {...input}
        value={typeof input.value === 'object' ? input.value.label : input.value}
        autoFocus={!!input.autofocus}
        margin="dense"
        id={input.id}
        label={label + (required ? '*' : '')}
        type={type}
        fullWidth
        onChange={(e) => {
          if (onChangeHandler) {
            onChangeHandler(e);
          }
          return input.onBlur(e.target.value)
        }}
        name={input.name}
        error={!!error && touched}
        helperText={helperText}
        disabled={disabled}
        InputProps={inputProps}
      />
      {touched &&
      error && <Typography paragraph color="error">
        {error}
      </Typography>}
    </div>
  )
}

const textAreaField = ({input, label, type, meta: {touched, error}, required}) => {
  return (
    <div>
      <TextField
        defaultValue={input.value}
        autoFocus={!!input.autofocus}
        margin="dense"
        multiline
        rows={2}
        rowsMax={20}
        id={input.id}
        label={label + (required ? '*' : '')}
        onChange={(e) => input.onBlur(e.target.value)}
        fullWidth
        name={input.name}
        error={!!error && touched}
      />
      {touched &&
      error && <Typography paragraph color="error">
        {error}
      </Typography>}
    </div>
  )
};

const selectField = ({input, label, type, options, meta: {touched, error}}) => {
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>
      <div>
        <select {...input} placeholder={label}>
          <option key="_none" value="" disabled hidden> </option>
          {
            Object.entries(options).map(([key, value]) =>
              (
                <option key={key} value={key}>{value}</option>
              )
            )
          }
        </select>
        {touched &&
        error &&
        <span className="errorMessage">
    {error}
    </span>}
      </div>
    </div>
  )
};

// We need to pass input property to FieldSelect, in order to access onBlur and
// onChange callbacks, otherwise redux form will not update the value of this
// react-select field.
const chosenSelectField = ({input, label, type, loading, disabled, defaultValue, options, meta: {touched, error}, onMount, required}) => {
  const classes = useStyles();
  return (
    <div className={classes.formControl}>
      <FieldSelect
        input={input}
        name={input.name}
        options={options}
        multi={false}
        placeholder={label}
        label={label + (required ? '*' : '')}
        error={!!error && touched}
        onMount={onMount}
        loading={loading}
        disabled={disabled}
        value={input.value || defaultValue}
      />
      {
        touched && error &&
        <Typography paragraph color="error">
          {error}
        </Typography>
      }
    </div>
  )
};

const chosenMultiSelectField = ({input, label, type, options, meta: {touched, error}, onMount}) => {
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>
      <div>
        <FieldSelect
          input={input}
          name={input.name}
          options={options}
          multi={true}
          placeholder={label}
        />
        {touched &&
        error &&
        <Typography paragraph color="error">
          {error}
        </Typography>
        }
      </div>
    </div>
  )
};

const checkBoxField = ({input, label, type, meta: {touched, error}}) => {
  return (
    <div>
      <FieldCheckbox
        label={label}
        name={input.name}
        checked={input.value}
        onChange={input.onChange}
      />
      {
        touched && error &&
        <Typography paragraph color="error">
          {error}
        </Typography>
      }
    </div>
  )
};

const datePickerField = ({input, startDate, dateFormat, inputProps, meta: { touched, error }})=>{
  const classes = useStyles();
  return (
    <div className={classes.formControl}>
      <DatePicker
        customInput={
          <TextField
            margin="dense"
            fullWidth
            InputProps={inputProps}
          />
        }
        selected={input.value ? input.value : startDate}
        onChange={date=>input.onChange(date)}
        dateFormat={dateFormat}
      >
      </DatePicker>
      {touched && error && <span className="error_field">{error}</span>}
    </div>
  )
};

const render = ({input, label, type, helperText, loading, disabled, defaultValue, options, onChangeHandler, dateFormat, startDate, inputProps, meta: {touched, error}, onMount, required}) => {
  switch (type) {
    case 'select':
      return selectField({input, label, type, options, meta: {touched, error}, onMount, required});
    case 'chosenSelect':
      return chosenSelectField({
        input,
        label,
        type,
        loading,
        disabled,
        defaultValue,
        options,
        meta: {touched, error},
        onMount,
        required
      });
    case 'chosenMultiSelect':
      return chosenMultiSelectField({input, label, type, options, meta: {touched, error}, onMount, required});
    case 'textarea':
      return textAreaField({input, label, type, meta: {touched, error}, required});
    case 'checkbox':
      return checkBoxField({input, label, type, meta: {touched, error}, required});
    case 'text':
    case 'password':
      return textField({
        input,
        label,
        type,
        helperText,
        disabled,
        onChangeHandler,
        meta: {touched, error},
        required,
        inputProps
      });
    case 'datePicker':
      return datePickerField({input, dateFormat, startDate, inputProps,  meta: {touched, error}});
    default:
      return simpleField({input, label, type, meta: {touched, error}, required});
  }
};

const renderField = ({input, label, type, helperText, onMount, required, disabled, defaultValue, options,  dateFormat, startDate, inputProps, meta: {touched, error}}) => (
  <div className="form-item">
    {
      render({
        input,
        label,
        type,
        helperText,
        onMount,
        disabled,
        defaultValue,
        options,
        meta: {touched, error},
        required: !!required,
        dateFormat,
        startDate,
        inputProps
      })
    }
  </div>
);

export {
  renderField,
};
