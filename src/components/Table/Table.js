import React from 'react';
import autobind from 'class-autobind';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { LinearProgress } from "@material-ui/core";
import LoadingBox from "../LoadingBox";
import _ from 'lodash';
import SectionHeader from "./SectionHeader";
import Paginator from "../Paginator";
import TableFilterForm from "../TableFilterForm";
import TableSortLabel from "@material-ui/core/TableSortLabel";


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
  sortOrderNumber: {

  }
});

const CustomTableHead = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.black
  }
}))(TableHead);

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

const CustomTableSortLabel = withStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    },
    '&$active': {
      color: theme.palette.common.white,
      '&& $icon': {
        color: theme.palette.common.white,
      }
    }
  },
  active: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    },
  },
  icon: {
    color: theme.palette.common.white,
    '&:hover': {
      color: theme.palette.common.white,
    }
  }
}))(TableSortLabel);


class BasicTable extends React.Component {
  constructor(props) {
    super(props);
    autobind(this);
    this._initialize(props);
    this.state = {
      filterOptions: {},
      paginationInfo: props.paginatorInfo,
      orderBy: [],
      order: {}
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContent) {
    this._initialize(nextProps);
    return true;
  }

  _initialize(props) {
    this.items = _.isArray(props.items) ? props.items : Object.values(props.items);
    this.totalNumberOfEntities = props.totalNumberOfEntities || this.items.length;
    if (props.preprocessItemsCallback) {
      this.items = props.preprocessItemsCallback(this.items);
    }
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
    if (this.tableDefinition) {
      return (
        <CustomTableHead>
          <TableRow>
            {this.tableDefinition.map((item, index) => this.renderHeaderCell(item, index))}
          </TableRow>
        </CustomTableHead>
      )
    }
    return null;
  }

  descendingComparator = (a, b, orderBy, level, sort, directionFactor) => {
    if (b[orderBy[level]] < a[orderBy[level]]) {
      return -1 * directionFactor;
    }
    if (b[orderBy[level]] > a[orderBy[level]]) {
      return 1 * directionFactor;
    }
    if (level + 1 === orderBy.length || !orderBy.length) {
      return 0;
    }
    level++;
    return sort.order[sort.orderBy[level]] === 'desc'
      ? this.descendingComparator(a, b, orderBy, level, sort, 1)
      : this.descendingComparator(a, b, orderBy, level, sort, -1);
  }

  getComparator(sort) {
    let orderByProperty = sort.orderBy.map(item => this.props.tableDefinition[item]['property']);
    return sort.order[sort.orderBy[0]] === 'desc'
      ? (a, b) => this.descendingComparator(a, b, orderByProperty, 0, sort, 1)
      : (a, b) => this.descendingComparator(a, b, orderByProperty, 0, sort, -1);
  }


  renderBody() {
    const { autoPaginateItems, autoSortItems, sort, filter, autoFilter } = this.props;
    const { page, rowsPerPage } = this.state.paginationInfo;
    const { filterOptions } = this.state;
    let items;
    if (filter && autoFilter) {
      let filterNames = Object.keys(filterOptions);
      let filterIndex, length;
      items = this.items.filter(item => {
        for (filterIndex = 0, length = filterNames.length; filterIndex < length; filterIndex++) {
          if (item[filterNames[filterIndex]].toString().indexOf(filterOptions[filterNames[filterIndex]]) < 0) {
            return false;
          }
        }
        return true;
      });
    }
    else{
      items = this.items;
    }
    if (sort && autoSortItems) {
      const sortOptions = {order: this.state.order, orderBy: this.state.orderBy};
      items = items.sort(this.getComparator(sortOptions))
    }

    return (
      <TableBody>
        {!autoPaginateItems ?
          items.map(this.renderRow) :
          items.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(this.renderRow)
        }
      </TableBody>
    )

  }

  handleSort(e, index) {
    let { order, orderBy } = this.state;
    const { multiSort } = this.props;
    // Shift no
    if (!e.shiftKey || !multiSort) {
      if (this._isOrderedBy(index)) {
        order = {[index]: (order[index] === 'asc' ? 'desc' : 'asc')};
      }
      else {
        order[index] = 'asc';
      }
      orderBy = [index];
    }
    else {
      // Shift yes, already in list
      if (this._isOrderedBy(index)) {
        if (order[index] === 'asc') {
          order[index] = 'desc';
        }
        else {
          delete(order[index]);
          orderBy.splice(orderBy.indexOf(index), 1)
        }
      }
      // Shift yes, not in list
      else {
        order[index] = 'asc';
        orderBy.push(index);
      }
    }
    this.setState({
      order: order,
      orderBy: orderBy
    }, this.invokeFetchCallback)
  }

  _isOrderedBy(index) {
    return this.state.orderBy.indexOf(index) > -1;
  }

  _sortOrder(index) {
    return this.state.orderBy.indexOf(index) + 1;
  }

  renderHeaderCell(itemDefinition, index) {
    const { order } = this.state;
    const { sort, multiSort } = this.props;
    const isSorted = this._isOrderedBy(index);
    const sortOrder = this._sortOrder(index);
    return (
      <CustomTableCell
        key={index}
        sortDirection={ isSorted ? order[index] : false}
      >
        {sort && itemDefinition.sort && <CustomTableSortLabel
          active={ isSorted }
          direction={ isSorted ? order[index] : 'asc'}
          onClick={(e) => this.handleSort(e, index)}
        >
          {itemDefinition['label']}
        </CustomTableSortLabel>}
        {sort && itemDefinition.sort && multiSort && sortOrder > 0 ? <span>{`${sortOrder}`}</span>: ''}
        {(!sort || !itemDefinition.sort) && itemDefinition['label']}

      </CustomTableCell>
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
    const { classes } = this.props;
    return (

      <TableRow className={classes.row} key={key}>
        {
          this.tableDefinition.map((rowDefinition, index) => this.renderCell(item, rowDefinition, index))
        }
      </TableRow>
    );
  }

  /**
   * Invoke fetch callback if provided.
   */
  invokeFetchCallback = () => {
    if (this.props.fetchCallback) {
      this.props.fetchCallback(this.state.filterOptions, this.state.paginationInfo, {order: this.state.order, orderBy: this.state.orderBy});
    }
  };

  updatePagination = (paginationInfo) => {
    this.setState({paginationInfo: {...this.state.paginationInfo, ...paginationInfo}}, this.invokeFetchCallback);
  };

  applyFilter = (filterOptions) => {
    this.setState({
      filterOptions: { ...filterOptions },
      paginationInfo: { ...this.state.paginationInfo, page: 0 },
    }, this.invokeFetchCallback);
  };

  defaultSorts = () => {
    return this.tableDefinition.filter((field) => field.hasOwnProperty('sort') && field.sort.hasOwnProperty('defaultSort')).map((field) => {
      return {
        fieldName: {value: field.name, label: field.label},
        direction: {value: field.sort.defaultSort, label: field.sort.defaultSort},
      };
    });
  };

  onReset = () => {
    this.setState({
      filterOptions: {},
      paginationInfo: {...this.state.paginationInfo, page: 0, rowsPerPage: this.props.paginatorInfo.rowsPerPage}
    }, this.invokeFetchCallback);
  };

  render() {
    const {classes, reloading, paginator, filter, tableFilterFormComponent, tableDefinition} = this.props;
    return (
      <Paper className={classes.root}>
        {
          filter && React.createElement(tableFilterFormComponent, {
            onSubmit: this.applyFilter,
            tableDefinition: tableDefinition,
            defaultSort: this.defaultSorts(),
            onResetCallback: this.onReset,
          })
        }
        <Table className={classes.table}>
          {this.renderSectionHeader()}
          {this.renderHeader()}
          {this.renderBody()}
        </Table>
        { reloading && <LoadingBox/> }
        { reloading && <LinearProgress/> }
        { paginator && <Paginator updatePaginationCallback={this.updatePagination} {...this.state.paginationInfo} totalNumberOfEntities={this.totalNumberOfEntities}/> }
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
  preprocessItemsCallback: PropTypes.func,
  sectionLabel: PropTypes.string,
  reloading: PropTypes.bool,
  paginator: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  paginatorInfo: PropTypes.object,
  autoPaginateItems: PropTypes.bool,
  fetchCallback: PropTypes.func,
  filter: PropTypes.bool,
  autoFilter: PropTypes.bool,
  totalNumberOfEntities: PropTypes.number,
  classes: PropTypes.object,
  tableFilterFormComponent: PropTypes.any,
  multiSort: PropTypes.bool,
  sort: PropTypes.bool,
  autoSortItems: PropTypes.bool,
};

BasicTable.defaultProps = {
  items: {},
  tableDefinition: [],
  reloading: false,
  paginator: false,
  paginatorInfo: {
    page: 0,
    rowsPerPage: 50,
    rowsPerPageOptions: [10, 20, 50],
  },
  autoPaginateItems: false,
  filter: false,
  autoFilter: false,
  tableFilterFormComponent: TableFilterForm,
  multiSort: false,
  sort: true,
  autoSortItems: false,
};

export default withStyles(styles)(BasicTable);
