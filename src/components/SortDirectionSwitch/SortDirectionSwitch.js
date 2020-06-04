import React from 'react';
import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import PropTypes from 'prop-types';
import { change } from "redux-form";
import { connect } from "react-redux";

class SortDirectionSwitch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      direction: props.value
    }
    this.props.onChange(props.value);
  }

  toggleDirection = () => {
    const newValue = this.state.direction === 'ASC' ? 'DESC' : 'ASC';

    this.props.onChange(newValue);
    this.setState({
      direction: newValue
    })
  }

  render() {
    const arrowComponent = this.state.direction === 'ASC' ? ArrowUpward : ArrowDownward;
    const label = this.state.direction === 'ASC' ? 'Ascending' : 'Descending';

    return (
      <IconButton aria-label={label} onClick={() => this.toggleDirection()}>
        { React.createElement(arrowComponent, {style: {color: 'red'}}) }
      </IconButton>
    )
  }
}

SortDirectionSwitch.propTypes = {
  value: PropTypes.string
}

SortDirectionSwitch.defaultProps = {
  value: 'ASC'
}

const mapStateToProps = (state, props) => {
  const getFieldValue = (selector, name) => {
    return selector(state, name);
  };
  return {
    getCurrentValue: getFieldValue
  }
};

export default connect(mapStateToProps)(SortDirectionSwitch);