import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormTitle from "../FormTitle";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginTop: "25px",
    position: "relative"
  },
  formRoot: {
    padding: "1em 1em 0 1em"
  },
});

const FormWrapper = (props) => {
  const classes = useStyles(props);
  const {xs, sm, md, lg} = props;
  return (
    <Grid container justify="center">
      <Grid item xs={xs} sm={sm} md={md} lg={lg}>
        <Paper className={classes.root}>
          {props.title && React.createElement(props.titleComponent, {title: props.title}) }
          <div className={classes.formRoot}>
            {React.createElement(props.formComponent, {...props})}
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

FormWrapper.propTypes = {
  title: PropTypes.string,
  formComponent: PropTypes.any.isRequired,
  titleComponent: PropTypes.any,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
};

FormWrapper.defaultProps = {
  titleComponent: FormTitle,
  xs: 12,
  sm: 10,
  md: 8,
  lg: 8,
}

export default FormWrapper;