import React from 'react';
import Chip from "@material-ui/core/Chip";
import {renderField} from "../../renderField";
import {Field, FieldArray, reduxForm, change, unregisterField, arrayRemove } from "redux-form";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import {withStyles} from "@material-ui/core";
import SubmitButton from "../SubmitButton";
import {FieldPair} from "./FieldPair";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from "@material-ui/core/Typography/Typography";
import FormWrapper from "../FormWrapper";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash';

const styles = (theme) => ({
  addCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const FilterFormField = (props) => {
  switch (props.type) {
    case 'min-max':
      return (
        <React.Fragment>
          <Field
            type="text"
            component={renderField}
            name={`${props.name}_min`}
            key={`${props.label}_min`}
            label={`${props.label} Min`}
          >
            {`${props.label} Min`}
          </Field>
          <Field
            type="text"
            component={renderField}
            name={`${props.name}_max`}
            key={`${props.label}_max`}
            label={`${props.label} Max`}
          >
            {`${props.label} Max`}
          </Field>
        </React.Fragment>
      );
    default:
      return (
        <Field
          type="text"
          component={renderField}
          name={props.name}
          key={props.key}
          label={props.label}
        >
          {props.label}
        </Field>
      )
  }
};

class TableFilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdvanced: false,
      submittedData: {"sortPairs": props.defaultSort},
    };
  };

  renderField = field => (
    <FilterFormField
      name={field.name}
      key={field.label}
      label={field.label}
      type={field.filter.type}
    >
      {field.label}
    </FilterFormField>
  );

  renderBasicFilters = () => {
    return this.props.tableDefinition
      .filter((field) => {
        return field.hasOwnProperty("filter") && field.filter.hasOwnProperty("type") && field.filter.hasOwnProperty("basicFilter")
      })
      .map(this.renderField);
  };

  renderAdvancedFilters = () => {
    if (this.state.isAdvanced) {
      const sortFields = this.props.tableDefinition
        .filter((field) => {
          return field.hasOwnProperty("sort") && field.filter.hasOwnProperty("type")
        });
      return (
        <div>
          {
            this.props.tableDefinition
              .filter((field) => {
                return field.hasOwnProperty("filter") && field.filter.hasOwnProperty("type") && !field.filter.hasOwnProperty("basicFilter")
              })
              .map(this.renderField)
          }
          <Typography variant="h6">Sort</Typography>
          <FieldArray name="sortPairs" availableFields={sortFields} component={this.renderPairs}/>
        </div>
      )
    }
    return null;
  };

  renderPairs = ({fields, availableFields}) => {
    const options = availableFields.map(field => ({
      value: field.name, label: field.label
    }));
    return (
      <React.Fragment>
        {
          fields.map((field, index) => (<FieldPair key={index} field={field} options={options} removeCallback={() => fields.remove(index)}/>))
        }
        <div className={"add-new-sort-pair"}>
          <AddCircleIcon onClick={() => fields.push()}/>
        </div>
      </React.Fragment>
    )
  };

  renderChips = (submittedData) => {
    if (!this.state.isAdvanced) {
      return (
        <Paper>
          {Object.keys(submittedData).map((key) => {
            if (key === "sortPairs") {
              return submittedData[key].map(element => {
                return (
                  <Chip
                    key={element.fieldName}
                    label={`${element.fieldName.label}: ${element.direction.label}`}
                    onDelete={this.handleChipDeleteForSort(element)}
                    color="secondary"
                  />
                )
              });
            }
            else {
              return (
                <Chip
                  key={key}
                  label={`${key}: ${_.isObject(submittedData[key]) ? Object.values(submittedData[key]) : submittedData[key]}`}
                  onDelete={this.handleChipDeleteForFilter(key)}
                  color="primary"
                />
              )
            }
          })}
        </Paper>
      )
    }
    return null;
  };

  onClickExpandHandler = (event) => {
    event.preventDefault();
    this.setState({
      isAdvanced: !this.state.isAdvanced
    })
  };

  handleChipDeleteForSort = (element) => () => {
    if(this.state.submittedData.hasOwnProperty("sortPairs")) {
      const keyOfElementInSortPairs = this.state.submittedData.sortPairs.indexOf(element);
      const submittedData = _.omit(this.state.submittedData, "sortPairs");
      submittedData["sortPairs"] = this.state.submittedData.sortPairs.filter((value) => {return value !== element });
      this.setState({submittedData: submittedData},
        () => { this.props.onSubmit(this.state.submittedData) });
      this.props.arrayRemoveElement('sortPairs', keyOfElementInSortPairs);
    }
  };

  handleChipDeleteForFilter = (keyChipToDelete) => () => {
    if(this.state.submittedData.hasOwnProperty(keyChipToDelete)) {
      const submittedData = _.omit(this.state.submittedData, keyChipToDelete);
      this.setState({submittedData: submittedData},
        () => { this.props.onSubmit(this.state.submittedData) });
    }
  };

  onSubmit = async (formValues) => {
    await this.props.onSubmit(formValues);
    this.setState({submittedData: formValues});
  };

  onCancel = () => {
    this.props.destroy('TableFilterForm');
    this.setState({submittedData: {}});
    this.props.onResetCallback();
  };

  render() {
    const {submitting, classes, fields, submittedData} = this.props;
    const isSubmitting = submitting ? 1 : 0;
    return (
      <FormWrapper>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
          {this.renderBasicFilters()}
          {this.renderAdvancedFilters()}
          <div>
            <Button onClick={this.onClickExpandHandler}>Advanced Filters</Button>
          </div>
          {this.renderChips(this.state.submittedData)}
          <SubmitButton type="submit" variant="contained" color="primary" is_submitting={isSubmitting}
                        disabled={!!submitting}>
            Filter
          </SubmitButton>
          <Button onClick={this.onCancel}>
            Cancel
          </Button>
        </form>
      </FormWrapper>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      sortPairs: ownProps.defaultSort
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeFieldValue: (field, value) => {
      dispatch(change('TableFilterForm', field, value))
    },
    arrayRemoveElement: (field, index) => {
      dispatch(arrayRemove('TableFilterForm', field, index))
    }
  }
};

TableFilterForm.propTypes = {
  onResetCallback: PropTypes.func
};

TableFilterForm = reduxForm({
  form: 'TableFilterForm'
})(TableFilterForm);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TableFilterForm));