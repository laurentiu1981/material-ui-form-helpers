import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingBox from './LoadingBox';

storiesOf('LoadingBox', module)
  .add('basic', () => {
    return(
      <LoadingBox />
    )
  });