import React, { useEffect, useState } from 'react';
import CryptoPrices from './CryptoPrices';
import PopulationGraph from './Population-graph';


const Home = () => {
    return (
        <div>
            <PopulationGraph />
            <CryptoPrices />
        </div>
    );
}

export default Home;