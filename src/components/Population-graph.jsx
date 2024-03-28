import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const PopulationGraph = () => {
    const [populationData, setPopulationData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
                const data = await response.json();
                setPopulationData(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (populationData.length > 0) {
            const years = populationData.map((item) => item.Year);
            const populations = populationData.map((item) => item.Population);

            const ctx = document.getElementById('populationChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: years,
                    datasets: [
                        {
                            label: 'Population of the United States',
                            data: populations,
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: false,
                            title: {
                                display: true,
                                text: 'Population',
                            },
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Year',
                            },
                        },
                    },
                },
            });
        }
    }, [populationData]);

    return <div style={{ position: 'relative', height: '400px', width: '400px' }}>
        <canvas
            id="populationChart"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: '100%',
            }}
        ></canvas>
    </div>
};

export default PopulationGraph;
