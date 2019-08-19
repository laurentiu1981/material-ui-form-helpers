import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {CircularProgress} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    opacity: 0.3,
    backgroundColor: '#CCCCCC',
    width: "100%",
    height: "100%",
  }
});

const LoadingBox = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.overlay}/>
        <CircularProgress />
      </div>
    </React.Fragment>
  )
};

export default LoadingBox;