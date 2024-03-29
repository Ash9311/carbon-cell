import React, { useEffect, useState } from 'react';

const CryptoPrices = () => {
    const [cryptoData, setCryptoData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
                const data = await response.json();
                setCryptoData(data.bpi);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const renderCryptoCards = () => {
        if (!cryptoData) {
            return <div>Loading...</div>;
        }

        return Object.keys(cryptoData).map((currency) => (
            <div key={currency} className="border border-gray-200 rounded-lg p-4 m-2">
                <h2 className="text-xl font-semibold">{cryptoData[currency].description}</h2>
                <p className="text-lg">{cryptoData[currency].rate}</p>
            </div>
        ));
    };

    return (
        <div className="flex flex-wrap justify-center">
            {renderCryptoCards()}
        </div>
    );
};

export default CryptoPrices;
