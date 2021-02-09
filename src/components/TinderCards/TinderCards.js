import React, { useEffect, useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from 'axios';

function TinderCards() {
    const [restaurants, setRestaurants] = useState([]);
    const [loadingItems, setLoading] = useState(true);
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const getUserLocation = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
    }

    const LoadInitialRestaurants = () => {
        console.log(`lat: ${latitude} long: ${longitude}`);
        if (latitude && longitude) {
            axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/public/get-listings?lat=${latitude}&long=${longitude}`)
                .then(res => {
                    let { businesses } = res.data; // let business = res.data.businesses
                    setRestaurants(businesses);
                    setLoading(false);
                }).catch(e => { console.log(e) })
        }
        else {
            console.log('waiting on lat and long');
        }


    }

    useEffect(() => {
        LoadInitialRestaurants();
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
                                    className="card">
                                    <h3>{b.name}</h3>
                                </div>
                            </TinderCard>

                        )
                    })}
                </div>

            }
        </div>
    )
}


export default TinderCards
