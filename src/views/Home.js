import React from 'react';
import Album from '../components/Album/Album';
import Pricing from '../components/Pricing/Pricing';
import LandingHero from '../components/LandingHero/LandingHero';

const Home = () => {
    
    return (
        <>
            <LandingHero/>
            <Album />
            <Pricing/>
        </>
    )
}

export default Home
