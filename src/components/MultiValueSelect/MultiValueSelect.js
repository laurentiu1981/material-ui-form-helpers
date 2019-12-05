import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {Grid, Button, IconButton} from "@material-ui/core";
import {AddCircle, Delete} from "@material-ui/icons";
import {Field, formValueSelector, change} from 'redux-form';
import Table from '../Table/Table';
import {renderField} from '../../renderField';
import {connect} from 'react-redux';

class MultiValueSelect extends Component {

  constructor(props) {
    super(props);
    this.refField = React.createRef();
  }

  /**
   * Table definition generator
   *
   * It will add "Actions" column automatically.
   *
   * @returns {*}
   */
  generateTableDefinition = () => {
    const {tableDefinition} = this.props;

    return tableDefinition.map(property => {
      if (_.isObject(property)) {
        return property;
      }
      return {
        label: property,
        property: property
      }
    }).concat([{
      label: 'Actions',
      property: this._tableActions,
    }])
  };

  /**
   * Helper table actions column.
   *
   * @param {Object} item
   *
   * @returns {*}
   * @private
   */
  _tableActions = (item) => {
    return (
      <IconButton aria-label="Delete" onClick={() => this._handleRemove(item)}>
        <Delete style={{color: 'red'}}/>
      </IconButton>
    )
  };

