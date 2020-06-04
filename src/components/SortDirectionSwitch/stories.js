import React from 'react';
import { Field } from 'redux-form';
import { storiesOf} from "@storybook/react";
import SortDirectionSwitch from './SortDirectionSwitch';
import {withTheme} from "../../../.storybook/decorators";
import withReduxForm from "redux-form-storybook";
import { renderField } from "../../renderField";


storiesOf('SortDirectionSwitch', module)
  .addDecorator(withTheme)
  .addDecorator(withReduxForm)
  .add('basic', () => {
    return (
      <Field
        name="field_sort"
        label="Humans"
        type="sortDirectionSwitch"
        component={renderField}
      />
    );
  })
;