import React from 'react';
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";

const useStyle = makeStyles({
  paper: {
    padding: '1em',
  }
});

const FormWrapper = (props) => {

  const classes = useStyle();

  return (
    <Paper className={classes.paper}>
      {props.children}
    </Paper>
  )
};

export default FormWrapper;