import React from 'react';
import autobind from 'class-autobind';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import LoadingBox from "../LoadingBox";
import _ from 'lodash';
import SectionHeader from "./SectionHeader";


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    position: "relative",
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: "0px 10px",
  },
  body: {
    padding: "0px 10px",
  },
}))(TableCell);


class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this._initialize(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this._initialize(this.props);
  }

  _initialize(props) {
    this.items = _.isArray(props.items) ? props.items : Object.values(props.items);
    this.tableDefinition = this._generateTableDefinition(props);
  }

  _generateTableDefinition(props) {
    if (props.tableDefinition.length) {
      return props.tableDefinition;
    }
    else if (this.items.length) {

      return Object.keys(this.items[0]).map(key => ({
        label: key.charAt(0).toLocaleUpperCase() + key.slice(1),
        property: key
      }))
    }
    return [];
  }

  renderSectionHeader() {
    const {sectionLabel} = this.props;
    if (sectionLabel) {
      return <SectionHeader sectionLabel={sectionLabel} colSpan={this.tableDefinition.length}/>
    }
  }

  renderHeader() {
    let header = this.tableDefinition.map(item => ({label: item['label']}));
    if (header.length) {
      return (
        <TableHead>
          <TableRow>
            {header.map((item, index) => this.renderHeaderCell(item, index))}
          </TableRow>
        </TableHead>
      )
    }
    return null;
  }

  renderBody() {
    return (
      <TableBody>
        {this.items.map((item, index) => this.renderRow(item, index))}
      </TableBody>
    )

  }

  renderHeaderCell(itemDefinition, index) {
    return (
      <CustomTableCell key={index} {...itemDefinition}>{itemDefinition['label']}</CustomTableCell>
    )
  }

  getCellValue(rowDefinition, item) {

    if (!rowDefinition['property']) {
      return '';
    }
    if (typeof rowDefinition['property'] === 'string') {
      return item[rowDefinition['property']];
    }
    else if (_.isArray(rowDefinition['property'])) {
      return rowDefinition['property'].reduce( (prev, next) => {return prev && prev.hasOwnProperty(next) ? prev[next] : ''}, item);
    }
    else if (_.isFunction(rowDefinition['property'])) {
      return rowDefinition['property'](item);
    }
    return '';
  }

  renderCell(item, rowDefinition, key) {
    let cellValue = this.getCellValue(rowDefinition, item);
    if (rowDefinition.hasOwnProperty("render")){
      cellValue = rowDefinition['render'](cellValue, item)
    } else if (_.isBoolean(cellValue)){
      cellValue = cellValue ? "yes" : "no"
    }
    return (
      <CustomTableCell key={key}>{cellValue}</CustomTableCell>
    )
  }

  renderRow(item, key) {
    const {classes} = this.props;
    return (

      <TableRow className={classes.row} key={key}>
        {
          this.tableDefinition.map((rowDefinition, index) => this.renderCell(item, rowDefinition, index))
        }
      </TableRow>
    );
  }

  render() {
    const {classes, reloading} = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          {this.renderSectionHeader()}
          {this.renderHeader()}
          {this.renderBody()}
        </Table>
        {reloading && <LoadingBox/>}
      </Paper>
    )
  }
}

BasicTable.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  tableDefinition: PropTypes.array,
  sectionLabel: PropTypes.string,
  reloading: PropTypes.bool,
};

BasicTable.defaultProps = {
  items: {},
  tableDefinition: [],
  reloading: false,
};

export default withStyles(styles)(BasicTable);