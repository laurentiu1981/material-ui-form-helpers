import React, {useEffect} from "react";
import clsx from "clsx";
import Select from "react-select";
import {emphasize, makeStyles, useTheme} from "@material-ui/core/styles";
import {Typography, TextField, Paper, Chip} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import {CancelIcon} from "@material-ui/icons";
import PropTypes from "prop-types";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import AccountCircle from "@material-ui/core/SvgIcon/SvgIcon";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto"
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: theme.spacing(0.5, 0.25)
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2)
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing(2)
  }
}));

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function inputComponent({inputRef, ...props}) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

function Control(props) {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps }
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps
        }
      }}
      {...TextFieldProps}
    />
  );
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired
};

function Option(props) {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
};

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={clsx(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object
};

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  // Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

export default function IntegrationReactSelect(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);
  const [multi, setMulti] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  useEffect(() => {
    if (props.onMount) {
      setLoading(true);
      props.onMount().then(() => {
          setLoading(false);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (props.hasOwnProperty('loading') && _.isBoolean(props.loading)) {
      setLoading(props.loading)
    }
  });

  function handleChangeSingle(value) {
    setSingle(value);
    props.input.onChange(value);
  }

  function handleChangeMulti(value) {
    setMulti(value);
    props.input.onChange(value);
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      "& input": {
        font: "inherit"
      }
    })
  };

  const id = props.id
    ? `react-select-${props.id}`
    : `react-select-${props.name}`;
  return (
    <Select
      {...props}
      defaultValue={props.defaultValue ? { //this needs value and label to work for some reason.
        value: props.defaultValue,
        label: props.defaultValue
      } : ''}
      isDisabled={props.disabled}
      classes={classes}
      styles={selectStyles}
      inputId={id}
      isLoading={loading}
      TextFieldProps={{
        error: props.error,
        label: props.label,
        InputLabelProps: {
          htmlFor: id,
          shrink: true,
          error: props.error,
        },
        placeholder: props.placeholder,
        disabled: props.disabled,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <AccountCircle />
          </InputAdornment>
        ),
      }}
      options={props.options || []}
      components={components}
      onChange={props.isMulti ? handleChangeMulti : handleChangeSingle}
      onBlur={() => props.input.onBlur(props.input.value)}
    />
  );
}
