import React, { useEffect, Component } from 'react';
import { FormControlLabel, Checkbox, withStyles, TextField, makeStyles, Typography, Chip, Paper, CircularProgress as CircularProgress$1, LinearProgress, Grid, Button as Button$1, IconButton } from '@material-ui/core';
import autobind from 'class-autobind';
import { SketchPicker } from 'react-color';
import clsx from 'clsx';
import Select from 'react-select';
import { useTheme, emphasize } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Cancel, AddCircle, Delete } from '@material-ui/icons';
import PropTypes from 'prop-types';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/core/SvgIcon';
import isBoolean from 'lodash/isBoolean';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles as makeStyles$1 } from '@material-ui/styles/index';
import Button from '@material-ui/core/Button';
import Table$1 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper$1 from '@material-ui/core/Paper';
import { makeStyles as makeStyles$2 } from '@material-ui/styles';
import _$1 from 'lodash';
import TablePagination from '@material-ui/core/TablePagination';
import Chip$1 from '@material-ui/core/Chip';
import { Field, reduxForm, change, arrayRemove, FieldArray, formValueSelector } from 'redux-form';
import ClearIcon from '@material-ui/icons/Clear';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography$1 from '@material-ui/core/Typography/Typography';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var FieldCheckbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FieldCheckbox, _React$Component);

  function FieldCheckbox(props) {
    var _this;

    _classCallCheck(this, FieldCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldCheckbox).call(this, props));
    autobind(_assertThisInitialized(_this));
    _this.state = {
      checked: !!props.checked
    };
    return _this;
  }

  _createClass(FieldCheckbox, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.props.onChange(e);
      this.setState({
        checked: !this.state.checked
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          name = _this$props.name;
      return React.createElement(FormControlLabel, {
        control: React.createElement(Checkbox, {
          checked: this.state.checked,
          color: "default",
          onChange: this.handleChange,
          value: name
        }),
        label: label
      });
    }
  }]);

  return FieldCheckbox;
}(React.Component);

var styles = function styles(theme) {
  return {
    title: {
      width: '500px',
      backgroundColor: '#edeeef'
    },
    colorField: {
      display: 'flex',
      flexDirection: 'row'
    },
    colorDiv: {
      marginTop: "15px",
      marginBottom: "4px",
      width: '38px',
      height: '38px',
      marginLeft: '10px',
      border: '1px solid #edeeef',
      display: "flex-inline"
    },
    colorPicker: {
      position: 'absolute',
      left: '155px',
      top: '25px',
      zIndex: 1
    },
    colorWrapper: {
      display: 'flex',
      alignItems: 'center'
    },
    notes: {
      width: '100%'
    }
  };
};

var FieldColor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(FieldColor, _React$Component);

  function FieldColor(props) {
    var _this;

    _classCallCheck(this, FieldColor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FieldColor).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleColorChangeComplete", function (color) {
      _this.props.input.onBlur(color.hex);

      _this.toggleColorPicker();
    });

    _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
      _this.props.input.onBlur(e.target.value);
    });

    autobind(_assertThisInitialized(_this));
    _this.state = {
      openColorPicker: false
    };
    return _this;
  }

  _createClass(FieldColor, [{
    key: "toggleColorPicker",
    value: function toggleColorPicker() {
      this.setState({
        openColorPicker: !this.state.openColorPicker
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          input = _this$props.input,
          label = _this$props.label,
          placeholder = _this$props.placeholder;
      var openColorPicker = this.state.openColorPicker;
      return React.createElement("div", {
        className: classes.colorField
      }, React.createElement(TextField, {
        margin: "dense",
        name: input.name,
        id: input.id,
        value: input.value,
        label: label,
        type: "text",
        placeholder: placeholder,
        onChange: this.handleInputChange // InputProps={{ style: { color: input.value } }}

      }), React.createElement("div", {
        className: classes.colorDiv,
        style: {
          backgroundColor: input.value
        },
        onClick: this.toggleColorPicker
      }), openColorPicker && React.createElement(SketchPicker, {
        className: classes.colorPicker,
        color: input.value,
        onChangeComplete: this.handleColorChangeComplete
      }));
    }
  }]);

  return FieldColor;
}(React.Component);

var FieldColor$1 = withStyles(styles)(FieldColor);

var useStyles = makeStyles(function (theme) {
  return {
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
      backgroundColor: emphasize(theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
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
  };
});

function NoOptionsMessage(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.noOptionsMessage
  }, props.innerProps), props.children);
}

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function inputComponent(_ref) {
  var inputRef = _ref.inputRef,
      props = _objectWithoutProperties(_ref, ["inputRef"]);

  return React.createElement("div", _extends({
    ref: inputRef
  }, props));
}

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

function Control(props) {
  var children = props.children,
      innerProps = props.innerProps,
      innerRef = props.innerRef,
      _props$selectProps = props.selectProps,
      classes = _props$selectProps.classes,
      TextFieldProps = _props$selectProps.TextFieldProps;
  return React.createElement(TextField, _extends({
    fullWidth: true,
    InputProps: {
      inputComponent: inputComponent,
      inputProps: _objectSpread2({
        className: classes.input,
        ref: innerRef,
        children: children
      }, innerProps)
    }
  }, TextFieldProps));
}

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  selectProps: PropTypes.object.isRequired
};

function Option(props) {
  return React.createElement(MenuItem, _extends({
    ref: props.innerRef,
    selected: props.isFocused,
    component: "div",
    style: {
      fontWeight: props.isSelected ? 500 : 400
    }
  }, props.innerProps), props.children);
}

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool
};

function Placeholder(props) {
  return React.createElement(Typography, _extends({
    color: "textSecondary",
    className: props.selectProps.classes.placeholder
  }, props.innerProps), props.children);
}

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function SingleValue(props) {
  return React.createElement(Typography, _extends({
    className: props.selectProps.classes.singleValue
  }, props.innerProps), props.children);
}

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired
};

