import React from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import { AmplifySignOut } from '@aws-amplify/ui-react';

export default function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon fontSize="large" />
            </Button>
            <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>
                    <Link to="/authentication/signin">
                        <IconButton className="iconButton">
                            <PersonAddIcon fontSize="small" /> <h6 className="icon_text"> Match with friend</h6>
                        </IconButton>
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <AmplifySignOut />
                </MenuItem>
            </Menu>
        </div>
    );
}