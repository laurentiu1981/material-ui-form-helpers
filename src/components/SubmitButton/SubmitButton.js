import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    progress: {
      marginRight: theme.spacing()
    },
    buttonRoot: {
      marginRight: theme.spacing(2)
    }
  })
);


const SubmitButton = (props) => {

  const classes = useStyles();

  const renderProgress = (submitting, sizeCircularProgress, colorCircularProgress) => {
    if (submitting) {
      return (
        <CircularProgress size={sizeCircularProgress} className={classes.progress} color={colorCircularProgress} />
      )
    }
    else {
      return null;
    }
  };

  const {isSubmitting, sizeCircularProgress, colorCircularProgress, ...buttonProps} = props;
  return (
    <Button {...buttonProps}>
      {
        renderProgress(isSubmitting, sizeCircularProgress, colorCircularProgress)
      }
      {props.children}
    </Button>
  )
};

SubmitButton.propTypes = {
  isSubmitting: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
  sizeCircularProgress: PropTypes.number,
  colorCircularProgress: PropTypes.string,
};

SubmitButton.defaultProps = {
  variant: 'outlined',
  color: 'primary',
  sizeCircularProgress: 20,
  colorCircularProgress: 'inherit'
}

export default SubmitButton;