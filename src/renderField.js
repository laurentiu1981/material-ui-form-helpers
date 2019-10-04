import React from 'react';
import { TextField, Typography } from "@material-ui/core";
import { FieldCheckbox, FieldSelect, FieldColor } from "./components";
import { makeStyles } from "@material-ui/core";
import DatePicker from "react-datepicker";
import _ from 'lodash';
import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles(theme => ({
  formControl: {
    marginTop: theme.spacing(3),
    width: "100%"
  },
  errorMessage: {
    marginBottom: theme.spacing(1)
  }
}));

const renderErrors = (error) => {
	const classes = useStyles();
  if (_.isArray(error)) {
    return error.map((message, key) =>
			<Typography className={classes.errorMessage} key={key} paragraph color="error">
				{message}
			</Typography>
    )
  }
  else {
    return (
			<Typography className={classes.errorMessage} paragraph color="error">
				{error}
			</Typography>
    )
  }
};

const simpleField = ({input, label, type, meta: {touched, error}}) => {
  return (
    <div>
      <label htmlFor={input.name}>
        {label}
      </label>

      <div>
        <input {...input} placeholder={label} type={type}/>
				{
					touched && error && renderErrors(error)
				}
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
			{
				touched && error && renderErrors(error)
			}
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
			{
				touched && error && renderErrors(error)
			}
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
          <option key="_none" value="" disabled hidden></option>
          {
            Object.entries(options).map(([key, value]) =>
              (
                <option key={key} value={key}>{value}</option>
              )
            )
          }
        </select>
				{
					touched && error && renderErrors(error)
				}
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
        isMulti={false}
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
				touched && error && renderErrors(error)
      }
    </div>
  )
};

const chosenMultiSelectField = ({input, label, type, loading, disabled, defaultValue, options, meta: {touched, error}, onMount, required}) => {
  const classes = useStyles();
  return (
    <div className={classes.formControl}>
      <div>
        <FieldSelect
          input={input}
          name={input.name}
          options={options}
          isMulti={true}
					multi={true}
          placeholder={label}
          label={label + (required ? '*' : '')}
          error={!!error && touched}
          onMount={onMount}
          loading={loading}
          disabled={disabled}
          value={input.value || defaultValue}
        />
				{
					touched && error && renderErrors(error)
				}
      </div>
    </div>
  )
};

const checkBoxField = ({input, checked, label, type, meta: {touched, error}}) => {
  return (
    <div>
      <FieldCheckbox
        label={label}
        name={input.name}
        checked={input.value || checked}
        onChange={input.onChange}
      />
      {
				touched && error && renderErrors(error)
      }
    </div>
  )
};

const datePickerField = ({input, startDate, label, dateFormat, inputProps, meta: {touched, error}}) => {
  const classes = useStyles();
  return (
    <div className={classes.formControl}>
      <DatePicker
        customInput={
          <TextField
            margin="dense"
            fullWidth
            label={label}
            InputProps={inputProps}
          />
        }
				error={!!error && touched}
        selected={input.value ? input.value : startDate}
        onChange={date => input.onChange(date)}
        dateFormat={dateFormat}
      >
      </DatePicker>
			{
				touched && error && renderErrors(error)
			}
    </div>
  )
};

const colorField = ({input, label, type, meta: {touched, error}}) => {
	return (
		<div>
			<FieldColor
				input={input}
				name={input.name}
				label={label}
			/>
			{
				touched && error && renderErrors(error)
			}
		</div>
	)
};

const fieldsGroupWrapper = ({children, input, label, type, meta: {touched, error}}) => {
	return (
		<div>
			{children}
			{
				touched && error && renderErrors(error)
			}
		</div>
	)
};

const render = (props) => {
  switch (props.type) {
    case 'select':
      return selectField(props);
    case 'chosenSelect':
      return chosenSelectField(props);
    case 'chosenMultiSelect':
      return chosenMultiSelectField(props);
    case 'textarea':
      return textAreaField(props);
    case 'checkbox':
      return checkBoxField(props);
    case 'text':
    case 'password':
      return textField(props);
    case 'datePicker':
      return datePickerField(props);
    case 'fieldsGroupWrapper':
      return fieldsGroupWrapper(props);
		case 'color':
			return colorField(props);
    default:
      return simpleField(props);
  }
};

const renderField = (props) => (
  <div className="form-item">
    {
      render(props)
    }
  </div>
);

export {
  renderField,
  renderErrors
};
