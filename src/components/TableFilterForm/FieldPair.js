import React from "react";
import {Field} from "redux-form";
import { makeStyles } from "@material-ui/styles";
import ClearIcon from '@material-ui/icons/Clear';
import {renderField} from "../../renderField";

const useStyle = makeStyles({
  container: {
    margin: '5px',
    display: 'flex',
    position: 'relative',
    paddingTop: '30px'
  },
  field: {
    margin: '5px'
  }
});


export const FieldPair = ({field, defaultValue, options, removeCallback, index}) => {
  const classes = useStyle();
  return (
    <div className={`${index}-sort-pair`}>
        <div>
          <Field
            name={`${field}.fieldName`}
            type="chosenSelect"
            component={renderField}
            options={options}
            label="Sort"
            className={classes.field}
          />
          <Field
            name={`${field}.direction`}
            type="chosenSelect"
            component={renderField}
            options={[{label: "ASC", key: "ASC"},{label: "DESC", key: "DESC"} ]}
            label="Direction"
            className={classes.field}
          />
          <ClearIcon className={`${index}-sort-pair-clear-icon`} onClick={removeCallback} />
        </div>
    </div>
  )
};