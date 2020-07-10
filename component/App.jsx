import React, {Fragment} from 'react';
import {Container, Box} from '@material-ui/core';

import * as utility from '../utility';

import Inventory from './Inventory';

const App = () => {
  return (
    <div>
      <Container>
        <Inventory />
      </Container>
    </div>
  )
}

export default App;