import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './component/App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector('#root'),
);
