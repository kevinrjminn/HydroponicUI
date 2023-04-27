import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, Label } from 'recharts';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Dashboard = () => {
    const [sensorData, setSensorData] = useState([]);

    const fetchSensorData = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/get-data');
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
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Hydroponic Monitoring Dashboard
            </Typography>
            <Grid container spacing={3}>
                {/* ... (Temperature Card) */}
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Humidity</Typography>
                            <ResponsiveContainer width="100%" height={200} style={{ backgroundColor: 'lightgreen' }}>
                                <LineChart data={sensorData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                    <XAxis dataKey="timestamp" stroke="#666">
                                        <Label value="Time" position="insideBottom" offset={-5} />
                                    </XAxis>
                                    <YAxis stroke="#666">
                                        <Label value="%" position="insideLeft" angle={-90} />
                                    </YAxis>
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">pH Level</Typography>
                            <ResponsiveContainer width="100%" height={200} style={{ backgroundColor: 'red' }}>
                                <LineChart data={sensorData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                    <XAxis dataKey="timestamp" stroke="#666">
                                        <Label value="Time" position="insideBottom" offset={-5} />
                                    </XAxis>
                                    <YAxis stroke="#666">
                                        <Label value="pH" position="insideLeft" angle={-90} />
                                    </YAxis>
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="pH" stroke="#8884d8" />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Nutrient Level</Typography>
                            <ResponsiveContainer width="100%" height={200} style={{ backgroundColor: 'lightgreen' }}>
                                <LineChart data={sensorData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
                                    <XAxis dataKey="timestamp" stroke="#666">
                                        <Label value="Time" position="insideBottom" offset={-5} />
                                    </XAxis>
                                    <YAxis stroke="#666">
                                        <Label value="PPM" position="insideLeft" angle={-90} />
                                    </YAxis>
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="nutrientLevel" stroke="#FF8042"/>
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );

};

export default Dashboard;
