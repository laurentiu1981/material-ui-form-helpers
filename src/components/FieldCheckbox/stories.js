import React from 'react';
import { storiesOf } from '@storybook/react';
import FieldCheckbox from "./FieldCheckbox";

storiesOf('FieldCheckbox', module)
  .add('checked', () => {
    return (
      <FieldCheckbox label="Checkbox" checked={true}/>
    )
  })
  .add('unchecked', () => {
    return (
      <FieldCheckbox label="Checkbox" checked={false}/>
    )
  });