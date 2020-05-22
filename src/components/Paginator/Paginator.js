import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import PropTypes from 'prop-types';

class Paginator extends React.Component {

  constructor(props) {
    super(props);
  }

  handleChangePage = async (event, newPage) => {
    this.props.updatePaginationCallback({
      page: newPage,
    });
  };

  handleChangeRowsPerPage = async (event) => {
    this.props.updatePaginationCallback({
      page: 0,
      rowsPerPage: +event.target.value,
    });
  };

  render() {
    const {totalNumberOfEntities, rowsPerPage, page} = this.props;
    return (
      <React.Fragment>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={totalNumberOfEntities}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </React.Fragment>
    )
  }
}

Paginator.propTypes = {
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  rowsPerPageOptions: PropTypes.array,
  totalNumberOfEntities: PropTypes.number,
  updatePaginationCallback: PropTypes.func,
};

Paginator.defaultProps = {
  page: 0,
  rowsPerPage: 10,
  totalNumberOfEntities: 10,
  rowsPerPageOptions: [10, 20, 50],
  updatePaginationCallback: () => {},
};

export default Paginator;
