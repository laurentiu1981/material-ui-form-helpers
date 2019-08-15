import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldCheckbox from "./FieldCheckbox";
import { Field } from "redux-form";
import { renderField } from "../../renderField";
import withReduxForm from "redux-form-storybook";


storiesOf('FieldCheckbox', module)
  .addDecorator(withReduxForm)
  .add('checked', () => {
    return (
      <Field
        component={renderField}
        type="checkbox"
        label="Checkbox"
        checked={true}
      />
    )
  })
  .add('unchecked', () => {
    return (
      <Field
        component={renderField}
        type="checkbox"
        label="Checkbox"
        checked={false}
      />
    )
  });