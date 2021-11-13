import React, {useState, useEffect} from 'react';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PricingCard from './PricingCard';
import { getTiers } from '../../functions/pricing';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100%'
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    pricingCont: {
        padding: theme.spacing(8,0),
    },
    cardHeader: {
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
}));

const Pricing = () => {
    const classes = useStyles();
    const [tiers, setTiers] = useState([]);

    // function to load pricing data from json
    const loadTiers = () => {
        getTiers().then((res) => {
            setTiers(res.data.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        loadTiers();
    }, []);

    return (
        <section className={classes.root} id="pricing">
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Pricing
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                Quickly build an effective pricing table for your potential customers with this layout.
                It&apos;s built with default Material-UI components with little customization.
                </Typography>
            </Container>
      
            <Container maxWidth="md" component="main" className={classes.pricingCont}>
                <Grid container spacing={5} alignItems="flex-end">
                {tiers && tiers.map((tier) => (
                    // Enterprise card is full width at sm breakpoint
                    <PricingCard item key={tier.title} tier={tier}/>
                ))}
                </Grid>
            </Container>
            
        </section>
    )
}

export default Pricing;
