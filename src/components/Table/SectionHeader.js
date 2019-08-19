import React from 'react';
import PropTypes from 'prop-types';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "16px",
    fontWeight: 600,
  },
});

const SectionHeader = (props) => {

  const classes = useStyles();

  return (
    <TableHead>
      <TableRow>
        <TableCell colSpan={props.colSpan} className={classes.root}>
          {props.sectionLabel}
        </TableCell>
      </TableRow>
    </TableHead>
  )
};

export default SectionHeader;

SectionHeader.defaultProps = {
  colspan: 2,
};

SectionHeader.propTypes = {
  sectionLabel: PropTypes.string.isRequired,
  colSpan: PropTypes.number,
};