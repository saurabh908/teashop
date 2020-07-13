import React, {Fragment} from 'react';
import {AppBar,Button, Card, IconButton,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Typography, Container,Link} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';

import * as useStyles from '../../utility/useStyles';

const CustomAppBar = () => {
  let classes = useStyles;
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
           <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap style={{ flex: 1 }}>
            Sadguru's Amrit Tulya Tea Shop
          </Typography>
          <Button color="inherit">Add Item</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default CustomAppBar;