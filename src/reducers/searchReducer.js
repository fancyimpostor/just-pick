import { FETCH_RESTAURANTS } from '../actions/types';

const initialState = {
    restaurants: [],
    restaurant: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_RESTAURANTS:
            console.log('fetch_restaurants reducer');
            return {
                ...state,
                restaurants: action.payload
            }

        default:
            return state;
    }
}