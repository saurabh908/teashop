import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Container from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import TeaShops from './component/TeaShops';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm">
          <TeaShops />
        </Container>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById('root'));
