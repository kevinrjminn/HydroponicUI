import React, { useEffect, useState } from 'react';

const MongoDB = () => {
    const [connectionStatus, setConnectionStatus] = useState('');
    const [data, setData] = useState([]);

    async function fetchData() {
        try {
            const response = await fetch('http://localhost:3001/api/get-data');
            const result = await response.json();
            if (response.status === 200) {
                setData(result.data);
                setConnectionStatus('Successfully fetched data from MongoDB!');
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setConnectionStatus('Failed to fetch data from MongoDB. Error: ' + error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            {connectionStatus ? (
                <p>{connectionStatus}</p>
            ) : (
                <p>Fetching data...</p>
            )}
            <div>
                <h3>Data:</h3>
                {data.map((item, index) => (
                    <p key={index}>{JSON.stringify(item)}</p>
                ))}
            </div>
        </div>
    );
};

export default MongoDB;
