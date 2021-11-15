import React from 'react';
import {
    Typography,
    Grid,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Button
} from '@material-ui/core';
import StarIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        transition: theme.transitions.create(['transform', 'box-shadow'], {
            duration: theme.transitions.duration.complex,
            easing: theme.transitions.easing.easeInOut,
        }),
        "&:hover": {
            transform: 'translateY(-10px)',
        },
        
    },
    card: {
        "&:hover": {
            border: 'solid 1px rgba(50, 139, 248, 0.4)'
        }
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

const PricingCard = ({ tier }) => {

    const classes = useStyles();

    return (
        <Grid item xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4} className={classes.root}>
            <Card className={classes.card}>
                <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <div className={classes.cardPricing}>
                        <Typography component="h2" variant="h3" color="textPrimary">
                            ${tier.price}
                        </Typography>
                        <Typography variant="h6" color="textSecondary">
                            /mo
                        </Typography>
                    </div>
                    <ul>
                        {tier.description.map((line) => (
                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                {line}
                            </Typography>
                        ))}
                    </ul>
                </CardContent>
                <CardActions>
                    <Button fullWidth variant={tier.buttonVariant} color="primary">
                        {tier.buttonText}
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default PricingCard;