function ValueContainer(props) {
  return React.createElement("div", {
    className: props.selectProps.classes.valueContainer
  }, props.children);
}

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired
};

function MultiValue(props) {
  return React.createElement(Chip, {
    tabIndex: -1,
    label: props.children,
    className: clsx(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
    onDelete: props.removeProps.onClick,
    deleteIcon: React.createElement(Cancel, props.removeProps)
  });
}

MultiValue.propTypes = {
  children: PropTypes.node,
  isFocused: PropTypes.bool,
  removeProps: PropTypes.object.isRequired,
  selectProps: PropTypes.object.isRequired
};

function Menu(props) {
  return React.createElement(Paper, _extends({
    square: true,
    className: props.selectProps.classes.paper
  }, props.innerProps), props.children);
}

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object
};
var components = {
  Control: Control,
  Menu: Menu,
  MultiValue: MultiValue,
  NoOptionsMessage: NoOptionsMessage,
  // Option,
  Placeholder: Placeholder,
  SingleValue: SingleValue,
  ValueContainer: ValueContainer
};
function IntegrationReactSelect(props) {
  var classes = useStyles();
  var theme = useTheme();

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      single = _React$useState2[0],
      setSingle = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      multi = _React$useState4[0],
      setMulti = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      loading = _React$useState6[0],
      setLoading = _React$useState6[1];

  useEffect(function () {
    if (props.onMount) {
      setLoading(true);
      props.onMount().then(function () {
        setLoading(false);
      });
    }
  }, []);
  useEffect(function () {
    if (props.hasOwnProperty('loading') && isBoolean(props.loading)) {
      setLoading(props.loading);
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

  var selectStyles = {
    input: function input(base) {
      return _objectSpread2({}, base, {
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      });
    }
  };
  var id = props.id ? "react-select-".concat(props.id) : "react-select-".concat(props.name);
  var defaultValue = props.defaultValue ? {
    //this needs value and label to work for some reason.
    value: props.defaultValue,
    label: props.defaultValue
  } : '';
  return React.createElement(Select, _extends({}, props, {
    value: props.input.value || defaultValue,
    isDisabled: props.disabled,
    classes: classes,
    styles: selectStyles,
    inputId: id,
    isLoading: loading,
    TextFieldProps: {
      error: props.error,
      label: props.label,
      InputLabelProps: {
        htmlFor: id,
        shrink: true,
        error: props.error
      },
      placeholder: props.placeholder,
      disabled: props.disabled
    },
    InputProps: {
      startAdornment: React.createElement(InputAdornment, {
        position: "start"
      }, React.createElement(AccountCircle, null))
    },
    options: props.options || [],
    components: components,
    onChange: props.isMulti ? handleChangeMulti : handleChangeSingle,
    onBlur: function onBlur() {
      return props.input.onBlur(props.input.value);
    }
  }));
}

var useStyles$1 = makeStyles$1({
  progress: {
    marginRight: "5px"
  }
});

var SubmitButton = function SubmitButton(props) {
  var classes = useStyles$1();

  var renderProgress = function renderProgress(submitting) {
    if (submitting) {
      return React.createElement(CircularProgress, {
        size: 20,
        className: classes.progress
      });
    } else {
      return null;
    }
  };

  return React.createElement(Button, props, renderProgress(props.is_submitting), props.children);
};

SubmitButton.propTypes = {
  is_submitting: PropTypes.number
};

var useStyles$2 = makeStyles$2({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  overlay: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: '#CCCCCC',
    width: "100%",
    height: "100%"
  }
});

var LoadingBox = function LoadingBox() {
  var classes = useStyles$2();
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: classes.root
  }, React.createElement("div", {
    className: classes.overlay
  }), React.createElement(CircularProgress$1, null)));
};

var useStyles$3 = makeStyles$2({
  root: {
    fontSize: "16px",
    fontWeight: 600
  }
});

var SectionHeader = function SectionHeader(props) {
  var classes = useStyles$3();
  return React.createElement(TableHead, null, React.createElement(TableRow, null, React.createElement(TableCell, {
    colSpan: props.colSpan,
    className: classes.root
  }, props.sectionLabel)));
};
SectionHeader.defaultProps = {
  colspan: 2
};
SectionHeader.propTypes = {
  sectionLabel: PropTypes.string.isRequired,
  colSpan: PropTypes.number
};

var Paginator =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Paginator, _React$Component);

  function Paginator(props) {
    var _this;

    _classCallCheck(this, Paginator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Paginator).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChangePage",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(event, newPage) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.props.updatePaginationCallback({
                  page: newPage
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "handleChangeRowsPerPage",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(event) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this.props.updatePaginationCallback({
                  page: 0,
                  rowsPerPage: +event.target.value
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Paginator, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          totalNumberOfEntities = _this$props.totalNumberOfEntities,
          rowsPerPage = _this$props.rowsPerPage,
          page = _this$props.page;
      return React.createElement(React.Fragment, null, React.createElement(TablePagination, {
        rowsPerPageOptions: [10, 20, 50],
        component: "div",
        count: totalNumberOfEntities,
        rowsPerPage: rowsPerPage,
        page: page,
        backIconButtonProps: {
          'aria-label': 'Previous Page'
        },
        nextIconButtonProps: {
          'aria-label': 'Next Page'
        },
        onChangePage: this.handleChangePage,
        onChangeRowsPerPage: this.handleChangeRowsPerPage
      }));
    }
  }]);

  return Paginator;
}(React.Component);

Paginator.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  totalNumberOfEntities: PropTypes.number,
  updatePaginationCallback: PropTypes.func
};
Paginator.defaultProps = {
  page: 0,
  rowsPerPage: 10,
  totalNumberOfEntities: 10,
  updatePaginationCallback: function updatePaginationCallback() {}
};

