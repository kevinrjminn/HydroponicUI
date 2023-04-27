import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Container, Typography } from '@mui/material';
import GreenProgressBar from './components/GreenProgressBar';
import MongoDB from './components/MongoDB';
import DrawerAppBar from './components/NavBar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const startDate = '2023-04-05';
    const [connectionStatus, setConnectionStatus] = useState('');

    return (
        <Router>
            <div className="App">
                <DrawerAppBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/dashboard"
                            element={
                                <>
                                    <Dashboard />
                                    {/*<MongoDB setConnectionStatus={setConnectionStatus} /> */}
                                    <Container>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            Harvest progress
                                        </Typography>
                                        <GreenProgressBar startDate={startDate} />
                                        <Typography variant="h6" align="center" gutterBottom>
                                            {connectionStatus}
                                        </Typography>
                                    </Container>
                                </>
                            }
                        />
                        {/* Add other routes here as needed */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
