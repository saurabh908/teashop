import React from 'react';
import Button from '@material-ui/core/Button';

import * as API from '../api';

function TeaShops() {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={()=> API.getCollections()}>
        Fetch Data
      </Button>
    </div>
  );
}
export default TeaShops;

