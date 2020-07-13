import React, {Fragment} from 'react';
import {AppBar,Button, Card, IconButton,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Typography, Container,Link} from '@material-ui/core/';

import * as useStyles from '../../utility/useStyles';

const Copyright = () => {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://teashop.stackblitz.io">
          Sadguru's Amrit Tulya Tea Shop
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
}

const CustomFooter = () => {
  const classes = useStyles;
  return (
      <footer className={classes.footer}>
        {Copyright()}
      </footer>
     
  )
}

export default CustomFooter;
