import React from 'react';
import { Field } from 'redux-form';
import { storiesOf } from '@storybook/react';
import MultiValueSelect from './MultiValueSelect';
import withReduxForm from "redux-form-storybook";
import {withTheme} from '../../../.storybook/decorators';
import { renderField } from "../../renderField";

const rawOptions = [
	{
		id: 1,
		name: 'Ada',
		gender: 'F',
	},
	{
		id: 2,
		name: 'Ingrid',
		gender: 'F',
	},
	{
		id: 3,
		name: 'Ivan',
		gender: 'M',
	},
	{
		id: 4,
		name: 'Carlos',
		gender: 'M',
	},
	{
		id: 5,
		name: 'Trump',
		gender: 'M',
	},
];

const tableDefinition = [
	{
		label: "Id",
		property: "id",
	},
	{
		label: "Name",
		property: "name",
	},
	{
		label: "Gender",
		property: "gender",
	},
];

storiesOf('MultiValueSelect', module)
	.addDecorator(withTheme)
	.addDecorator(withReduxForm)
	.add('basic', () => {
		return (
			<Field
				name="humans"
				label="Humans"
				type="multiValueSelect"
				component={renderField}
				tableDefinition={tableDefinition}
				rawOptions={rawOptions}
				labelProperties={['name', 'gender']}
			/>
		)
	})
	.add('grouped', () => {
		return (
			<Field
				name="humans"
				label="Humans"
				type="multiValueSelect"
				component={renderField}
				tableDefinition={tableDefinition}
				groupOptionsBy="gender"
				rawOptions={rawOptions}
				labelProperties={['name', 'gender']}
			/>
		)
	})
;