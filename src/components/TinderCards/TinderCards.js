import React, { useEffect, useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from 'axios';
import RestaurantInfo from '../RestaurantInfo';


import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';


// const styles = (theme) => ({
//     root: {
//       margin: 0,
//       padding: theme.spacing(2),
//     },
//     closeButton: {
//       position: 'absolute',
//       right: theme.spacing(1),
//       top: theme.spacing(1),
//       color: theme.palette.grey[500],
//     },
//   });



function TinderCards() {
    const [restaurants, setRestaurants] = useState([]);
    const [loadingItems, setLoading] = useState(true);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [viewDetails, setViewDetails] = useState(false);

    // const classes = useStyles();
    // const [open, setOpen] = React.useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

            axios.get(`https://cors-anywhere.herokuapp.com/http://justpick-dev.us-east-1.elasticbeanstalk.com/api/v1/listings?lat=
            ${position.coords.latitude}&long=${position.coords.longitude}`)
                .then(res => {
                    let { businesses } = res.data; // let business = res.data.businesses
                    setRestaurants(businesses);
                    setLoading(false);
                }).catch(e => { console.log(e) })
        });
    }

    // const LoadInitialRestaurants = () => {

    //     // dev only add https://cors-anywhere.herokuapp.com/ at beginning
    //     axios.get(`http://justpick-dev.us-east-1.elasticbeanstalk.com/api/v1/listings?lat=
    //     ${position.coords.latitude}&long=${position.coords.longitude}`)
    //         .then(res => {
    //             let { businesses } = res.data; // let business = res.data.businesses
    //             setRestaurants(businesses);
    //             setLoading(false);
    //         }).catch(e => { console.log(e) })



    // }


    useEffect(() => {
        getUserLocation();
        // LoadInitialRestaurants();
    }, [])

    return (
        <div className="tinderCards">
            {loadingItems ? <CircularProgress color='secondary' className="tinderCards__spinner" /> :
                <div className="tinderCards__cardContainer">
                    {restaurants.map(b => {
                        return (
                            <TinderCard
                                className="swipe"
                                key={b.id}
                                preventSwipe={['up', 'down']}
                            >
                                <div
                                    style={{ backgroundImage: `url(${b.image_url})` }}
                                    className="card"
                                >
                                    <h3>{b.name}</h3>
                                </div>

                                {/* {viewDetails ? <RestaurantInfo /> : null} */}

                            </TinderCard>

                        )

                    }

                    )}


                </div>



            }


        </div>
    )
}


export default TinderCards