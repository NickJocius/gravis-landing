import React from 'react';
import { Link, Typography } from '@material-ui/core';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Resonance Web Design
            </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        </Typography>
    )
}

export default Copyright
