import React from 'react';
import { storiesOf } from '@storybook/react';
import { Field } from 'redux-form';
import { renderField } from '../../renderField';
import withReduxForm from 'redux-form-storybook';
import { withTheme } from '../../../.storybook/decorators';


storiesOf('FieldColor', module)
	.addDecorator(withTheme)
	.addDecorator(withReduxForm)
	.add('color field sample', () => {
		return (
			<Field
				name="color"
				component={renderField}
				type="color"
				label="Color"
			/>
		);
	});