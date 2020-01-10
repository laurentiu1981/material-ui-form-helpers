import { configure, addDecorator } from '@storybook/react';
import { withProvider } from "./decorators";
import withReduxForm from 'redux-form-storybook';

const req = require.context('../src/components', true, /[^/]+\/stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

