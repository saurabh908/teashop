import React, {Fragment} from 'react';
import {Container, Box} from '@material-ui/core';

import * as utility from '../utility';

import Inventory from './Inventory';
import PostForm from './PostForm';
import AllPost from './AllPost';


const App = () => {
  return (
    <div  className="App">
      <Container>
      <div className="navbar">
       <h2 className="center ">Post It</h2>
       </div>
        <PostForm />
    <AllPost />
        <Inventory />
      </Container>
    </div>
  )
}

export default App;