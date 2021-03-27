import React, { useEffect, useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TinderCard from 'react-tinder-card';
import Modal from '@material-ui/core/Modal';
import './TinderCards.css';
import axios from 'axios';
import RestaurantInfo from '../RestaurantInfo';


function TinderCards() {
    const [restaurants, setRestaurants] = useState([]);
    const [loadingItems, setLoading] = useState(true);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [viewDetails, setViewDetails] = useState(false);

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);

            axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/listings?lat=
            ${position.coords.latitude}&long=${position.coords.longitude}`)
                .then(res => {
                    let { businesses } = res.data; // let business = res.data.businesses
                    setRestaurants(businesses);
                    setLoading(false);
                }).catch(e => { console.log(e) })
        });
    }

    const LoadInitialRestaurants = () => {

        // dev only add https://cors-anywhere.herokuapp.com/ at beginning
        axios.get(`peaceful-wave-51123.herokuapp.com/api/v1/public/get-listings?lat=${latitude}&long=${longitude}`)
            .then(res => {
                let { businesses } = res.data; // let business = res.data.businesses
                setRestaurants(businesses);
                setLoading(false);
            }).catch(e => { console.log(e) })



    }


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

                                {viewDetails ? <RestaurantInfo /> : null}
                            </TinderCard>



                        )
                    })}
                </div>

            }


        </div>
    )
}


export default TinderCards