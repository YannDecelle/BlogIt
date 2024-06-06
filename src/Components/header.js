import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography style={{ flexGrow: 1 }}>
                    MetaBlog
                </Typography>
                <Link color="inherit" underline="none" href="/" style={{ marginRight: '16px' }}>Home</Link>
                <Link color="inherit" underline="none" href="/blog" style={{ marginRight: '16px' }}>Blog</Link>
                <Link color="inherit" underline="none" href="/new" style={{ marginRight: '16px' }}>New Post</Link>
                <Link color="inherit" underline="none" href="/auth" style={{ marginRight: '16px' }}>Login</Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
