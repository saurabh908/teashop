import React, {Fragment} from 'react';
import {AppBar,Button, Card, IconButton,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Typography, Container,Link} from '@material-ui/core/';
import {MenuIcon,CameraIcon} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

import * as API from '../api';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  menuButton:{
    padding: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

{/*Components Collection*/}
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

export const Footer = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        {Copyright()}
      </footer>
     
  )
}

export const CustomAppBar = () => {
  let classes = useStyles();
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Sadguru's Amrit Tulya Tea Shop
          </Typography>
          <Button color="inherit">Add New Item</Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export const TeaShopCard = ({cards}) => {
  let classes = useStyles();
  return (
    <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </React.Fragment>
  )
}

export const CollectionItems = () => {
  let classes = useStyles();
  return(
    <React.Fragment>
     {/* Custom App Bar*/}
     {CustomAppBar()}
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Sadguru's Amrit Tulya Tea Shop
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Inventory Collections
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Fetch Inventory
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Add New Item
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/*Tea Shop Card*/}
        {TeaShopCard({cards})}
      </main>
      {/* Start footer */}
      {Footer()}
      {/* End footer */}
    </React.Fragment>
  )
}