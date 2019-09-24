import React from 'react';
import { storiesOf } from '@storybook/react';

import SubmitButton from './SubmitButton';

storiesOf('SubmitButton', module)
  .add('default', () => {
    return (
      <SubmitButton
        is_submitting={0}
        type="submit"
        variant="contained">
        Submit
      </SubmitButton>
    )
  })
  .add('submitting', () => {
    return (
      <SubmitButton
        is_submitting={1}
        type="submit"
        variant="contained"
      >
        Submit
      </SubmitButton>
    )
  });