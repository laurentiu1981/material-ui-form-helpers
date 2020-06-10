(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@material-ui/core'), require('class-autobind'), require('react-color'), require('clsx'), require('react-select'), require('@material-ui/core/styles'), require('@material-ui/core/MenuItem'), require('@material-ui/icons'), require('prop-types'), require('@material-ui/core/InputAdornment'), require('@material-ui/core/SvgIcon'), require('lodash/isBoolean'), require('@material-ui/core/CircularProgress'), require('@material-ui/core/Button'), require('@material-ui/core/Table'), require('@material-ui/core/TableBody'), require('@material-ui/core/TableCell'), require('@material-ui/core/TableHead'), require('@material-ui/core/TableRow'), require('@material-ui/core/Paper'), require('@material-ui/styles'), require('lodash'), require('@material-ui/core/TablePagination'), require('@material-ui/core/Chip'), require('redux-form'), require('@material-ui/core/Grid'), require('@material-ui/icons/Dehaze'), require('@material-ui/core/Typography/Typography'), require('@material-ui/core/Divider'), require('react-redux'), require('lodash/has'), require('@material-ui/core/TableSortLabel'), require('react-datepicker'), require('react-datepicker/dist/react-datepicker.css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', '@material-ui/core', 'class-autobind', 'react-color', 'clsx', 'react-select', '@material-ui/core/styles', '@material-ui/core/MenuItem', '@material-ui/icons', 'prop-types', '@material-ui/core/InputAdornment', '@material-ui/core/SvgIcon', 'lodash/isBoolean', '@material-ui/core/CircularProgress', '@material-ui/core/Button', '@material-ui/core/Table', '@material-ui/core/TableBody', '@material-ui/core/TableCell', '@material-ui/core/TableHead', '@material-ui/core/TableRow', '@material-ui/core/Paper', '@material-ui/styles', 'lodash', '@material-ui/core/TablePagination', '@material-ui/core/Chip', 'redux-form', '@material-ui/core/Grid', '@material-ui/icons/Dehaze', '@material-ui/core/Typography/Typography', '@material-ui/core/Divider', 'react-redux', 'lodash/has', '@material-ui/core/TableSortLabel', 'react-datepicker', 'react-datepicker/dist/react-datepicker.css'], factory) :
  (global = global || self, factory(global['material-ui-form-helpers'] = {}, global.React, global.core, global.autobind, global.reactColor, global.clsx, global.Select, global.styles$3, global.MenuItem, global.icons, global.PropTypes, global.InputAdornment, global.AccountCircle, global.isBoolean, global.CircularProgress, global.Button, global.Table$1, global.TableBody, global.TableCell, global.TableHead, global.TableRow, global.Paper, global.styles$4, global._, global.TablePagination, global.Chip, global.reduxForm, global.Grid, global.DehazeIcon, global.Typography, global.Divider, global.reactRedux, global.has, global.TableSortLabel, global.DatePicker));
}(this, (function (exports, React, core, autobind, reactColor, clsx, Select, styles$3, MenuItem, icons, PropTypes, InputAdornment, AccountCircle, isBoolean, CircularProgress, Button, Table$1, TableBody, TableCell, TableHead, TableRow, Paper, styles$4, _, TablePagination, Chip, reduxForm, Grid, DehazeIcon, Typography, Divider, reactRedux, has, TableSortLabel, DatePicker) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  autobind = autobind && autobind.hasOwnProperty('default') ? autobind['default'] : autobind;
  clsx = clsx && clsx.hasOwnProperty('default') ? clsx['default'] : clsx;
  Select = Select && Select.hasOwnProperty('default') ? Select['default'] : Select;
  MenuItem = MenuItem && MenuItem.hasOwnProperty('default') ? MenuItem['default'] : MenuItem;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  InputAdornment = InputAdornment && InputAdornment.hasOwnProperty('default') ? InputAdornment['default'] : InputAdornment;
  AccountCircle = AccountCircle && AccountCircle.hasOwnProperty('default') ? AccountCircle['default'] : AccountCircle;
  isBoolean = isBoolean && isBoolean.hasOwnProperty('default') ? isBoolean['default'] : isBoolean;
  CircularProgress = CircularProgress && CircularProgress.hasOwnProperty('default') ? CircularProgress['default'] : CircularProgress;
  Button = Button && Button.hasOwnProperty('default') ? Button['default'] : Button;
  Table$1 = Table$1 && Table$1.hasOwnProperty('default') ? Table$1['default'] : Table$1;
  TableBody = TableBody && TableBody.hasOwnProperty('default') ? TableBody['default'] : TableBody;
  TableCell = TableCell && TableCell.hasOwnProperty('default') ? TableCell['default'] : TableCell;
  TableHead = TableHead && TableHead.hasOwnProperty('default') ? TableHead['default'] : TableHead;
  TableRow = TableRow && TableRow.hasOwnProperty('default') ? TableRow['default'] : TableRow;
  Paper = Paper && Paper.hasOwnProperty('default') ? Paper['default'] : Paper;
  _ = _ && _.hasOwnProperty('default') ? _['default'] : _;
  TablePagination = TablePagination && TablePagination.hasOwnProperty('default') ? TablePagination['default'] : TablePagination;
  Chip = Chip && Chip.hasOwnProperty('default') ? Chip['default'] : Chip;
  Grid = Grid && Grid.hasOwnProperty('default') ? Grid['default'] : Grid;
  DehazeIcon = DehazeIcon && DehazeIcon.hasOwnProperty('default') ? DehazeIcon['default'] : DehazeIcon;
  Typography = Typography && Typography.hasOwnProperty('default') ? Typography['default'] : Typography;
  Divider = Divider && Divider.hasOwnProperty('default') ? Divider['default'] : Divider;
  has = has && has.hasOwnProperty('default') ? has['default'] : has;
  TableSortLabel = TableSortLabel && TableSortLabel.hasOwnProperty('default') ? TableSortLabel['default'] : TableSortLabel;
  DatePicker = DatePicker && DatePicker.hasOwnProperty('default') ? DatePicker['default'] : DatePicker;

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
        return React__default.createElement(core.FormControlLabel, {
          control: React__default.createElement(core.Checkbox, {
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
  }(React__default.Component);

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
        return React__default.createElement("div", {
          className: classes.colorField
        }, React__default.createElement(core.TextField, {
          margin: "dense",
          name: input.name,
          id: input.id,
          value: input.value,
          label: label,
          type: "text",
          placeholder: placeholder,
          onChange: this.handleInputChange // InputProps={{ style: { color: input.value } }}

        }), React__default.createElement("div", {
          className: classes.colorDiv,
          style: {
            backgroundColor: input.value
          },
          onClick: this.toggleColorPicker
        }), openColorPicker && React__default.createElement(reactColor.SketchPicker, {
          className: classes.colorPicker,
          color: input.value,
          onChangeComplete: this.handleColorChangeComplete
        }));
      }
    }]);

    return FieldColor;
  }(React__default.Component);

  var FieldColor$1 = core.withStyles(styles)(FieldColor);

  var useStyles = core.makeStyles(function (theme) {
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
        backgroundColor: styles$3.emphasize(theme.palette.type === "light" ? theme.palette.grey[300] : theme.palette.grey[700], 0.08)
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
    return React__default.createElement(core.Typography, _extends({
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

    return React__default.createElement("div", _extends({
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
    return React__default.createElement(core.TextField, _extends({
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
    return React__default.createElement(MenuItem, _extends({
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
    return React__default.createElement(core.Typography, _extends({
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
    return React__default.createElement(core.Typography, _extends({
      className: props.selectProps.classes.singleValue
    }, props.innerProps), props.children);
  }

  SingleValue.propTypes = {
    children: PropTypes.node,
    innerProps: PropTypes.object,
    selectProps: PropTypes.object.isRequired
  };

  function ValueContainer(props) {
    return React__default.createElement("div", {
      className: props.selectProps.classes.valueContainer
    }, props.children);
  }

  ValueContainer.propTypes = {
    children: PropTypes.node,
    selectProps: PropTypes.object.isRequired
  };

  function MultiValue(props) {
    return React__default.createElement(core.Chip, {
      tabIndex: -1,
      label: props.children,
      className: clsx(props.selectProps.classes.chip, _defineProperty({}, props.selectProps.classes.chipFocused, props.isFocused)),
      onDelete: props.removeProps.onClick,
      deleteIcon: React__default.createElement(icons.Cancel, props.removeProps)
    });
  }

  MultiValue.propTypes = {
    children: PropTypes.node,
    isFocused: PropTypes.bool,
    removeProps: PropTypes.object.isRequired,
    selectProps: PropTypes.object.isRequired
  };

  function Menu(props) {
    return React__default.createElement(core.Paper, _extends({
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
    var theme = styles$3.useTheme();

    var _React$useState = React__default.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        single = _React$useState2[0],
        setSingle = _React$useState2[1];

    var _React$useState3 = React__default.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        multi = _React$useState4[0],
        setMulti = _React$useState4[1];

    var _React$useState5 = React__default.useState(null),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        loading = _React$useState6[0],
        setLoading = _React$useState6[1];

    React.useEffect(function () {
      if (props.onMount) {
        setLoading(true);
        props.onMount().then(function () {
          setLoading(false);
        });
      }
    }, []);
    React.useEffect(function () {
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
    return React__default.createElement(Select, _extends({}, props, {
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
        startAdornment: React__default.createElement(InputAdornment, {
          position: "start"
        }, React__default.createElement(AccountCircle, null))
      },
      options: props.options || [],
      components: components,
      onChange: props.isMulti ? handleChangeMulti : handleChangeSingle,
      onBlur: function onBlur() {
        return props.input.onBlur(props.input.value);
      }
    }));
  }

  var useStyles$1 = styles$3.makeStyles(function (theme) {
    return {
      progress: {
        marginRight: theme.spacing()
      },
      buttonRoot: {
        marginRight: theme.spacing(2)
      }
    };
  });

  var SubmitButton = function SubmitButton(props) {
    var classes = useStyles$1();

    var renderProgress = function renderProgress(submitting, sizeCircularProgress, colorCircularProgress) {
      if (submitting) {
        return React__default.createElement(CircularProgress, {
          size: sizeCircularProgress,
          className: classes.progress,
          color: colorCircularProgress
        });
      } else {
        return null;
      }
    };

    var isSubmitting = props.isSubmitting,
        sizeCircularProgress = props.sizeCircularProgress,
        colorCircularProgress = props.colorCircularProgress,
        buttonProps = _objectWithoutProperties(props, ["isSubmitting", "sizeCircularProgress", "colorCircularProgress"]);

    return React__default.createElement(Button, _extends({
      type: "submit",
      className: classes.buttonRoot
    }, buttonProps), renderProgress(isSubmitting, sizeCircularProgress, colorCircularProgress), props.children);
  };

  SubmitButton.propTypes = {
    isSubmitting: PropTypes.bool,
    variant: PropTypes.string,
    color: PropTypes.string,
    sizeCircularProgress: PropTypes.number,
    colorCircularProgress: PropTypes.string
  };
  SubmitButton.defaultProps = {
    variant: 'outlined',
    color: 'primary',
    sizeCircularProgress: 20,
    colorCircularProgress: 'inherit'
  };

  var useStyles$2 = styles$4.makeStyles({
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
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      className: classes.root
    }, React__default.createElement("div", {
      className: classes.overlay
    }), React__default.createElement(core.CircularProgress, null)));
  };

  var useStyles$3 = styles$4.makeStyles({
    root: {
      fontSize: "16px",
      fontWeight: 600
    }
  });

  var SectionHeader = function SectionHeader(props) {
    var classes = useStyles$3();
    return React__default.createElement(TableHead, null, React__default.createElement(TableRow, null, React__default.createElement(TableCell, {
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
        return React__default.createElement(React__default.Fragment, null, React__default.createElement(TablePagination, {
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
  }(React__default.Component);

  Paginator.propTypes = {
    page: PropTypes.number,
    rowsPerPage: PropTypes.number,
    rowsPerPageOptions: PropTypes.array,
    totalNumberOfEntities: PropTypes.number,
    updatePaginationCallback: PropTypes.func
  };
  Paginator.defaultProps = {
    page: 0,
    rowsPerPage: 10,
    totalNumberOfEntities: 10,
    rowsPerPageOptions: [10, 20, 50],
    updatePaginationCallback: function updatePaginationCallback() {}
  };

  var useStyles$4 = styles$4.makeStyles({
    root: {
      backgroundColor: "whiteSmoke",
      textAlign: "center",
      padding: "1em 0"
    }
  });

  var FormTitle = function FormTitle(props) {
    var classes = useStyles$4(props);
    var title = props.title;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(Typography, {
      variant: "h5",
      component: "h2",
      className: classes.root
    }, title), React__default.createElement(Divider, null));
  };

  FormTitle.propTypes = {
    title: PropTypes.string.isRequired
  };

  var useStyles$5 = styles$4.makeStyles({
    root: {
      width: '100%',
      marginTop: "25px",
      position: "relative"
    },
    formRoot: {
      padding: "1em 1em 0 1em"
    }
  });

  var FormWrapper = function FormWrapper(props) {
    var classes = useStyles$5(props);
    var xs = props.xs,
        sm = props.sm,
        md = props.md,
        lg = props.lg,
        formComponent = props.formComponent,
        title = props.title,
        titleComponent = props.titleComponent;
    return React__default.createElement(Grid, {
      container: true,
      justify: "center"
    }, React__default.createElement(Grid, {
      item: true,
      xs: xs,
      sm: sm,
      md: md,
      lg: lg
    }, React__default.createElement(Paper, {
      className: classes.root
    }, title && React__default.createElement(titleComponent, {
      title: title
    }), React__default.createElement("div", {
      className: classes.formRoot
    }, formComponent && React__default.createElement(formComponent, _objectSpread2({}, props)), props.children))));
  };

  FormWrapper.propTypes = {
    title: PropTypes.string,
    formComponent: PropTypes.any,
    titleComponent: PropTypes.any,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  };
  FormWrapper.defaultProps = {
    titleComponent: FormTitle,
    xs: 12,
    sm: 10,
    md: 8,
    lg: 8
  };

  var styles$1 = function styles() {
    return {
      chipsContainer: {
        marginTop: "0.5em",
        padding: "0.25em 0.5em"
      },
      actionsContainer: {
        marginTop: "0.5em"
      }
    };
  };

  var FilterFormWrapper = styles$3.withStyles(function (theme) {
    return {
      root: {
        width: '100%',
        marginTop: 0,
        position: "relative",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      formRoot: {
        padding: "1em"
      }
    };
  })(FormWrapper);

  var FilterFormField = function FilterFormField(props) {
    var xs = props.xs,
        sm = props.sm,
        md = props.md,
        lg = props.lg,
        name = props.name,
        label = props.label,
        type = props.type;

    switch (type) {
      case 'min-max':
        return React__default.createElement(React__default.Fragment, null, React__default.createElement(Grid, {
          item: true,
          xs: xs,
          sm: sm,
          md: md,
          lg: lg
        }, React__default.createElement(reduxForm.Field, {
          type: "text",
          component: renderField,
          name: "".concat(name, "_min"),
          key: "".concat(label, "_min"),
          label: "".concat(label, " Min")
        }, "".concat(label, " Min"))), React__default.createElement(Grid, {
          item: true,
          xs: xs,
          sm: sm,
          md: md,
          lg: lg
        }, React__default.createElement(reduxForm.Field, {
          type: "text",
          component: renderField,
          name: "".concat(name, "_max"),
          key: "".concat(label, "_max"),
          label: "".concat(label, " Max")
        }, "".concat(label, " Max"))));

      default:
        return React__default.createElement(Grid, {
          item: true,
          xs: xs,
          sm: sm,
          md: md,
          lg: lg
        }, React__default.createElement(reduxForm.Field, {
          type: "text",
          component: renderField,
          name: name,
          key: label,
          label: label
        }, label));
    }
  };

  FilterFormField.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number
  };
  FilterFormField.defaultProps = {
    xs: 12,
    sm: 6,
    md: 3,
    lg: 2
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
        return React__default.createElement(FilterFormField, _extends({
          name: field.name,
          key: field.label,
          label: field.label,
          type: field.filter.type
        }, field.filter.size ? field.filter.size : {}), field.label);
      });

      _defineProperty(_assertThisInitialized(_this), "renderFilters", function () {
        return _this.props.tableDefinition.filter(function (field) {
          return field.hasOwnProperty("filter") && field.filter.hasOwnProperty("type") && (field.filter.hasOwnProperty("basicFilter") || _this.state.isAdvanced);
        }).map(_this.renderField);
      });

      _defineProperty(_assertThisInitialized(_this), "hasAdvancedFilters", function () {
        return !!_this.props.tableDefinition.filter(function (field) {
          return has(field, ['filter', 'type']) && !has(field, ['filter', 'basicFilter']);
        }).length;
      });

      _defineProperty(_assertThisInitialized(_this), "renderChips", function (submittedData) {
        var classes = _this.props.classes;
        var filters = Object.keys(submittedData);

        if (filters.length) {
          return React__default.createElement(Paper, {
            className: classes.chipsContainer
          }, filters.map(function (key) {
            return React__default.createElement(Chip, {
              key: key,
              label: "".concat(key, ": ").concat(_.isObject(submittedData[key]) ? Object.values(submittedData[key]) : submittedData[key]),
              onDelete: _this.handleChipDeleteForFilter(key),
              color: "primary"
            });
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

      _defineProperty(_assertThisInitialized(_this), "handleChipDeleteForFilter", function (keyChipToDelete) {
        return function () {
          if (_this.state.submittedData.hasOwnProperty(keyChipToDelete)) {
            var submittedData = _.omit(_this.state.submittedData, keyChipToDelete);

            _this.props.changeFieldValue(keyChipToDelete, '');

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
        var _ref = _asyncToGenerator(
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
          return _ref.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "onCancel", function () {
        _this.props.destroy('TableFilterForm');

        _this.setState({
          submittedData: {}
        });

        if (_this.props.onResetCallback) {
          _this.props.onResetCallback();
        }
      });

      _this.state = {
        isAdvanced: false,
        submittedData: {}
      };
      return _this;
    }

    _createClass(TableFilterForm, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            submitting = _this$props.submitting,
            classes = _this$props.classes;
        var isSubmitting = submitting ? 1 : 0;
        return React__default.createElement(FilterFormWrapper, {
          xs: 12,
          sm: 12,
          md: 12,
          lg: 12
        }, React__default.createElement("form", {
          onSubmit: this.props.handleSubmit(this.onSubmit),
          autoComplete: "off"
        }, React__default.createElement(Grid, {
          container: true,
          spacing: 1,
          direction: "row",
          alignItems: "flex-start",
          justify: "center"
        }, React__default.createElement(Grid, {
          container: true,
          spacing: 1
        }, this.renderFilters()), this.hasAdvancedFilters() && React__default.createElement(Grid, {
          container: true,
          spacing: 1,
          justify: "flex-end"
        }, React__default.createElement(Grid, {
          item: true
        }, React__default.createElement(Button, {
          onClick: this.onClickExpandHandler
        }, React__default.createElement(DehazeIcon, null), this.state.isAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters")))), this.renderChips(this.state.submittedData), React__default.createElement("div", {
          className: classes.actionsContainer
        }, React__default.createElement(SubmitButton, {
          type: "submit",
          variant: "contained",
          color: "primary",
          is_submitting: isSubmitting,
          disabled: !!submitting
        }, "Filter"), React__default.createElement(Button, {
          onClick: this.onCancel
        }, "Cancel"))));
      }
    }]);

    return TableFilterForm;
  }(React__default.Component);

  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
      changeFieldValue: function changeFieldValue(field, value) {
        dispatch(reduxForm.change('TableFilterForm', field, value));
      },
      arrayRemoveElement: function arrayRemoveElement(field, index) {
        dispatch(reduxForm.arrayRemove('TableFilterForm', field, index));
      }
    };
  };

  TableFilterForm.propTypes = _objectSpread2({}, reduxForm.propTypes, {
    onResetCallback: PropTypes.func,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
    tableDefinition: PropTypes.array
  });
  var TableFilterFormRedux = reduxForm.reduxForm({
    form: 'TableFilterForm'
  })(TableFilterForm);
  var TableFilterForm$1 = styles$3.withStyles(styles$1)(reactRedux.connect(null, mapDispatchToProps)(TableFilterFormRedux));

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
      },
      sortOrderNumber: {}
    };
  };

  var CustomTableHead = styles$3.withStyles(function (theme) {
    return {
      root: {
        backgroundColor: theme.palette.common.black
      }
    };
  })(TableHead);
  var CustomTableCell = styles$3.withStyles(function (theme) {
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
  var CustomTableSortLabel = styles$3.withStyles(function (theme) {
    return {
      root: {
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.common.white
        },
        '&$active': {
          color: theme.palette.common.white,
          '&& $icon': {
            color: theme.palette.common.white
          }
        }
      },
      active: {
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.common.white
        }
      },
      icon: {
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.common.white
        }
      }
    };
  })(TableSortLabel);

  var BasicTable =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(BasicTable, _React$Component);

    function BasicTable(props) {
      var _this;

      _classCallCheck(this, BasicTable);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(BasicTable).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "descendingComparator", function (a, b, orderBy, level, sort, directionFactor) {
        if (b[orderBy[level]] < a[orderBy[level]]) {
          return -1 * directionFactor;
        }

        if (b[orderBy[level]] > a[orderBy[level]]) {
          return 1 * directionFactor;
        }

        if (level + 1 === orderBy.length || !orderBy.length) {
          return 0;
        }

        level++;
        return sort.order[sort.orderBy[level]] === 'desc' ? _this.descendingComparator(a, b, orderBy, level, sort, 1) : _this.descendingComparator(a, b, orderBy, level, sort, -1);
      });

      _defineProperty(_assertThisInitialized(_this), "invokeFetchCallback", function () {
        if (_this.props.fetchCallback) {
          _this.props.fetchCallback(_this.state.filterOptions, _this.state.paginationInfo, {
            order: _this.state.order,
            orderBy: _this.state.orderBy
          });
        }
      });

      _defineProperty(_assertThisInitialized(_this), "updatePagination", function (paginationInfo) {
        _this.setState({
          paginationInfo: _objectSpread2({}, _this.state.paginationInfo, {}, paginationInfo)
        }, _this.invokeFetchCallback);
      });

      _defineProperty(_assertThisInitialized(_this), "applyFilter", function (filterOptions) {
        _this.setState({
          filterOptions: _objectSpread2({}, filterOptions),
          paginationInfo: _objectSpread2({}, _this.state.paginationInfo, {
            page: 0
          })
        }, _this.invokeFetchCallback);
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
        }, _this.invokeFetchCallback);
      });

      autobind(_assertThisInitialized(_this));

      _this._initialize(props);

      _this.state = {
        filterOptions: {},
        paginationInfo: props.paginatorInfo,
        orderBy: [],
        order: {}
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
        this.items = _.isArray(props.items) ? props.items : Object.values(props.items);
        this.totalNumberOfEntities = props.totalNumberOfEntities || this.items.length;

        if (props.preprocessItemsCallback) {
          this.items = props.preprocessItemsCallback(this.items);
        }

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
          return React__default.createElement(SectionHeader, {
            sectionLabel: sectionLabel,
            colSpan: this.tableDefinition.length
          });
        }
      }
    }, {
      key: "renderHeader",
      value: function renderHeader() {
        var _this2 = this;

        if (this.tableDefinition) {
          return React__default.createElement(CustomTableHead, null, React__default.createElement(TableRow, null, this.tableDefinition.map(function (item, index) {
            return _this2.renderHeaderCell(item, index);
          })));
        }

        return null;
      }
    }, {
      key: "getComparator",
      value: function getComparator(sort) {
        var _this3 = this;

        var orderByProperty = sort.orderBy.map(function (item) {
          return _this3.props.tableDefinition[item]['property'];
        });
        return sort.order[sort.orderBy[0]] === 'desc' ? function (a, b) {
          return _this3.descendingComparator(a, b, orderByProperty, 0, sort, 1);
        } : function (a, b) {
          return _this3.descendingComparator(a, b, orderByProperty, 0, sort, -1);
        };
      }
    }, {
      key: "renderBody",
      value: function renderBody() {
        var _this$props = this.props,
            autoPaginateItems = _this$props.autoPaginateItems,
            autoSortItems = _this$props.autoSortItems,
            sort = _this$props.sort,
            filter = _this$props.filter,
            autoFilter = _this$props.autoFilter;
        var _this$state$paginatio = this.state.paginationInfo,
            page = _this$state$paginatio.page,
            rowsPerPage = _this$state$paginatio.rowsPerPage;
        var filterOptions = this.state.filterOptions;
        var items;

        if (filter && autoFilter) {
          var filterNames = Object.keys(filterOptions);
          var filterIndex, length;
          items = this.items.filter(function (item) {
            for (filterIndex = 0, length = filterNames.length; filterIndex < length; filterIndex++) {
              if (item[filterNames[filterIndex]].toString().indexOf(filterOptions[filterNames[filterIndex]]) < 0) {
                return false;
              }
            }

            return true;
          });
        } else {
          items = this.items;
        }

        if (sort && autoSortItems) {
          var sortOptions = {
            order: this.state.order,
            orderBy: this.state.orderBy
          };
          items = items.sort(this.getComparator(sortOptions));
        }

        return React__default.createElement(TableBody, null, !autoPaginateItems ? items.map(this.renderRow) : items.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(this.renderRow));
      }
    }, {
      key: "handleSort",
      value: function handleSort(e, index) {
        var _this$state = this.state,
            order = _this$state.order,
            orderBy = _this$state.orderBy;
        var multiSort = this.props.multiSort; // Shift no

        if (!e.shiftKey || !multiSort) {
          if (this._isOrderedBy(index)) {
            order = _defineProperty({}, index, order[index] === 'asc' ? 'desc' : 'asc');
          } else {
            order[index] = 'asc';
          }

          orderBy = [index];
        } else {
          // Shift yes, already in list
          if (this._isOrderedBy(index)) {
            if (order[index] === 'asc') {
              order[index] = 'desc';
            } else {
              delete order[index];
              orderBy.splice(orderBy.indexOf(index), 1);
            }
          } // Shift yes, not in list
          else {
              order[index] = 'asc';
              orderBy.push(index);
            }
        }

        this.setState({
          order: order,
          orderBy: orderBy
        }, this.invokeFetchCallback);
      }
    }, {
      key: "_isOrderedBy",
      value: function _isOrderedBy(index) {
        return this.state.orderBy.indexOf(index) > -1;
      }
    }, {
      key: "_sortOrder",
      value: function _sortOrder(index) {
        return this.state.orderBy.indexOf(index) + 1;
      }
    }, {
      key: "renderHeaderCell",
      value: function renderHeaderCell(itemDefinition, index) {
        var _this4 = this;

        var order = this.state.order;
        var _this$props2 = this.props,
            sort = _this$props2.sort,
            multiSort = _this$props2.multiSort;

        var isSorted = this._isOrderedBy(index);

        var sortOrder = this._sortOrder(index);

        return React__default.createElement(CustomTableCell, {
          key: index,
          sortDirection: isSorted ? order[index] : false
        }, sort && itemDefinition.sort && React__default.createElement(CustomTableSortLabel, {
          active: isSorted,
          direction: isSorted ? order[index] : 'asc',
          onClick: function onClick(e) {
            return _this4.handleSort(e, index);
          }
        }, itemDefinition['label']), sort && itemDefinition.sort && multiSort && sortOrder > 0 ? React__default.createElement("span", null, "".concat(sortOrder)) : '', (!sort || !itemDefinition.sort) && itemDefinition['label']);
      }
    }, {
      key: "getCellValue",
      value: function getCellValue(rowDefinition, item) {
        if (!rowDefinition['property']) {
          return '';
        }

        if (typeof rowDefinition['property'] === 'string') {
          return item[rowDefinition['property']];
        } else if (_.isArray(rowDefinition['property'])) {
          return rowDefinition['property'].reduce(function (prev, next) {
            return prev && prev.hasOwnProperty(next) ? prev[next] : '';
          }, item);
        } else if (_.isFunction(rowDefinition['property'])) {
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
        } else if (_.isBoolean(cellValue)) {
          cellValue = cellValue ? "yes" : "no";
        }

        return React__default.createElement(CustomTableCell, {
          key: key
        }, cellValue);
      }
    }, {
      key: "renderRow",
      value: function renderRow(item, key) {
        var _this5 = this;

        var classes = this.props.classes;
        return React__default.createElement(TableRow, {
          className: classes.row,
          key: key
        }, this.tableDefinition.map(function (rowDefinition, index) {
          return _this5.renderCell(item, rowDefinition, index);
        }));
      }
      /**
       * Invoke fetch callback if provided.
       */

    }, {
      key: "render",
      value: function render() {
        var _this$props3 = this.props,
            classes = _this$props3.classes,
            reloading = _this$props3.reloading,
            paginator = _this$props3.paginator,
            filter = _this$props3.filter,
            tableFilterFormComponent = _this$props3.tableFilterFormComponent,
            tableDefinition = _this$props3.tableDefinition;
        return React__default.createElement(Paper, {
          className: classes.root
        }, filter && React__default.createElement(tableFilterFormComponent, {
          onSubmit: this.applyFilter,
          tableDefinition: tableDefinition,
          defaultSort: this.defaultSorts(),
          onResetCallback: this.onReset
        }), React__default.createElement(Table$1, {
          className: classes.table
        }, this.renderSectionHeader(), this.renderHeader(), this.renderBody()), reloading && React__default.createElement(LoadingBox, null), reloading && React__default.createElement(core.LinearProgress, null), paginator && React__default.createElement(Paginator, _extends({
          updatePaginationCallback: this.updatePagination
        }, this.state.paginationInfo, {
          totalNumberOfEntities: this.totalNumberOfEntities
        })));
      }
    }]);

    return BasicTable;
  }(React__default.Component);

  BasicTable.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    tableDefinition: PropTypes.array,
    preprocessItemsCallback: PropTypes.func,
    sectionLabel: PropTypes.string,
    reloading: PropTypes.bool,
    paginator: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    paginatorInfo: PropTypes.object,
    autoPaginateItems: PropTypes.bool,
    fetchCallback: PropTypes.func,
    filter: PropTypes.bool,
    autoFilter: PropTypes.bool,
    totalNumberOfEntities: PropTypes.number,
    classes: PropTypes.object,
    tableFilterFormComponent: PropTypes.any,
    multiSort: PropTypes.bool,
    sort: PropTypes.bool,
    autoSortItems: PropTypes.bool
  };
  BasicTable.defaultProps = {
    items: {},
    tableDefinition: [],
    reloading: false,
    paginator: false,
    paginatorInfo: {
      page: 0,
      rowsPerPage: 50,
      rowsPerPageOptions: [10, 20, 50]
    },
    autoPaginateItems: false,
    filter: false,
    autoFilter: false,
    tableFilterFormComponent: TableFilterForm$1,
    multiSort: false,
    sort: true,
    autoSortItems: false
  };
  var Table = styles$3.withStyles(styles$2)(BasicTable);

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
        return React__default.createElement(core.IconButton, {
          "aria-label": "Delete",
          onClick: function onClick() {
            return _this._handleRemove(item);
          }
        }, React__default.createElement(icons.Delete, {
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
          var selector = reduxForm.formValueSelector(form);
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
          var selector = reduxForm.formValueSelector(form);
          var value = getCurrentValue(selector, "".concat(name, "_items_groups"));
          return value ? value.value : null;
        }

        return null;
      });

      _this.refField = React__default.createRef();
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
        return React__default.createElement(React__default.Fragment, null, React__default.createElement(core.Grid, {
          item: true,
          xs: 2
        }, React__default.createElement(reduxForm.Field, {
          name: "".concat(name, "_items_groups"),
          label: "".concat(groupOptionsBy),
          component: renderField,
          type: "chosenSelect",
          onChange: function onChange() {
            _this3.updateFieldValue("".concat(name, "_items"), null);

            _this3.forceUpdate();
          },
          options: this.getGroupsFieldOptions()
        })), React__default.createElement(core.Grid, {
          item: true,
          xs: 7
        }, React__default.createElement(reduxForm.Field, {
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
        return React__default.createElement(core.Grid, {
          item: true,
          xs: 9
        }, React__default.createElement(reduxForm.Field, {
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
        return React__default.createElement(React__default.Fragment, null, React__default.createElement(Table, {
          sectionLabel: label,
          items: items,
          tableDefinition: this.generateTableDefinition()
        }), React__default.createElement(core.Grid, {
          container: true,
          spacing: 1,
          direction: "row",
          alignItems: "flex-end",
          justify: "center"
        }, groupOptionsBy && this.renderGroupedOptions(selected_ids), !groupOptionsBy && this.renderOptions(selected_ids), React__default.createElement(core.Grid, {
          item: true,
          xs: 3
        }, React__default.createElement("div", {
          className: "actions"
        }, React__default.createElement(core.Button, {
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
        }, React__default.createElement(icons.AddCircle, {
          fontSize: "small"
        }), "Add ".concat(label))))));
      }
    }]);

    return MultiValueSelect;
  }(React.Component);

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

  var mapStateToProps = function mapStateToProps(state, props) {
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
        dispatch(reduxForm.change(formName, field, value));
      }
    };
  };

  var MultiValueSelect$1 = reactRedux.connect(mapStateToProps, mapDispatchToProps$1)(MultiValueSelect);

  var SortDirectionSwitch =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(SortDirectionSwitch, _React$Component);

    function SortDirectionSwitch(props) {
      var _this;

      _classCallCheck(this, SortDirectionSwitch);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SortDirectionSwitch).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "toggleDirection", function () {
        var newValue = _this.state.direction === 'ASC' ? 'DESC' : 'ASC';

        _this.props.onChange(newValue);

        _this.setState({
          direction: newValue
        });
      });

      _this.state = {
        direction: props.value
      };

      _this.props.onChange(props.value);

      return _this;
    }

    _createClass(SortDirectionSwitch, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var arrowComponent = this.state.direction === 'ASC' ? icons.ArrowUpward : icons.ArrowDownward;
        var label = this.state.direction === 'ASC' ? 'Ascending' : 'Descending';
        return React__default.createElement(core.IconButton, {
          "aria-label": label,
          onClick: function onClick() {
            return _this2.toggleDirection();
          }
        }, React__default.createElement(arrowComponent, {
          style: {
            color: 'red'
          }
        }));
      }
    }]);

    return SortDirectionSwitch;
  }(React__default.Component);

  SortDirectionSwitch.propTypes = {
    value: PropTypes.string
  };
  SortDirectionSwitch.defaultProps = {
    value: 'ASC'
  };

  var mapStateToProps$1 = function mapStateToProps(state, props) {
    var getFieldValue = function getFieldValue(selector, name) {
      return selector(state, name);
    };

    return {
      getCurrentValue: getFieldValue
    };
  };

  var SortDirectionSwitch$1 = reactRedux.connect(mapStateToProps$1)(SortDirectionSwitch);

  var useStyles$6 = core.makeStyles(function (theme) {
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
    var classes = useStyles$6();
    var error = props.error;

    if (_.isArray(error)) {
      return error.map(function (message, key) {
        return React__default.createElement(core.Typography, {
          className: classes.errorMessage,
          key: key,
          paragraph: true,
          color: "error"
        }, message);
      });
    } else {
      if (_.isString(error)) {
        return React__default.createElement(core.Typography, {
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
    return React__default.createElement("div", null, React__default.createElement("label", {
      htmlFor: input.name
    }, label), React__default.createElement("div", null, React__default.createElement("input", _extends({}, input, {
      placeholder: label,
      type: type
    })), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement(core.TextField, _extends({}, input, {
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
    })), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement(core.TextField, {
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
    }), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement("label", {
      htmlFor: input.name
    }, label), React__default.createElement("div", null, React__default.createElement("select", _extends({}, input, {
      placeholder: label
    }), React__default.createElement("option", {
      key: "_none",
      value: "",
      disabled: true,
      hidden: true
    }), Object.entries(options).map(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];

      return React__default.createElement("option", {
        key: key,
        value: key
      }, value);
    })), touched && error && React__default.createElement(RenderErrors, {
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
    var classes = useStyles$6();
    return React__default.createElement("div", {
      className: classes.formControl
    }, React__default.createElement(IntegrationReactSelect, {
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
    }), touched && error && React__default.createElement(RenderErrors, {
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
    var classes = useStyles$6();
    return React__default.createElement("div", {
      className: classes.formControl
    }, React__default.createElement("div", null, React__default.createElement(IntegrationReactSelect, {
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
    }), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement(FieldCheckbox, {
      label: label,
      name: input.name,
      checked: input.value || checked,
      onChange: input.onChange
    }), touched && error && React__default.createElement(RenderErrors, {
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
    var classes = useStyles$6();
    return React__default.createElement("div", {
      className: classes.formControl
    }, React__default.createElement(DatePicker, _extends({}, props, {
      customInput: React__default.createElement(core.TextField, {
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
    })), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement(FieldColor$1, {
      input: input,
      name: input.name,
      label: label
    }), touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, children, touched && error && React__default.createElement(RenderErrors, {
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
    return React__default.createElement("div", null, React__default.createElement(MultiValueSelect$1, {
      name: input.name,
      onChange: input.onChange,
      label: label,
      tableDefinition: tableDefinition,
      labelProperties: labelProperties,
      rawOptions: rawOptions,
      groupOptionsBy: groupOptionsBy
    }));
  };

  var sortDirectionSwitch = function sortDirectionSwitch(_ref13) {
    var input = _ref13.input,
        label = _ref13.label,
        defaultValue = _ref13.defaultValue,
        _ref13$meta = _ref13.meta,
        touched = _ref13$meta.touched,
        error = _ref13$meta.error;
    return React__default.createElement("div", null, React__default.createElement(SortDirectionSwitch$1, {
      label: label,
      name: input.name,
      onChange: input.onChange,
      value: input.value || defaultValue
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
        return multiValueSelect(props);

      case 'sortDirectionSwitch':
        return sortDirectionSwitch(props);

      default:
        return simpleField(props);
    }
  };

  var renderField = function renderField(props) {
    return React__default.createElement("div", {
      className: "form-item"
    }, render(props));
  };

  exports.FieldCheckbox = FieldCheckbox;
  exports.FieldColor = FieldColor$1;
  exports.FieldSelect = IntegrationReactSelect;
  exports.FormTitle = FormTitle;
  exports.FormWrapper = FormWrapper;
  exports.LoadingBox = LoadingBox;
  exports.MultiValueSelect = MultiValueSelect$1;
  exports.RenderErrors = RenderErrors;
  exports.SortDirectionSwitch = SortDirectionSwitch$1;
  exports.SubmitButton = SubmitButton;
  exports.Table = Table;
  exports.renderField = renderField;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
