// src/pages/TeamInfoPage.js
import React from 'react';
import { Container, Typography, Grid, Box, Card, CardContent } from '@mui/material';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'Team Lead',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Jane Smith',
        role: 'Developer',
        image: 'https://via.placeholder.com/150',
    },
    // Add more team members as needed
];

const TeamInfoPage = () => {
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Team Information
            </Typography>
            <Grid container spacing={3}>
                {teamMembers.map((member, index) => (
                    <Grid key={index} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Box sx={{ textAlign: 'center' }}>
                                    <img src={member.image} alt={member.name} width="150" />
                                    <Typography variant="h6">{member.name}</Typography>
                                    <Typography variant="subtitle1">{member.role}</Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default TeamInfoPage;
