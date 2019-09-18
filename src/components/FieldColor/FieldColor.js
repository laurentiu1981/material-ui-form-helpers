import React from 'react';
import { withStyles } from "@material-ui/core";
import autobind from 'class-autobind';
import { SketchPicker } from "react-color";
import { TextField } from "@material-ui/core";

const styles = theme => ({
  title: {
    width: '500px',
    backgroundColor: '#edeeef',
  },
  colorField: {
    display: 'flex',
    flexDirection: 'row',
  },
  colorDiv: {
    marginTop: "15px",
    marginBottom: "4px",
    width: '38px',
    height: '38px',
    marginLeft: '10px',
    border: '1px solid #edeeef',
    display: "flex-inline"
  },
  colorPicker: {
    position: 'absolute',
    left: '155px',
    top: '25px',
    zIndex: 1
  },
  colorWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  notes: {
    width: '100%'
  }
});

class FieldColor extends React.Component {
  constructor(props){
    super(props);
    autobind(this);
    this.state = {
      openColorPicker: false,
    }
  }

  toggleColorPicker() {
    this.setState({openColorPicker: !this.state.openColorPicker})
  }

  handleColorChangeComplete = (color) => {
    this.props.input.onBlur(color.hex);
    this.toggleColorPicker();
  };

  handleInputChange = (e) => {
    this.props.input.onBlur(e.target.value);
  };

  render() {
    const {classes, input, label, placeholder} = this.props;
    const {openColorPicker} = this.state;
    return(
      <div className={classes.colorField}>
          <TextField
            margin="dense"
            name={input.name}
            id={input.id}
            value={input.value}
            label={ label }
            type="text"
            placeholder={ placeholder}
            onChange={this.handleInputChange}
            // InputProps={{ style: { color: input.value } }}
          />
          <div
            className={classes.colorDiv}
            style={{backgroundColor: input.value }}
            onClick={this.toggleColorPicker}
          ></div>
          {openColorPicker && <SketchPicker
            className={classes.colorPicker}
            color={input.value}
            onChangeComplete={this.handleColorChangeComplete}
          />}
      </div>
    );
  }
}

export default withStyles(styles)(FieldColor);

