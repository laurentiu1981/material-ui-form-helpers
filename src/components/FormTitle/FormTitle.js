import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import {makeStyles} from "@material-ui/styles";
import Divider from "@material-ui/core/Divider";
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    backgroundColor: "whiteSmoke",
    textAlign: "center",
    padding: "1em 0",
  },
});

const FormTitle = (props) => {
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Typography variant="h5" component="h2" className={classes.root}>
        {props.title}
      </Typography>
      <Divider/>
    </React.Fragment>
  )
};

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default FormTitle;