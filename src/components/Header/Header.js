import React from 'react';
import './Header.css';
import { Link, useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import FadeMenu from '../FadeMenu/FadeMenu';

function Header({ backButton }) {
    const history = useHistory();
    return (
        // BEM naming convention
        <div>
            <div className="header">
                {backButton ? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize="large" className="header__icon" />
                    </IconButton>
                ) : (
                    <FadeMenu />
                    // <Link to="/authentication/signin">
                    //     <IconButton>
                    //         <PersonIcon className="header__icon" fontSize="large" />
                    //     </IconButton>
                    // </Link>




                )}

                <Link to="/">
                    <img
                        className="header__logo"
                        // source={require("../../assets/images/logo-white.png")}
                        // src="https://cdn.worldvectorlogo.com/logos/tinder-2.svg"
                        src="https://i.ibb.co/LgrghNg/logo.png"
                        alt="logo" />

                </Link>

                <Link to="/chat">
                    <IconButton>
                        <ForumIcon className="header__icon" fontSize="large" />
                    </IconButton>
                </Link>
            </div>
        </div>




    )
}

export default Header
