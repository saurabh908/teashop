import React, {Fragment} from 'react';
import {AppBar,Button, Card, IconButton,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Typography, Container,Link} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

import * as API from '../api';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
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
    marginRight: theme.spacing(2),
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
  title: {
    flexGrow: 1,
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

export const TeaShopCard = ({inventories, loading, hasError}) => {
  let classes = useStyles();
  let defaultImage = 'images/TeaShopImage.jpg';
  return (
    <React.Fragment>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {loading ? <div>Loading...</div> : (hasError ? <div>Error occured.</div> :inventories.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.imageUrl}
                    title={card.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      Description: {card.description}
                    </Typography>
                    <Typography>
                      Price: {card.price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                    <Button size="small" color="primary" onClick={(e)=>{
      e.stopPropagation();
      e.preventDefault();
      deleteRecord(card.id);}}>
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            )))}
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

export const HeroUnitComponent = () => {
  let classes = useStyles();
  return(
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Add New Item
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
  )
}