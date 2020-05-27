import React from 'react';
import { storiesOf } from '@storybook/react';

import SubmitButton from './SubmitButton';

storiesOf('SubmitButton', module)
  .add('default', () => {
    return (
      <SubmitButton
        isSubmitting={false}
        type="submit"
        variant="contained">
        Submit
      </SubmitButton>
    )
  })
  .add('submitting', () => {
    return (
      <SubmitButton
        isSubmitting={true}
        type="submit"
        variant="contained"
      >
        Submit
      </SubmitButton>
    )
  });