import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Alerts from './Alerts';
import DataTable from './DataTable';
import SensorCards from './SensorCards';
import PlantProgress from './PlantProgress';
import { useMediaQuery } from '@mui/material';

const Dashboard = () => {
    const isLargeScreen = useMediaQuery('(min-width:900px)');

    const [sensorData, setSensorData] = useState([]);

    const fetchSensorData = async () => {
        try {
            const response = await fetch('/api/get-data');
            const result = await response.json();
            if (response.status === 200) {
                setSensorData(result.data.map(item => ({
                    timestamp: item.DateAndTime,
                    temperature: item.PLC_Temperature_Value,
                    humidity: item.PLC_Humidity_Value,
                    pH: item.PLC_pH_Value,
                    nutrientLevel: item.PLC_TDS_Value,
                })));
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchSensorData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <Container maxWidth={isLargeScreen ? false : 'lg'}>
            {/*<Sidebar />*/}
            <Box sx={{ paddingTop:'66px',paddingLeft: '30px', display: 'flex', flexDirection: 'column', height: '100%' }}> {}
                <Typography variant="h4" align="center" gutterBottom>
                    Hydroponic Monitoring Dashboard
                </Typography>


                <SensorCards sensorData={sensorData} />
                <hr/>
                <br/>

                <Box mt={4} flexGrow={1}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Plant Progress
                    </Typography>
                    <PlantProgress />
                </Box>
                <hr/>
                <br/>

                <center><Box mt={4} flexGrow={1}>
                    <h3>Data Table</h3>
                    <DataTable />
                </Box>
                </center>

            </Box>
        </Container>
    );
};

export default Dashboard;

