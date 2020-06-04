import React from "react";
import {Field} from "redux-form";
import { makeStyles } from "@material-ui/styles";
import ClearIcon from '@material-ui/icons/Clear';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";

import {renderField} from "../../renderField";


const useStyle = makeStyles(theme => ({
  container: {
    margin: '5px',
    display: 'flex',
    position: 'relative',
    paddingTop: '30px'
  },
  field: {
    margin: '5px'
  },
  deleteIcon: {
    color: "#f50057",
  }
}));


export const FieldPair = ({ field, options, removeCallback, index }) => {
  const classes = useStyle();
  return (
    <Grid key={index} item xs={12} sm={6} md={3} lg={2}>
      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="flex-end"
        justify="center"
      >
        <Grid item xs={8}>
          <Field
            name={`${field}.fieldName`}
            type="chosenSelect"
            component={renderField}
            options={options}
            label="Sort"
            className={classes.field}
          />
        </Grid>
        <Grid item xs={2}>
          <Field
            name={`${field}.direction`}
            type="sortDirectionSwitch"
            component={renderField}
            label="Direction"
            className={classes.field}
          />
        </Grid>
        <Grid item xs={2}>
          <Delete className={classes.deleteIcon} onClick={removeCallback}/>
        </Grid>
      </Grid>
    </Grid>
  );
};

FieldPair.propTypes = {
  removeCallback: PropTypes.func,
  index: PropTypes.number,
  field: PropTypes.string,
  options: PropTypes.array
};
