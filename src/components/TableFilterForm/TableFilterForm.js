import React from 'react';
import Chip from "@material-ui/core/Chip";
import {renderField} from "../../renderField";
import {Field, reduxForm, change, propTypes, arrayRemove } from "redux-form";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import SubmitButton from "../SubmitButton";
import DehazeIcon from '@material-ui/icons/Dehaze';
import FormWrapper from "../FormWrapper";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import _ from 'lodash';
import has from 'lodash/has';

const styles = () => ({
  chipsContainer: {
    marginTop: "0.5em",
    padding: "0.25em 0.5em",
  },
  actionsContainer: {
    marginTop: "0.5em",
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
  const {xs, sm, md, lg, name, label, type } = props;
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
            key={label}
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
      submittedData: {},
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

  hasAdvancedFilters = () => {
    return !!this.props.tableDefinition
      .filter((field) => {
        return has(field, ['filter', 'type']) &&
          !has(field, ['filter', 'basicFilter'])
      }).length
  }

  renderChips = (submittedData) => {
    const {classes} = this.props;
    let filters = Object.keys(submittedData);
    if (filters.length) {
      return (
        <Paper className={classes.chipsContainer}>
          {filters.map((key) => {
            return (
              <Chip
                key={key}
                label={`${key}: ${_.isObject(submittedData[key]) ? Object.values(submittedData[key]) : submittedData[key]}`}
                onDelete={this.handleChipDeleteForFilter(key)}
                color="primary"
              />
            )
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
    const {submitting, classes} = this.props;
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

            {this.hasAdvancedFilters() &&
              <Grid container spacing={1} justify="flex-end">
                <Grid item>
                  <Button onClick={this.onClickExpandHandler}><DehazeIcon />{this.state.isAdvanced ? "Hide Advanced Filters" : "Show Advanced Filters"}</Button>
                </Grid>
              </Grid>
            }
          </Grid>

          {this.renderChips(this.state.submittedData)}

          <div className={classes.actionsContainer}>
            <SubmitButton type="submit" variant="contained" color="primary" is_submitting={isSubmitting}
                          disabled={!!submitting}>
              Filter
            </SubmitButton>
            <Button onClick={this.onCancel}>
              Cancel
            </Button>
          </div>
        </form>
      </FilterFormWrapper>
    )
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
};

const TableFilterFormRedux = reduxForm({
  form: 'TableFilterForm'
})(TableFilterForm);

export default withStyles(styles)(connect(null, mapDispatchToProps)(TableFilterFormRedux));
