import React from 'react';
import { FormControlLabel, Checkbox} from "@material-ui/core";
import autobind from 'class-autobind';

export default class FieldCheckbox extends React.Component {
  constructor(props){
    super(props);
    autobind(this);
    this.state = {
      checked: !!props.checked
    }
  }

  handleChange(e) {
    this.props.onChange(e);
    this.setState({
      checked: !this.state.checked
    })
  };

  render() {
    const { label, name } = this.props;
    return(
      <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            color="default"
            onChange={this.handleChange}
            value={name}
          />
        }
        label={label}
      />
    )
  }

}