  /**
   * Remove item action handler.
   *
   * @param {Object} removed_item
   *
   * @private
   */
  _handleRemove = (removed_item) => {
    const {valueProperty, name} = this.props;
    let value = this.getFieldValue();
    value = value.filter((item) => item.value !== removed_item[valueProperty]);
    this.updateFieldValue(name, value);
  };

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
  filterOptions(options, exclusions, group = false) {
    const {valueProperty, groupOptionsBy} = this.props;
    return options.filter((option) => {
      return (!exclusions || exclusions && exclusions.indexOf(option[valueProperty]) < 0) && ((group && option[groupOptionsBy] === group) || !group)
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
  processOption(rawOption) {
    const {valueProperty} = this.props;
    let labelProperties = _.isString(this.props.labelProperties) ? [this.props.labelProperties] : this.props.labelProperties;
    return {
      value: rawOption[valueProperty],
      label: labelProperties.map(property => rawOption.hasOwnProperty(property) ? rawOption[property] : '').join(' '),
    }
  }

  /**
   * Group options by values of property provided as "groupOptionsBy"
   *
   * @param {array} rawOptions
   *   Raw objects provided for field.
   *
   * @returns {{label: string, options: *}[]}
   */
  groupOptions(rawOptions) {
    const {groupOptionsBy} = this.props;
    let options = rawOptions.reduce((prev, option) => {
      if (option.hasOwnProperty(groupOptionsBy) && !prev.hasOwnProperty(option[groupOptionsBy])) {
        prev[option[groupOptionsBy]] = [];
      }
      prev[option[groupOptionsBy]].push(this.processOption(option));
      return prev;
    }, {});

    // Group options.
    return Object.keys(options).map(key => {
        return { label: key, options: options[key] };
      },
    );
  }

  /**
   * Get options for main dropdown.
   *
   * @param {array} exclusions
   *   List of values to be excluded from the list.
   *
   * @returns {*}
   */
  getOptions = (exclusions) => {
    const {rawOptions, groupOptionsBy} = this.props;
    if (groupOptionsBy) {
      let filter_group = this.getSelectedGroup();
      return this.groupOptions(this.filterOptions(rawOptions, exclusions, filter_group));
    }
    return this.filterOptions(rawOptions, exclusions).map(option => this.processOption(option));
  };

  /**
   * Get options for field that allows to filter options by group.
   *
   * @returns {any[]}
   */
  getGroupsFieldOptions() {
    const {rawOptions, groupOptionsBy} = this.props;
    return Object.values(rawOptions.reduce((prev, rawOption) => {
      if (rawOption.hasOwnProperty(groupOptionsBy) && !prev.hasOwnProperty(rawOption[groupOptionsBy])) {
        prev[rawOption[groupOptionsBy]] = {
          value: rawOption[groupOptionsBy],
          label: rawOption[groupOptionsBy],
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
  renderGroupedOptions(exclusions) {
    const {label, name, groupOptionsBy} = this.props;
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Field
            name={`${name}_items_groups`}
            label={`${groupOptionsBy}`}
            component={renderField}
            type="chosenSelect"
            onChange={() => {
              this.updateFieldValue(`${name}_items`, null);
              this.forceUpdate();
            }}
            options={this.getGroupsFieldOptions()}
          />
        </Grid>
        <Grid item xs={7}>
          <Field
            ref={this.refField}
            name={`${name}_items`}
            label={label}
            component={renderField}
            type="chosenSelect"
            options={this.getOptions(exclusions)}
          />
        </Grid>
      </React.Fragment>
    )
  }

  /**
   * Render simple variant.
   *
   * @param exclusions
   * @returns {*}
   */
  renderOptions(exclusions) {
    const {name, label} = this.props;
    return (
      <Grid item xs={9}>
        <Field
          ref={this.refField}
          name={`${name}_items`}
          label={label}
          component={renderField}
          type="chosenSelect"
          options={this.getOptions(exclusions)}
        />
      </Grid>
    )
  }

  /**
   * Get current value of field.
   *
   * @returns {*[]}
   *   Cloned value from state.
   */
  getFieldValue = () => {
    const {getCurrentValue, name} = this.props;
    if (this.refField.current) {
      let form = this.refField.current.context._reduxForm.form;
      const selector = formValueSelector(form);
      let value = getCurrentValue(selector, name) || [];
      return value.slice(0);
    }
    return [];
  };

  /**
   * Get selected group.
   *
   * @returns {null|string}
   *   Name of selected group.
   */
  getSelectedGroup = () => {
    const {getCurrentValue, name} = this.props;
    if (this.refField.current) {
      let form = this.refField.current.context._reduxForm.form;
      const selector = formValueSelector(form);
      let value = getCurrentValue(selector, `${name}_items_groups`);
      return value ? value.value : null;
    }
    return null;
  };

  /**
   * Update field value in state.
   *
   * @param {string} field
   *   Field name
   * @param {*} value
   *   Field value.
   */
  updateFieldValue(field, value) {
    const {changeFieldValue} = this.props;
    if (this.refField.current) {
      let form = this.refField.current.context._reduxForm.form;
      changeFieldValue(form, field, value);
    }
  }

  render() {
    const {label, name, rawOptions, onChange, groupOptionsBy, valueProperty} = this.props;
    let value = this.getFieldValue();
    let selected_ids = value.map(item => item.value);
    let items = rawOptions.filter(option => selected_ids.indexOf(option[valueProperty]) >= 0);
    return (
      <React.Fragment>
        <Table
          sectionLabel={label}
          items={items}
          tableDefinition={this.generateTableDefinition()}
        />
        <Grid container spacing={1} direction="row" alignItems="flex-end" justify="center">
          {groupOptionsBy && this.renderGroupedOptions(selected_ids)}
          {!groupOptionsBy && this.renderOptions(selected_ids)}
          <Grid item xs={3}>
            <div className="actions">
              <Button
                variant="outlined"
                onClick={() => {
                  if (this.refField.current.value) {
                    value.push(this.refField.current.value);
                    onChange(value);
                    this.updateFieldValue(`${name}_items`, null);
                    this.updateFieldValue(`${name}_items_groups`, null);
                    this.forceUpdate();
                  }
                }}
              >
                <AddCircle fontSize="small"/>
                {`Add ${label}`}
              </Button>
            </div>
          </Grid>
        </Grid>

      </React.Fragment>
    );
  }
}

MultiValueSelect.propTypes = {
  label: PropTypes.string.isRequired,
  tableDefinition: PropTypes.array.isRequired,
  labelProperties: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  changeFieldValue: PropTypes.func,
  getCurrentValue: PropTypes.func,
  rawOptions: PropTypes.array,
  groupOptionsBy: PropTypes.string,
  valueProperty: PropTypes.string,
};

MultiValueSelect.defaultProps = {
  rawOptions: [],
  valueProperty: 'id',
};

const mapStateToProps = (state, props) => {
  const getFieldValue = (selector, name) => {
    return selector(state, name);
  };
  return {
    getCurrentValue: getFieldValue
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    changeFieldValue: function(formName, field, value) {
      dispatch(change(formName, field, value))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiValueSelect);