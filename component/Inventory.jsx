import React,{useState,useEffect,Component, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Button, Card, IconButton,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Typography, Container,Link} from '@material-ui/core/';
import axios from 'axios';

import * as API from '../api';
import * as utility from '../utility';

import CustomAppBar from '../component/CustomAppBar';
import CustomFooter from '../component/CustomFooter';
import CustomCard from '../component/CustomCard';

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

function useFetch(url, opts) {
    const [inventories, setInventories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
    (async () => {
      try{
        setLoading(true);
        const users = await axios.get(API.baseURL);
        
        console.log(users.data);
        setInventories(users.data);
        setLoading(false);
      }catch(error){
        setHasError(true);
        setLoading(false);
        console.log(error);
      }
    })();
    }, []);
    
    return [ inventories, loading, hasError, alert ]
}

export const TeaShopCard = ({inventories, loading, hasError}) => {
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
    
      <CustomAppBar />
      
        {utility.TeaShopCard({inventories,loading,hasError})}
        
        {<CustomCard inventories={inventories} loading={loading} hasError={hasError} />}
     
      <CustomFooter />
     
    </React.Fragment>
  );
}

