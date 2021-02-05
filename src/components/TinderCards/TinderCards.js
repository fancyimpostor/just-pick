import React, { useEffect, useState, useCallback } from 'react';
import TinderCard from 'react-tinder-card';
import axios from 'axios';
import './TinderCards.css';
import { useSelector } from 'react-redux';

function TinderCards() {
    var restaurantList = [];
    const [restaurants, setRestaurants] = useState([]);

    const loadRestaurants = useCallback(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/public/get-listings-from-yelp?location="Fort Worth"`)
            .then(res => {
                setRestaurants(res.data);
            }).catch(e => { console.log(e) })
    })
    //restaurantList = useSelector(state => state.restaurants.restaurants.businesses)

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log('Latitude is: ', position.coords.latitude);
            console.log('Longitude is: ', position.coords.longitude);
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

        })

        axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/public/get-listings-from-yelp?location="Dallas"`)
            .then(res => {
                let { businesses } = res.data;
                setRestaurants(businesses);
                console.log("TEST")
            }).catch(e => { console.log(e) })

        //loadRestaurants();
    }, [])

    return (
        <div className="tinderCards">
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
        </div>
    )
}


export default TinderCards
