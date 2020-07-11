import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios';

import * as API from '../api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function useFetch(url, opts) {
    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
    (async () => {
      try{
        setLoading(true);
        const users = await axios.get(API.baseURL);
        setInventories(users.data);
        setLoading(false);
      }catch(error){
        setHasError(true);
        setLoading(false);
      }
    })();
    }, []);
    
    return [ inventories, loading, hasError ]
}

export const TeaShopCard = ({inventories, loading, hasError}) => {
 const deleteRecord =(id) => {
   (async () => {
      
       //await axios.delete(`${API.baseURL}/${id}`);
       
    })();
    
    console.log(res);
  }
  // {
  //   "id": "1",
  //   "createdAt": "2020-07-10T16:17:07.875Z",
  //   "price": 40,
  //   "description": "description 1",
  //   "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ssiskind/128.jpg",
  //   "isActive": true,
  //   "name": "Sadguru's Amrit-Tulya- Tea Shop 1",
  //   "imageUrl": "https://unsplash.it/50?image=1"
  // }
  let classes = useStyles();
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
                      Descriptiion: {card.description}
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


export default function Inventory() {
  const [inventories, loading, hasError] = useFetch();
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
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
                    Fetch Inventory Data
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
        {<TeaShopCard inventories={inventories} loading={loading} hasError={hasError} />}
      </main>
      {/* Footer */}
      {<Footer />}
      {/* End footer */}
    </React.Fragment>
  );
}
export const Footer = () => {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        
        {Copyright()}
      </footer>
     
  )
}
