import React, { useState, useEffect } from 'react';
import { Box, LinearProgress, TextField } from '@mui/material';
import { styled } from '@mui/system';
import leafIcon from './LeafIcon.png'; // Import your leaf icon image file here

const GreenLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    '& .MuiLinearProgress-bar': {
        borderRadius: 5,
        backgroundColor: '#90EE90',
    },
}));

const LeafIcon = styled('img')({
    height: 20,
    marginLeft: -10,
    position: 'absolute',
});

const GreenProgressBar = ({ startDate }) => {
    const [progress, setProgress] = useState(0);
    const [plantationDate, setPlantationDate] = useState(startDate);

    useEffect(() => {
        const start = new Date(plantationDate);
        const end = new Date(start);
        end.setDate(end.getDate() + 21); // 3 weeks = 21 days

        const calculateProgress = () => {
            const now = new Date();
            if (now < start) return 0;
            if (now > end) return 100;
            const totalDuration = end - start;
            const elapsed = now - start;
            return (elapsed / totalDuration) * 100;
        };

        const updateProgress = () => {
            setProgress(calculateProgress());
        };

        const progressInterval = setInterval(updateProgress, 1000); // Update progress every 1 second
        return () => clearInterval(progressInterval);
    }, [plantationDate]);

    const handlePlantationDateChange = (event) => {
        setPlantationDate(event.target.value);
    };

    return (
        <Box>
            <Box mb={2}>
                <TextField
                    label="Plantation Date"
                    type="date"
                    value={plantationDate}
                    onChange={handlePlantationDateChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Box>
            <Box position="relative">
                <GreenLinearProgress variant="determinate" value={progress} />
                <LeafIcon src={leafIcon} alt="leaf" style={{ left: `${progress}%` }} />
            </Box>
        </Box>
    );
};

export default GreenProgressBar;
