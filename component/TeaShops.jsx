import React from 'react';
import Button from '@material-ui/core/Button';

import * as API from '../api';

function TeaShops() {
  return (
    <Button variant="contained" color="primary" onClick={()=> API.getCollections()}>
      Fetch Data
    </Button>
  );
}
export default TeaShops;

