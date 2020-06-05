import { storiesOf } from '@storybook/react';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import FormWrapper from './FormWrapper';
import FormTitle from "../FormTitle";


const TestForm = () => <div>This is a form wrapper!</div>;

  const CustomFormTitle = withStyles({
  root: {
    backgroundColor: "red",
    textAlign: "center",
    padding: "1em 0",
  },
})(FormTitle);


storiesOf('FormWrapper', module)
  .add('FormWrapper', () => (
    <FormWrapper xs={12} md={6} formComponent={TestForm}/>
  ))
  .add('FormWrapper with title', () => (
    <FormWrapper formComponent={TestForm} title="test"/>
  ))
  .add('FormWrapper with custom title', () => (
    <FormWrapper formComponent={TestForm} title="test" titleComponent={CustomFormTitle}/>
  ))
;