var useStyle = makeStyles$2({
  container: {
    margin: '5px',
    display: 'flex',
    position: 'relative',
    paddingTop: '30px'
  },
  field: {
    margin: '5px'
  }
});
var FieldPair = function FieldPair(_ref) {
  var field = _ref.field,
      defaultValue = _ref.defaultValue,
      options = _ref.options,
      removeCallback = _ref.removeCallback,
      index = _ref.index;
  var classes = useStyle();
  return React.createElement("div", {
    className: "".concat(index, "-sort-pair")
  }, React.createElement("div", null, React.createElement(Field, {
    name: "".concat(field, ".fieldName"),
    type: "chosenSelect",
    component: renderField,
    options: options,
    label: "Sort",
    className: classes.field
  }), React.createElement(Field, {
    name: "".concat(field, ".direction"),
    type: "chosenSelect",
    component: renderField,
    options: [{
      label: "ASC",
      key: "ASC"
    }, {
      label: "DESC",
      key: "DESC"
    }],
    label: "Direction",
    className: classes.field
  }), React.createElement(ClearIcon, {
    className: "".concat(index, "-sort-pair-clear-icon"),
    onClick: removeCallback
  })));
};

var useStyle$1 = makeStyles$2({
  paper: {
    padding: '1em'
  }
});

var FormWrapper = function FormWrapper(props) {
  var classes = useStyle$1();
  return React.createElement(Paper$1, {
    className: classes.paper
  }, props.children);
};

var styles$1 = function styles(theme) {
  return {
    addCircle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  };
};

var FilterFormField = function FilterFormField(props) {
  switch (props.type) {
    case 'min-max':
      return React.createElement(React.Fragment, null, React.createElement(Field, {
        type: "text",
        component: renderField,
        name: "".concat(props.name, "_min"),
        key: "".concat(props.label, "_min"),
        label: "".concat(props.label, " Min")
      }, "".concat(props.label, " Min")), React.createElement(Field, {
        type: "text",
        component: renderField,
        name: "".concat(props.name, "_max"),
        key: "".concat(props.label, "_max"),
        label: "".concat(props.label, " Max")
      }, "".concat(props.label, " Max")));

    default:
      return React.createElement(Field, {
        type: "text",
        component: renderField,
        name: props.name,
        key: props.key,
        label: props.label
      }, props.label);
  }
};

var TableFilterForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableFilterForm, _React$Component);

  function TableFilterForm(props) {
    var _this;

    _classCallCheck(this, TableFilterForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableFilterForm).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "renderField", function (field) {
      return React.createElement(FilterFormField, {
        name: field.name,
        key: field.label,
        label: field.label,
        type: field.filter.type
      }, field.label);
    });

    _defineProperty(_assertThisInitialized(_this), "renderBasicFilters", function () {
      return _this.props.tableDefinition.filter(function (field) {
        return field.hasOwnProperty("filter") && field.filter.hasOwnProperty("type") && field.filter.hasOwnProperty("basicFilter");
      }).map(_this.renderField);
    });

    _defineProperty(_assertThisInitialized(_this), "renderAdvancedFilters", function () {
      if (_this.state.isAdvanced) {
        var sortFields = _this.props.tableDefinition.filter(function (field) {
          return field.hasOwnProperty("sort") && field.filter.hasOwnProperty("type");
        });

        return React.createElement("div", null, _this.props.tableDefinition.filter(function (field) {
          return field.hasOwnProperty("filter") && field.filter.hasOwnProperty("type") && !field.filter.hasOwnProperty("basicFilter");
        }).map(_this.renderField), React.createElement(Typography$1, {
          variant: "h6"
        }, "Sort"), React.createElement(FieldArray, {
          name: "sortPairs",
          availableFields: sortFields,
          component: _this.renderPairs
        }));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderPairs", function (_ref) {
      var fields = _ref.fields,
          availableFields = _ref.availableFields;
      var options = availableFields.map(function (field) {
        return {
          value: field.name,
          label: field.label
        };
      });
      return React.createElement(React.Fragment, null, fields.map(function (field, index) {
        return React.createElement(FieldPair, {
          key: index,
          field: field,
          options: options,
          removeCallback: function removeCallback() {
            return fields.remove(index);
          }
        });
      }), React.createElement("div", {
        className: "add-new-sort-pair"
      }, React.createElement(AddCircleIcon, {
        onClick: function onClick() {
          return fields.push();
        }
      })));
    });

    _defineProperty(_assertThisInitialized(_this), "renderChips", function (submittedData) {
      if (!_this.state.isAdvanced) {
        return React.createElement(Paper$1, null, Object.keys(submittedData).map(function (key) {
          if (key === "sortPairs") {
            return submittedData[key].map(function (element) {
              return React.createElement(Chip$1, {
                key: element.fieldName,
                label: "".concat(element.fieldName.label, ": ").concat(element.direction.label),
                onDelete: _this.handleChipDeleteForSort(element),
                color: "secondary"
              });
            });
          } else {
            return React.createElement(Chip$1, {
              key: key,
              label: "".concat(key, ": ").concat(_$1.isObject(submittedData[key]) ? Object.values(submittedData[key]) : submittedData[key]),
              onDelete: _this.handleChipDeleteForFilter(key),
              color: "primary"
            });
          }
        }));
      }

      return null;
    });

    _defineProperty(_assertThisInitialized(_this), "onClickExpandHandler", function (event) {
      event.preventDefault();

      _this.setState({
        isAdvanced: !_this.state.isAdvanced
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChipDeleteForSort", function (element) {
      return function () {
        if (_this.state.submittedData.hasOwnProperty("sortPairs")) {
          var keyOfElementInSortPairs = _this.state.submittedData.sortPairs.indexOf(element);

          var submittedData = _$1.omit(_this.state.submittedData, "sortPairs");

          submittedData["sortPairs"] = _this.state.submittedData.sortPairs.filter(function (value) {
            return value !== element;
          });

          _this.setState({
            submittedData: submittedData
          }, function () {
            _this.props.onSubmit(_this.state.submittedData);
          });

          _this.props.arrayRemoveElement('sortPairs', keyOfElementInSortPairs);
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleChipDeleteForFilter", function (keyChipToDelete) {
      return function () {
        if (_this.state.submittedData.hasOwnProperty(keyChipToDelete)) {
          var submittedData = _$1.omit(_this.state.submittedData, keyChipToDelete);

          _this.setState({
            submittedData: submittedData
          }, function () {
            _this.props.onSubmit(_this.state.submittedData);
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "onSubmit",
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(formValues) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.props.onSubmit(formValues);

              case 2:
                _this.setState({
                  submittedData: formValues
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
      _this.props.destroy('TableFilterForm');

      _this.setState({
        submittedData: {}
      });

      _this.props.onResetCallback();
    });

    _this.state = {
      isAdvanced: false,
      submittedData: {
        "sortPairs": props.defaultSort
      }
    };
    return _this;
  }

  _createClass(TableFilterForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          submitting = _this$props.submitting,
          classes = _this$props.classes,
          fields = _this$props.fields,
          submittedData = _this$props.submittedData;
      var isSubmitting = submitting ? 1 : 0;
      return React.createElement(FormWrapper, null, React.createElement("form", {
        onSubmit: this.props.handleSubmit(this.onSubmit),
        autoComplete: "off"
      }, this.renderBasicFilters(), this.renderAdvancedFilters(), React.createElement("div", null, React.createElement(Button, {
        onClick: this.onClickExpandHandler
      }, "Advanced Filters")), this.renderChips(this.state.submittedData), React.createElement(SubmitButton, {
        type: "submit",
        variant: "contained",
        color: "primary",
        is_submitting: isSubmitting,
        disabled: !!submitting
      }, "Filter"), React.createElement(Button, {
        onClick: this.onCancel
      }, "Cancel")));
    }
  }]);

  return TableFilterForm;
}(React.Component);

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      sortPairs: ownProps.defaultSort
    }
  };
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeFieldValue: function changeFieldValue(field, value) {
      dispatch(change('TableFilterForm', field, value));
    },
    arrayRemoveElement: function arrayRemoveElement(field, index) {
      dispatch(arrayRemove('TableFilterForm', field, index));
    }
  };
};

TableFilterForm.propTypes = {
  onResetCallback: PropTypes.func
};
TableFilterForm = reduxForm({
  form: 'TableFilterForm'
})(TableFilterForm);
var TableFilterForm$1 = withStyles(styles$1)(connect(mapStateToProps, mapDispatchToProps)(TableFilterForm));

var styles$2 = function styles(theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      position: "relative"
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background["default"]
      }
    }
  };
};

