import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/styles/index";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  progress: {
    marginRight: "5px"
  }
});


const SubmitButton = (props) => {

  const classes = useStyles();

  const renderProgress = (submitting) => {
    if (submitting) {
      return (
        <CircularProgress size={20} className={classes.progress}/>
      )
    }
    else {
      return null;
    }
  };

  return (
    <Button {...props}>
      {
        renderProgress(props.is_submitting)
      }
      {props.children}
    </Button>
  )
};

SubmitButton.propTypes = {
  is_submitting: PropTypes.number
};

export default SubmitButton;