import React from 'react';
import { Box, Typography } from '@mui/material';

const StatusLabel = ({ label, value, lowThreshold, highThreshold }) => {
    let status;

    if (value < lowThreshold) {
        status = 'Low';
    } else if (value > highThreshold) {
        status = 'High';
    } else {
        status = 'Good';
    }

    return (
        <Box textAlign="center">
            <Typography variant="subtitle1">{label}</Typography>
            <Typography variant="body1">{status}</Typography>
        </Box>
    );
};

export default StatusLabel;
