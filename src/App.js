import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material'; // Remove Hidden import
import Dashboard from './components/Dashboard';
import HomePage from './pages/HomePage';
import TeamInfoPage from './pages/TeamPage';
import NavBar from './components/NavBar';
import TeamPage from "./pages/TeamPage";

const AppContent = () => {
    const location = useLocation();

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={location.pathname === '/' ? 12 : 10}>
                    <Routes>
                        {/* Add routes for different pages */}
                        <Route exact path="/" element={<HomePage />} />
                        <Route path="/dashboard" element={<Dashboard />} />

                        <Route path="/TeamPage" element={<TeamPage/>} />*/}
                        {/* ... other routes */}
                    </Routes>
                </Grid>
            </Grid>
        </Container>
    );
};

const App = () => {
    return (
        <Router>
            <NavBar /> {/* Add the NavBar component here */}
            <Box pt={3}> {/* Add a Box component with some top padding */}
                <AppContent />
            </Box>
        </Router>
    );
};

export default App;