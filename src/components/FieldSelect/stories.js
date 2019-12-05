import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import FieldSelect from './FieldSelect';
import withReduxForm from "redux-form-storybook";
import {withTheme} from '../../../.storybook/decorators';
import { renderField } from "../../renderField";

const options = [];
let n = 0;
while (n < 100) {
  options.push({
    value: `value${n}`,
    label: `Value${n}`,
  });
  n++;
}

n = 0;
let groups = [];
let group = false;
while (n < 100) {
	if (n % 10 === 0) {
		if (group) {
			groups.push(group);
		}
		group = {
			'label': `Values ${n} = ${n + 9}`,
			'options': []
		};
	}
	if (group) {
		group.options.push({
			value: `value${n}`,
			label: `Value${n}`,
		});
		n++;
	}
}

storiesOf('FieldSelect', module)
  .addDecorator(withTheme)
  .addDecorator(withReduxForm)
  .add('basic', () => {
    return (
      <Field
        label="Basic Chosen Select"
        type="chosenSelect"
        component={renderField}
        options={options}
      />
    )
  })
  .add('multi basic', () => {
    return (
      <Field
        label="Multi Chosen Select"
        type="chosenMultiSelect"
        component={renderField}
        options={options}
      />
    )
  })
	.add('groups basic', () => {
		return (
			<Field
				label="Groups Basic"
				type="chosenSelect"
				component={renderField}
				options={groups}
			/>
		)
	})
  .add('disabled', () => {
    return (
      <Field
        label="Disabled Chosen Select"
        type="chosenSelect"
        disabled={true}
        component={renderField}
        options={options}
      />
    )
  })
  .add('error message', () => {
    return (
      <Field
        label="Error Chosen Select"
        type="chosenSelect"
        component={renderField}
        options={options}
        meta={{error: "Error message", touched: true}}
      />
    )
  })
	.add('multiple error messages', () => {
		return (
			<Field
				label="Error Chosen Select"
				type="chosenSelect"
				component={renderField}
				options={options}
				meta={{error: ["Error message", "Error message 2"], touched: true}}
			/>
		)
	})
  .add('required', () => {
    return (
      <Field
        label="Required"
        type="chosenSelect"
        component={renderField}
        options={options}
        required
      />
    )
  })
;