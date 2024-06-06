import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '20px 0' }}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">About</Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6">Quick Link</Typography>
                        <Link href="#" color="inherit" underline="none">Home</Link><br />
                        <Link href="#" color="inherit" underline="none">About</Link><br />
                        <Link href="#" color="inherit" underline="none">Blog</Link><br />
                        <Link href="#" color="inherit" underline="none">Archived</Link><br />
                        <Link href="#" color="inherit" underline="none">Author</Link><br />
                        <Link href="#" color="inherit" underline="none">Contact</Link>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Typography variant="h6">Category</Typography>
                        <Link href="#" color="inherit" underline="none">Lifestyle</Link><br />
                        <Link href="#" color="inherit" underline="none">Technology</Link><br />
                        <Link href="#" color="inherit" underline="none">Travel</Link><br />
                        <Link href="#" color="inherit" underline="none">Business</Link><br />
                        <Link href="#" color="inherit" underline="none">Economy</Link><br />
                        <Link href="#" color="inherit" underline="none">Sports</Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">Weekly Newsletter</Typography>
                        <Typography>
                            Get blog articles and offers via email.
                        </Typography>
                        <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
                        <Button variant="contained" color="primary">Subscribe</Button>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
                    MetaBlog © 2023. All Rights Reserved. | Terms of Use | Privacy Policy | Cookie Policy
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
