import { FETCH_RESTAURANTS } from './types';
import axios from 'axios';

export const fetchRestaurants = (loc) => async dispatch => {
    console.log('in fetchRestaurants reducer');
    try {
        const res = await axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/listings?loc=${loc}`)

        dispatch({
            type: FETCH_RESTAURANTS,
            payload: res.data
        })
    }
    catch (e) {
        console.log(e);
    }

};

