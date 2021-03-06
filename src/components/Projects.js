import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import hireroadlogo from "../images/hireroadlogo.png"
import hotelLogo from "../images/logo.jpg"
import movielogo from "../images/movie.png"
import Chip from '@material-ui/core/Chip';
import CarouselDiag from "./carouselDiag"
import H1 from "../images/hireroad/h1.jpg"
import H2 from "../images/hireroad/h2.jpg"
import H3 from "../images/hireroad/h3.jpg"
import H4 from "../images/hireroad/h4.jpg"
import Ht1 from "../images/hotel/ht1.jpg"
import Ht2 from "../images/hotel/ht2.jpg"
import Ht3 from "../images/hotel/ht3.jpg"
import Ht4 from "../images/hotel/ht4.jpg"
import Ht5 from "../images/hotel/ht5.jpg"
import "../App.css"
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root: {
        width: "345px",
    },
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        '@media only screen and (max-width: 1100px)': {
            flexDirection: "column",
            alignItems: "center"

        },
        '& > *': {
            margin: "20px"
        },
     
        

    },
    cardContainer: {
        width: "30%",
        '@media only screen and (max-width: 1100px)': {
            width: "80%",
        },
        '@media only screen and (max-width: 400px)': {
            width: "100%",
        },
    }
});

export default function ImgMediaCard() {
    const classes = useStyles();
    const [openDiag, setOpenDiag] = useState(false)
    const [items, setItems] = useState([])
  
    const handleOpen = (type) => () => {
        
        if(type === "hireroad") {
           setItems([...items, 
            {
                imgPath:
                  H1,
              },
              {
                imgPath:
                  H2
              },
              {
                imgPath:
                  H3
              },
              {
                imgPath:
                  H4
              },
           ])
        }else if (type === "hotel"){
            setItems([...items, 
                {
                    imgPath:
                      Ht1,
                  },
                  {
                    imgPath:
                      Ht2
                  },
                  {
                    imgPath:
                      Ht3
                  },
                  {
                    imgPath:
                      Ht4
                  },
                  {
                    imgPath:
                      Ht5
                  },
               ])
        }

        console.log(items)
        setOpenDiag(true)
    }

    const handleClose = () =>{
        setOpenDiag(false)
        setItems([])
    }
    let height

    if(window.innerHeight < 900 && window.innerWidth < 450){
        height = 240
    }else{
        height = 440
    }
    

    return (
        <div className={classes.container}>
            <div className={classes.cardContainer}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height={height.toString()}
                            image={hireroadlogo}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                HireRoad
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This project was my senior design project. This is a full stack web and mobile application.
                                Users can post full time and part time job through the website and shoter term jobs from the app.
                                User can apply for the job from their device.

                        </Typography>
                            <div style = {{marginTop : "15px", display : "flex", flexWrap :"wrap"}}>
                                <Chip label="React" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="NodeJS" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="Express" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="MongoDB" variant="outlined" style = {{marginRight : "5px",  marginBottom : "5px"}} />
                                <Chip label="Stripe" variant="outlined" style = {{marginRight : "5px",  marginBottom : "5px"}} />
                                <Chip label="Heroku" variant="outlined"  style = {{marginRight : "5px",  marginBottom : "5px"}} />
                            </div>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link style = {{textDecoration : "none"}} href="https://www.hireroad.us">  <Button size="small" color="primary">
                            View project
                    </Button> </Link>
                    <Button size="small" color="primary" onClick = {handleOpen("hireroad")}>
                            View Images
                    </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.cardContainer}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height={height.toString()}
                            image={hotelLogo}
                            title="Contemplative Reptile"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                Hotel 436
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is a full-stack web app to simulate a real-life hotel website. In this website, the user can browse rooms,
                                book rooms, check reservations and cancel reservations. The admin site can be used by employees to handle guests.
                        </Typography>
                        <div style = {{marginTop : "15px", display : "flex", flexWrap :"wrap"}}>
                                <Chip label="React" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label=".Net Core" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="SQL Server" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="Azure" variant="outlined" style = {{marginRight : "5px",  marginBottom : "5px"}} />
                                <Chip label="AWS" variant="outlined" style = {{marginRight : "5px",  marginBottom : "5px"}} />
                                <Chip label="Auth0" variant="outlined"  style = {{marginRight : "5px",  marginBottom : "5px"}} />
                            </div>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link style = {{textDecoration : "none"}} href="https://github.com/mohammad0907/hotel435-frontend">  <Button size="small" color="primary">
                            View project
                    </Button> </Link>
                    <Button size="small" color="primary" onClick = {handleOpen("hotel")}>
                            View Images
                    </Button>
                    </CardActions>
                </Card>
            </div>

            <div className={classes.cardContainer}>
                <Card >
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height={height.toString()}
                            image={movielogo}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Movie App
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                This is a simple movie / tv show search application built for android.
                                With this app you can seach for movies or tv shows and the app will return with search results.
                                Click on result to see relevant information about the result.
                        </Typography>
                        <div style = {{marginTop : "15px", display : "flex", flexWrap :"wrap"}}>
                                <Chip label="Java" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="Android Studio" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="OMDB API" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                                <Chip label="Picasso" variant="outlined"  style = {{marginRight : "5px", marginBottom : "5px"}} />
                            </div>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link style = {{textDecoration : "none"}} href="https://github.com/tmsyed/MovieApp">  <Button size="small" color="primary">
                            View project
                    </Button> </Link>
                    </CardActions>
                </Card>
            </div>
            <div>
                <CarouselDiag open = {openDiag} close = {handleClose}  slides = {items} />
    
            </div>

        </div>
    );
}