import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                    MetaBlog
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Blog</Button>
                <Button color="inherit">Single Post</Button>
                <Button color="inherit">Pages</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
