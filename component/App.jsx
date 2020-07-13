import React, {Fragment} from 'react';
import {Container, Box} from '@material-ui/core';

import * as utility from '../utility';

import Inventory from './Inventory';
import AddItem from './AddItem';
import TeaShops from './TeaShops';

const App = () => {
  return (
    <div>
      <Container>
        <AddItem />
        <TeaShops />
        <Inventory />
      </Container>
    </div>
  )
}

export default App;