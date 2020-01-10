import React from 'react';
import Provider from './Provider.js'
import store from './configureStore';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const withProvider = (story) => (
  <Provider store={store}>
    { story() }
  </Provider>
);

const withTheme = (story) => (
  <MuiThemeProvider theme={theme}>
    { story() }
  </MuiThemeProvider>
);

export {
  withProvider,
  withTheme,
};