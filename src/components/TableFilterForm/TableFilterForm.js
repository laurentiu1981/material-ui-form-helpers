import React from 'react';
import Chip from "@material-ui/core/Chip";
import {renderField} from "../../renderField";
import {Field, FieldArray, reduxForm, change, propTypes, arrayRemove } from "redux-form";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import SubmitButton from "../SubmitButton";
import {FieldPair} from "./FieldPair";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Typography from "@material-ui/core/Typography/Typography";
import FormWrapper from "../FormWrapper";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash';

const styles = () => ({
  addCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const FilterFormWrapper = withStyles(theme => ({
  root: {
    width: '100%',
    marginTop: 0,
    position: "relative",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  formRoot: {
    padding: "1em"
  },
}))(FormWrapper);

const FilterFormField = (props) => {
  const {xs, sm, md, lg, name, label, type, key} = props;
  switch (type) {
    case 'min-max':
      return (
        <React.Fragment>
          <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Field
              type="text"
              component={renderField}
              name={`${name}_min`}
              key={`${label}_min`}
              label={`${label} Min`}
            >
              {`${label} Min`}
            </Field>
          </Grid>
          <Grid item xs={xs} sm={sm} md={md} lg={lg}>
            <Field
              type="text"
              component={renderField}
              name={`${name}_max`}
              key={`${label}_max`}
              label={`${label} Max`}
            >
              {`${label} Max`}
            </Field>
          </Grid>
        </React.Fragment>
      );
    default:
      return (
        <Grid item xs={xs} sm={sm} md={md} lg={lg}>
          <Field
            type="text"
            component={renderField}
            name={name}
            key={key}
            label={label}
          >
            {label}
          </Field>
        </Grid>
      )
  }
};

FilterFormField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  key: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

FilterFormField.defaultProps = {
  xs: 12,
  sm: 6,
  md: 3,
  lg: 2,
}

class TableFilterForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isAdvanced: false,
      submittedData: {"sortPairs": props.defaultSort},
    };
  }

  renderField = field => (
    <FilterFormField
      name={field.name}
      key={field.label}
      label={field.label}
      type={field.filter.type}
      {...(field.filter.size ? field.filter.size : {})}
    >
      {field.label}
    </FilterFormField>
  );

  renderFilters = () => {
    return this.props.tableDefinition
      .filter((field) => {
        return field.hasOwnProperty("filter") &&
          field.filter.hasOwnProperty("type") &&
          (field.filter.hasOwnProperty("basicFilter") || this.state.isAdvanced)
      })
      .map(this.renderField);
  }

  renderSortRules = () => {
    if (this.state.isAdvanced) {
      const sortFields = this.props.tableDefinition
        .filter((field) => {
          return field.hasOwnProperty("sort")
        });
      return (
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="h6">Sort</Typography>
          </Grid>
          <FieldArray name="sortPairs" availableFields={sortFields} component={this.renderPairs}/>
        </Grid>
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
        <Grid key={"add-new-sort-pair"} className={"add-new-sort-pair"} item xs={12} sm={6} md={3} lg={2}>
          <AddCircleIcon onClick={() => fields.push()}/>
        </Grid>
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
                    label={`${element.fieldName.label}: ${element.direction}`}
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
    if (this.state.submittedData.hasOwnProperty(keyChipToDelete)) {
      const submittedData = _.omit(this.state.submittedData, keyChipToDelete);
      this.props.changeFieldValue(keyChipToDelete, '');
      this.setState({ submittedData: submittedData },
        () => {
          this.props.onSubmit(this.state.submittedData);
        });
    }
  };

  onSubmit = async (formValues) => {
    await this.props.onSubmit(formValues);
    this.setState({submittedData: formValues});
  };

  onCancel = () => {
    this.props.destroy('TableFilterForm');
    this.setState({submittedData: {}});
    if (this.props.onResetCallback) {
      this.props.onResetCallback();
    }
  };

  render() {
    const {submitting} = this.props;
    const isSubmitting = submitting ? 1 : 0;
    return (
      <FilterFormWrapper xs={12} sm={12} md={12} lg={12}>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
          <Grid
            container
            spacing={1}
            direction="row"
            alignItems="flex-start"
            justify="center"
          >
            <Grid container spacing={1}>
              {this.renderFilters()}
            </Grid>
            {this.renderSortRules()}
          </Grid>
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
      </FilterFormWrapper>
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
  ...propTypes,
  onResetCallback: PropTypes.func,
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  tableDefinition: PropTypes.array,
  defaultSort: PropTypes.array,
};

const TableFilterFormRedux = reduxForm({
  form: 'TableFilterForm'
})(TableFilterForm);

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TableFilterFormRedux));
