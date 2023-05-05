import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle, TextField, Button, Grid } from '@mui/material';

const Alerts = ({ latestData }) => {
    const [alerts, setAlerts] = useState([]);
    const [tempThreshold, setTempThreshold] = useState(70);
    const [humidityThreshold, setHumidityThreshold] = useState(30);

    useEffect(() => {
        if (latestData) {
            checkForAlerts(latestData);
        }
    }, [latestData]);

    const checkForAlerts = (sensorData) => {
        const newAlerts = [];

        if (sensorData.temperature > tempThreshold) {
            newAlerts.push({ type: 'warning', message: 'Temperature is too high.' });
        }

        if (sensorData.humidity < humidityThreshold) {
            newAlerts.push({ type: 'warning', message: 'Humidity is too low.' });
        }

        setAlerts(newAlerts);
    };

    return (
        <>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <TextField
                        label="Temperature Threshold"
                        type="number"
                        value={tempThreshold}
                        onChange={(e) => setTempThreshold(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        label="Humidity Threshold"
                        type="number"
                        value={humidityThreshold}
                        onChange={(e) => setHumidityThreshold(e.target.value)}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        onClick={() => checkForAlerts(latestData)}
                    >
                        Update Thresholds
                    </Button>
                </Grid>
            </Grid>

            {alerts.map((alert, index) => (
                <Alert key={index} severity={alert.type}>
                    <AlertTitle>{alert.type.toUpperCase()}</AlertTitle>
                    {alert.message}
                </Alert>
            ))}
        </>
    );
};

export default Alerts;
