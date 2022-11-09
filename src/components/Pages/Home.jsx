import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Pricing from './Pricing';
import Services from './Services/Services';
import Team from './Team';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Pricing></Pricing>
            <Team></Team>
            <Features></Features>
        </div>
    );
};

export default Home;