var CustomTableCell = withStyles(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      padding: "0px 10px"
    },
    body: {
      padding: "0px 10px"
    }
  };
})(TableCell);

var BasicTable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BasicTable, _React$Component);

  function BasicTable(props) {
    var _this;

    _classCallCheck(this, BasicTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicTable).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "updatePagination", function (paginationInfo) {
      _this.setState({
        paginationInfo: _objectSpread2({}, _this.state.paginationInfo, {}, paginationInfo)
      }, function () {
        _this.props.fetchCallback(_this.state.filterOptions, _this.state.paginationInfo);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filterOptions) {
      _this.setState({
        filterOptions: _objectSpread2({}, _this.state.filterOptions, {}, filterOptions)
      }, function () {
        _this.props.fetchCallback(_this.state.filterOptions, _this.state.paginationInfo);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "defaultSorts", function () {
      return _this.tableDefinition.filter(function (field) {
        return field.hasOwnProperty('sort') && field.sort.hasOwnProperty('defaultSort');
      }).map(function (field) {
        return {
          fieldName: {
            value: field.name,
            label: field.label
          },
          direction: {
            value: field.sort.defaultSort,
            label: field.sort.defaultSort
          }
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onReset", function () {
      _this.setState({
        filterOptions: {},
        paginationInfo: _objectSpread2({}, _this.state.paginationInfo, {
          page: 0,
          rowsPerPage: _this.props.paginatorInfo.rowsPerPage
        })
      }, function () {
        _this.props.fetchCallback({}, {
          page: 0,
          rowsPerPage: _this.props.paginatorInfo.rowsPerPage
        });
      });
    });

    autobind(_assertThisInitialized(_this));

    _this._initialize(props);

    _this.state = {
      filterOptions: {},
      paginationInfo: {}
    };
    return _this;
  }

  _createClass(BasicTable, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContent) {
      this._initialize(nextProps);

      return true;
    }
  }, {
    key: "_initialize",
    value: function _initialize(props) {
      this.items = _$1.isArray(props.items) ? props.items : Object.values(props.items);
      this.tableDefinition = this._generateTableDefinition(props);
    }
  }, {
    key: "_generateTableDefinition",
    value: function _generateTableDefinition(props) {
      if (props.tableDefinition.length) {
        return props.tableDefinition;
      } else if (this.items.length) {
        return Object.keys(this.items[0]).map(function (key) {
          return {
            label: key.charAt(0).toLocaleUpperCase() + key.slice(1),
            property: key
          };
        });
      }

      return [];
    }
  }, {
    key: "renderSectionHeader",
    value: function renderSectionHeader() {
      var sectionLabel = this.props.sectionLabel;

      if (sectionLabel) {
        return React.createElement(SectionHeader, {
          sectionLabel: sectionLabel,
          colSpan: this.tableDefinition.length
        });
      }
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var _this2 = this;

      var header = this.tableDefinition.map(function (item) {
        return {
          label: item['label']
        };
      });

      if (header.length) {
        return React.createElement(TableHead, null, React.createElement(TableRow, null, header.map(function (item, index) {
          return _this2.renderHeaderCell(item, index);
        })));
      }

      return null;
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      var _this3 = this;

      return React.createElement(TableBody, null, this.items.map(function (item, index) {
        return _this3.renderRow(item, index);
      }));
    }
  }, {
    key: "renderHeaderCell",
    value: function renderHeaderCell(itemDefinition, index) {
      return React.createElement(CustomTableCell, _extends({
        key: index
      }, itemDefinition), itemDefinition['label']);
    }
  }, {
    key: "getCellValue",
    value: function getCellValue(rowDefinition, item) {
      if (!rowDefinition['property']) {
        return '';
      }

      if (typeof rowDefinition['property'] === 'string') {
        return item[rowDefinition['property']];
      } else if (_$1.isArray(rowDefinition['property'])) {
        return rowDefinition['property'].reduce(function (prev, next) {
          return prev && prev.hasOwnProperty(next) ? prev[next] : '';
        }, item);
      } else if (_$1.isFunction(rowDefinition['property'])) {
        return rowDefinition['property'](item);
      }

      return '';
    }
  }, {
    key: "renderCell",
    value: function renderCell(item, rowDefinition, key) {
      var cellValue = this.getCellValue(rowDefinition, item);

      if (rowDefinition.hasOwnProperty("render")) {
        cellValue = rowDefinition['render'](cellValue, item);
      } else if (_$1.isBoolean(cellValue)) {
        cellValue = cellValue ? "yes" : "no";
      }

      return React.createElement(CustomTableCell, {
        key: key
      }, cellValue);
    }
  }, {
    key: "renderRow",
    value: function renderRow(item, key) {
      var _this4 = this;

      var classes = this.props.classes;
      return React.createElement(TableRow, {
        className: classes.row,
        key: key
      }, this.tableDefinition.map(function (rowDefinition, index) {
        return _this4.renderCell(item, rowDefinition, index);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          reloading = _this$props.reloading,
          paginator = _this$props.paginator,
          filter = _this$props.filter;
      return React.createElement(Paper$1, {
        className: classes.root
      }, filter && React.createElement(TableFilterForm$1, {
        onSubmit: this.applyFilter,
        tableDefinition: this.props.tableDefinition,
        defaultSort: this.defaultSorts(),
        onResetCallback: this.onReset
      }), React.createElement(Table$1, {
        className: classes.table
      }, this.renderSectionHeader(), this.renderHeader(), this.renderBody()), reloading && React.createElement(LoadingBox, null), reloading && React.createElement(LinearProgress, null), paginator && React.createElement(Paginator, this.state.paginationInfo));
    }
  }]);

  return BasicTable;
}(React.Component);

BasicTable.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  tableDefinition: PropTypes.array,
  sectionLabel: PropTypes.string,
  reloading: PropTypes.bool,
  paginator: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  fetchCallback: PropTypes.func,
  filter: PropTypes.bool
};
BasicTable.defaultProps = {
  items: {},
  tableDefinition: [],
  reloading: false,
  paginator: false,
  filter: false
};
var Table = withStyles(styles$2)(BasicTable);

var MultiValueSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MultiValueSelect, _Component);

  function MultiValueSelect(props) {
    var _this;

    _classCallCheck(this, MultiValueSelect);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MultiValueSelect).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "generateTableDefinition", function () {
      var tableDefinition = _this.props.tableDefinition;
      return tableDefinition.map(function (property) {
        if (_.isObject(property)) {
          return property;
        }

        return {
          label: property,
          property: property
        };
      }).concat([{
        label: 'Actions',
        property: _this._tableActions
      }]);
    });

    _defineProperty(_assertThisInitialized(_this), "_tableActions", function (item) {
      return React.createElement(IconButton, {
        "aria-label": "Delete",
        onClick: function onClick() {
          return _this._handleRemove(item);
        }
      }, React.createElement(Delete, {
        style: {
          color: 'red'
        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "_handleRemove", function (removed_item) {
      var _this$props = _this.props,
          valueProperty = _this$props.valueProperty,
          name = _this$props.name;

      var value = _this.getFieldValue();

      value = value.filter(function (item) {
        return item.value !== removed_item[valueProperty];
      });

      _this.updateFieldValue(name, value);
    });

    _defineProperty(_assertThisInitialized(_this), "getOptions", function (exclusions) {
      var _this$props2 = _this.props,
          rawOptions = _this$props2.rawOptions,
          groupOptionsBy = _this$props2.groupOptionsBy;

      if (groupOptionsBy) {
        var filter_group = _this.getSelectedGroup();

        return _this.groupOptions(_this.filterOptions(rawOptions, exclusions, filter_group));
      }

      return _this.filterOptions(rawOptions, exclusions).map(function (option) {
        return _this.processOption(option);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getFieldValue", function () {
      var _this$props3 = _this.props,
          getCurrentValue = _this$props3.getCurrentValue,
          name = _this$props3.name;

      if (_this.refField.current) {
        var form = _this.refField.current.context._reduxForm.form;
        var selector = formValueSelector(form);
        var value = getCurrentValue(selector, name) || [];
        return value.slice(0);
      }

      return [];
    });

    _defineProperty(_assertThisInitialized(_this), "getSelectedGroup", function () {
      var _this$props4 = _this.props,
          getCurrentValue = _this$props4.getCurrentValue,
          name = _this$props4.name;

      if (_this.refField.current) {
        var form = _this.refField.current.context._reduxForm.form;
        var selector = formValueSelector(form);
        var value = getCurrentValue(selector, "".concat(name, "_items_groups"));
        return value ? value.value : null;
      }

      return null;
    });

    _this.refField = React.createRef();
    return _this;
  }
  /**
   * Table definition generator
   *
   * It will add "Actions" column automatically.
   *
   * @returns {*}
   */


  _createClass(MultiValueSelect, [{
    key: "filterOptions",

    /**
     * Filter options.
     *
     * It will remove all options that were already selected and also those that are not matching selected group.
     *
     * @param {array} options
     *   List of all options.
     * @param {array} exclusions
     *   List of options values that were already selected.
     * @param {false|string} group (optional)
     *   Group name. If provided, options will be filtered to contain only items in this group.
     *   Default is false.
     *
     * @returns {*}
     */
    value: function filterOptions(options, exclusions) {
      var group = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var _this$props5 = this.props,
          valueProperty = _this$props5.valueProperty,
          groupOptionsBy = _this$props5.groupOptionsBy;
      return options.filter(function (option) {
        return (!exclusions || exclusions && exclusions.indexOf(option[valueProperty]) < 0) && (group && option[groupOptionsBy] === group || !group);
      });
    }
    /**
     * Process an item into an option for select field.
     *
     * @param {Object} rawOption
     *   Option to process.
     *
     * @returns {{value: *, label: string}}
     */

  }, {
    key: "processOption",
    value: function processOption(rawOption) {
      var valueProperty = this.props.valueProperty;
      var labelProperties = _.isString(this.props.labelProperties) ? [this.props.labelProperties] : this.props.labelProperties;
      return {
        value: rawOption[valueProperty],
        label: labelProperties.map(function (property) {
          return rawOption.hasOwnProperty(property) ? rawOption[property] : '';
        }).join(' ')
      };
    }
    /**
     * Group options by values of property provided as "groupOptionsBy"
     *
     * @param {array} rawOptions
     *   Raw objects provided for field.
     *
     * @returns {{label: string, options: *}[]}
     */

  }, {
    key: "groupOptions",
    value: function groupOptions(rawOptions) {
      var _this2 = this;

      var groupOptionsBy = this.props.groupOptionsBy;
      var options = rawOptions.reduce(function (prev, option) {
        if (option.hasOwnProperty(groupOptionsBy) && !prev.hasOwnProperty(option[groupOptionsBy])) {
          prev[option[groupOptionsBy]] = [];
        }

        prev[option[groupOptionsBy]].push(_this2.processOption(option));
        return prev;
      }, {}); // Group options.

      return Object.keys(options).map(function (key) {
        return {
          label: key,
          options: options[key]
        };
      });
    }
    /**
     * Get options for main dropdown.
     *
     * @param {array} exclusions
     *   List of values to be excluded from the list.
     *
     * @returns {*}
     */

  }, {
    key: "getGroupsFieldOptions",

    /**
     * Get options for field that allows to filter options by group.
     *
     * @returns {any[]}
     */
    value: function getGroupsFieldOptions() {
      var _this$props6 = this.props,
          rawOptions = _this$props6.rawOptions,
          groupOptionsBy = _this$props6.groupOptionsBy;
      return Object.values(rawOptions.reduce(function (prev, rawOption) {
        if (rawOption.hasOwnProperty(groupOptionsBy) && !prev.hasOwnProperty(rawOption[groupOptionsBy])) {
          prev[rawOption[groupOptionsBy]] = {
            value: rawOption[groupOptionsBy],
            label: rawOption[groupOptionsBy]
          };
        }

        return prev;
      }, {}));
    }
    /**
     * Render filter variant.
     *
     * It will display an additional dropdown to filter options by a particular property.
     *
     * @param exclusions
     * @returns {*}
     */

  }, {
    key: "renderGroupedOptions",
    value: function renderGroupedOptions(exclusions) {
      var _this3 = this;

      var _this$props7 = this.props,
          label = _this$props7.label,
          name = _this$props7.name,
          groupOptionsBy = _this$props7.groupOptionsBy;
      return React.createElement(React.Fragment, null, React.createElement(Grid, {
        item: true,
        xs: 2
      }, React.createElement(Field, {
        name: "".concat(name, "_items_groups"),
        label: "".concat(groupOptionsBy),
        component: renderField,
        type: "chosenSelect",
        onChange: function onChange() {
          _this3.updateFieldValue("".concat(name, "_items"), null);

          _this3.forceUpdate();
        },
        options: this.getGroupsFieldOptions()
      })), React.createElement(Grid, {
        item: true,
        xs: 7
      }, React.createElement(Field, {
        ref: this.refField,
        name: "".concat(name, "_items"),
        label: label,
        component: renderField,
        type: "chosenSelect",
        options: this.getOptions(exclusions)
      })));
    }
    /**
     * Render simple variant.
     *
     * @param exclusions
     * @returns {*}
     */

  }, {
    key: "renderOptions",
    value: function renderOptions(exclusions) {
      var _this$props8 = this.props,
          name = _this$props8.name,
          label = _this$props8.label;
      return React.createElement(Grid, {
        item: true,
        xs: 9
      }, React.createElement(Field, {
        ref: this.refField,
        name: "".concat(name, "_items"),
        label: label,
        component: renderField,
        type: "chosenSelect",
        options: this.getOptions(exclusions)
      }));
    }
    /**
     * Get current value of field.
     *
     * @returns {*[]}
     *   Cloned value from state.
     */

  }, {
    key: "updateFieldValue",

    /**
     * Update field value in state.
     *
     * @param {string} field
     *   Field name
     * @param {*} value
     *   Field value.
     */
    value: function updateFieldValue(field, value) {
      var changeFieldValue = this.props.changeFieldValue;

      if (this.refField.current) {
        var form = this.refField.current.context._reduxForm.form;
        changeFieldValue(form, field, value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props9 = this.props,
          label = _this$props9.label,
          name = _this$props9.name,
          rawOptions = _this$props9.rawOptions,
          onChange = _this$props9.onChange,
          groupOptionsBy = _this$props9.groupOptionsBy,
          valueProperty = _this$props9.valueProperty;
      var value = this.getFieldValue();
      var selected_ids = value.map(function (item) {
        return item.value;
      });
      var items = rawOptions.filter(function (option) {
        return selected_ids.indexOf(option[valueProperty]) >= 0;
      });
      return React.createElement(React.Fragment, null, React.createElement(Table, {
        sectionLabel: label,
        items: items,
        tableDefinition: this.generateTableDefinition()
      }), React.createElement(Grid, {
        container: true,
        spacing: 1,
        direction: "row",
        alignItems: "flex-end",
        justify: "center"
      }, groupOptionsBy && this.renderGroupedOptions(selected_ids), !groupOptionsBy && this.renderOptions(selected_ids), React.createElement(Grid, {
        item: true,
        xs: 3
      }, React.createElement("div", {
        className: "actions"
      }, React.createElement(Button$1, {
        variant: "outlined",
        onClick: function onClick() {
          if (_this4.refField.current.value) {
            value.push(_this4.refField.current.value);
            onChange(value);

            _this4.updateFieldValue("".concat(name, "_items"), null);

            _this4.updateFieldValue("".concat(name, "_items_groups"), null);

            _this4.forceUpdate();
          }
        }
      }, React.createElement(AddCircle, {
        fontSize: "small"
      }), "Add ".concat(label))))));
    }
  }]);

  return MultiValueSelect;
}(Component);

MultiValueSelect.propTypes = {
  label: PropTypes.string.isRequired,
  tableDefinition: PropTypes.array.isRequired,
  labelProperties: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  changeFieldValue: PropTypes.func,
  getCurrentValue: PropTypes.func,
  rawOptions: PropTypes.array,
  groupOptionsBy: PropTypes.string,
  valueProperty: PropTypes.string
};
MultiValueSelect.defaultProps = {
  rawOptions: [],
  valueProperty: 'id'
};

var mapStateToProps$1 = function mapStateToProps(state, props) {
  var getFieldValue = function getFieldValue(selector, name) {
    return selector(state, name);
  };

  return {
    getCurrentValue: getFieldValue
  };
};

var mapDispatchToProps$1 = function mapDispatchToProps(dispatch, props) {
  return {
    changeFieldValue: function changeFieldValue(formName, field, value) {
      dispatch(change(formName, field, value));
    }
  };
};

var MultiValueSelect$1 = connect(mapStateToProps$1, mapDispatchToProps$1)(MultiValueSelect);

var useStyles$4 = makeStyles(function (theme) {
  return {
    formControl: {
      marginTop: theme.spacing(3),
      width: "100%"
    },
    errorMessage: {
      marginBottom: theme.spacing(1)
    }
  };
});

var RenderErrors = function RenderErrors(props) {
  var classes = useStyles$4();
  var error = props.error;

  if (_$1.isArray(error)) {
    return error.map(function (message, key) {
      return React.createElement(Typography, {
        className: classes.errorMessage,
        key: key,
        paragraph: true,
        color: "error"
      }, message);
    });
  } else {
    if (_$1.isString(error)) {
      return React.createElement(Typography, {
        className: classes.errorMessage,
        paragraph: true,
        color: "error"
      }, error);
    }
  }

  return null;
};

var simpleField = function simpleField(_ref) {
  var input = _ref.input,
      label = _ref.label,
      type = _ref.type,
      _ref$meta = _ref.meta,
      touched = _ref$meta.touched,
      error = _ref$meta.error;
  return React.createElement("div", null, React.createElement("label", {
    htmlFor: input.name
  }, label), React.createElement("div", null, React.createElement("input", _extends({}, input, {
    placeholder: label,
    type: type
  })), touched && error && React.createElement(RenderErrors, {
    error: error
  })));
};

var textField = function textField(_ref2) {
  var input = _ref2.input,
      label = _ref2.label,
      helperText = _ref2.helperText,
      type = _ref2.type,
      onChangeHandler = _ref2.onChangeHandler,
      disabled = _ref2.disabled,
      inputProps = _ref2.inputProps,
      _ref2$meta = _ref2.meta,
      touched = _ref2$meta.touched,
      error = _ref2$meta.error,
      required = _ref2.required;
  return React.createElement("div", null, React.createElement(TextField, _extends({}, input, {
    value: _typeof(input.value) === 'object' ? input.value.label : input.value,
    autoFocus: !!input.autofocus,
    margin: "dense",
    id: input.id,
    label: label + (required ? '*' : ''),
    type: type,
    fullWidth: true,
    onChange: function onChange(e) {
      if (onChangeHandler) {
        onChangeHandler(e);
      }

      return input.onBlur(e.target.value);
    },
    name: input.name,
    error: !!error && touched,
    helperText: helperText,
    disabled: disabled,
    InputProps: inputProps
  })), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var textAreaField = function textAreaField(_ref3) {
  var input = _ref3.input,
      label = _ref3.label,
      type = _ref3.type,
      _ref3$meta = _ref3.meta,
      touched = _ref3$meta.touched,
      error = _ref3$meta.error,
      required = _ref3.required;
  return React.createElement("div", null, React.createElement(TextField, {
    defaultValue: input.value,
    autoFocus: !!input.autofocus,
    margin: "dense",
    multiline: true,
    rows: 2,
    rowsMax: 20,
    id: input.id,
    label: label + (required ? '*' : ''),
    onChange: function onChange(e) {
      return input.onBlur(e.target.value);
    },
    fullWidth: true,
    name: input.name,
    error: !!error && touched
  }), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var selectField = function selectField(_ref4) {
  var input = _ref4.input,
      label = _ref4.label,
      type = _ref4.type,
      options = _ref4.options,
      _ref4$meta = _ref4.meta,
      touched = _ref4$meta.touched,
      error = _ref4$meta.error;
  return React.createElement("div", null, React.createElement("label", {
    htmlFor: input.name
  }, label), React.createElement("div", null, React.createElement("select", _extends({}, input, {
    placeholder: label
  }), React.createElement("option", {
    key: "_none",
    value: "",
    disabled: true,
    hidden: true
  }), Object.entries(options).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        value = _ref6[1];

    return React.createElement("option", {
      key: key,
      value: key
    }, value);
  })), touched && error && React.createElement(RenderErrors, {
    error: error
  })));
}; // We need to pass input property to FieldSelect, in order to access onBlur and
// onChange callbacks, otherwise redux form will not update the value of this
// react-select field.


var chosenSelectField = function chosenSelectField(_ref7) {
  var input = _ref7.input,
      label = _ref7.label,
      type = _ref7.type,
      loading = _ref7.loading,
      disabled = _ref7.disabled,
      defaultValue = _ref7.defaultValue,
      options = _ref7.options,
      _ref7$meta = _ref7.meta,
      touched = _ref7$meta.touched,
      error = _ref7$meta.error,
      onMount = _ref7.onMount,
      required = _ref7.required;
  var classes = useStyles$4();
  return React.createElement("div", {
    className: classes.formControl
  }, React.createElement(IntegrationReactSelect, {
    input: input,
    name: input.name,
    options: options,
    isMulti: false,
    multi: false,
    placeholder: label,
    label: label + (required ? '*' : ''),
    error: !!error && touched,
    onMount: onMount,
    loading: loading,
    disabled: disabled,
    value: input.value || defaultValue
  }), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var chosenMultiSelectField = function chosenMultiSelectField(_ref8) {
  var input = _ref8.input,
      label = _ref8.label,
      type = _ref8.type,
      loading = _ref8.loading,
      disabled = _ref8.disabled,
      defaultValue = _ref8.defaultValue,
      options = _ref8.options,
      _ref8$meta = _ref8.meta,
      touched = _ref8$meta.touched,
      error = _ref8$meta.error,
      onMount = _ref8.onMount,
      required = _ref8.required;
  var classes = useStyles$4();
  return React.createElement("div", {
    className: classes.formControl
  }, React.createElement("div", null, React.createElement(IntegrationReactSelect, {
    input: input,
    name: input.name,
    options: options,
    isMulti: true,
    multi: true,
    placeholder: label,
    label: label + (required ? '*' : ''),
    error: !!error && touched,
    onMount: onMount,
    loading: loading,
    disabled: disabled,
    value: input.value || defaultValue
  }), touched && error && React.createElement(RenderErrors, {
    error: error
  })));
};

var checkBoxField = function checkBoxField(_ref9) {
  var input = _ref9.input,
      checked = _ref9.checked,
      label = _ref9.label,
      type = _ref9.type,
      _ref9$meta = _ref9.meta,
      touched = _ref9$meta.touched,
      error = _ref9$meta.error;
  return React.createElement("div", null, React.createElement(FieldCheckbox, {
    label: label,
    name: input.name,
    checked: input.value || checked,
    onChange: input.onChange
  }), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var datePickerField = function datePickerField(props) {
  var input = props.input,
      startDate = props.startDate,
      label = props.label,
      dateFormat = props.dateFormat,
      inputProps = props.inputProps,
      _props$meta = props.meta,
      touched = _props$meta.touched,
      error = _props$meta.error;
  var classes = useStyles$4();
  return React.createElement("div", {
    className: classes.formControl
  }, React.createElement(DatePicker, _extends({}, props, {
    customInput: React.createElement(TextField, {
      margin: "dense",
      fullWidth: true,
      error: !!error && touched,
      label: label,
      InputProps: inputProps
    }),
    error: !!error && touched,
    selected: input.value ? input.value : startDate,
    onChange: function onChange(date) {
      return input.onChange(date);
    },
    dateFormat: dateFormat
  })), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var colorField = function colorField(_ref10) {
  var input = _ref10.input,
      label = _ref10.label,
      type = _ref10.type,
      _ref10$meta = _ref10.meta,
      touched = _ref10$meta.touched,
      error = _ref10$meta.error;
  return React.createElement("div", null, React.createElement(FieldColor$1, {
    input: input,
    name: input.name,
    label: label
  }), touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var fieldsGroupWrapper = function fieldsGroupWrapper(_ref11) {
  var children = _ref11.children,
      input = _ref11.input,
      label = _ref11.label,
      type = _ref11.type,
      _ref11$meta = _ref11.meta,
      touched = _ref11$meta.touched,
      error = _ref11$meta.error;
  return React.createElement("div", null, children, touched && error && React.createElement(RenderErrors, {
    error: error
  }));
};

var multiValueSelect = function multiValueSelect(_ref12) {
  var input = _ref12.input,
      label = _ref12.label,
      tableDefinition = _ref12.tableDefinition,
      labelProperties = _ref12.labelProperties,
      groupOptionsBy = _ref12.groupOptionsBy,
      rawOptions = _ref12.rawOptions,
      _ref12$meta = _ref12.meta,
      touched = _ref12$meta.touched,
      error = _ref12$meta.error;
  return React.createElement("div", null, React.createElement(MultiValueSelect$1, {
    name: input.name,
    onChange: input.onChange,
    label: label,
    tableDefinition: tableDefinition,
    labelProperties: labelProperties,
    rawOptions: rawOptions,
    groupOptionsBy: groupOptionsBy
  }));
};

var render = function render(props) {
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

    case 'multiValueSelect':
      console.log(props);
      return multiValueSelect(props);

    default:
      return simpleField(props);
  }
};

var renderField = function renderField(props) {
  return React.createElement("div", {
    className: "form-item"
  }, render(props));
};

export { FieldCheckbox, FieldColor$1 as FieldColor, IntegrationReactSelect as FieldSelect, LoadingBox, MultiValueSelect$1 as MultiValueSelect, RenderErrors, SubmitButton, Table, renderField };
//# sourceMappingURL=index.esm.js.map
