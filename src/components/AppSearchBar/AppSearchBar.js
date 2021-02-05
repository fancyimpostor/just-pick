import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';

import { fetchRestaurants } from '../../actions/fetchActions';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


const AppSearchBar = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [location, setLocation] = useState('');

    const handleChange = ({ target }) => {
        console.log(target.value);
        setLocation(target.value);
    }

    function getRestaurants(e) {
        // axios.get(`https://cors-anywhere.herokuapp.com/https://peaceful-wave-51123.herokuapp.com/api/v1/public/get-listings-from-yelp?location=${location}`)
        //     .then(res => {
        //         let { businesses } = res.data;
        //         setStateVariable(businesses);

        //         //setStateVariable(res.data);
        //     }).catch(e => { console.log(e) })
        // e.preventDefault();
        //e.preventDefault();
        console.log('fetching stuff');
        dispatch(fetchRestaurants(location));
        e.preventDefault();
    }

    return (
        <Paper component="form" className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={handleChange}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search" onClick={getRestaurants}>
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    )
}

AppSearchBar.propTypes = {
    fetchRestaurants: PropTypes.func.isRequired
};

export default connect(null, { fetchRestaurants })(AppSearchBar);

