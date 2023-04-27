const express = require('express');
const cors = require('cors');
const { fetchLatestData, fetchDataRange, fetchAllData} = require('./dataController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/api/get-data', async (req, res) => {
    try {
        const data = await fetchAllData();
        if (!data) {
            res.status(404).json({ error: 'No data found' });
        } else {
            const responseObject = { data };
            console.log('Response object:', responseObject);
            res.json(responseObject);
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Failed to fetch data from MongoDB. Error: ' + error.message });
    }
});
app.get('/api/get-data-range', async (req, res) => {
    const startTime = req.query.startTime;
    const endTime = req.query.endTime;

    try {
        const data = await fetchDataRange(startTime, endTime);
        if (!data) {
            res.status(404).json({ error: 'No data found for the specified time range' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Failed to fetch data from MongoDB. Error: ' + error.message });
    }
});

app.get('/api/get-latest-data', async (req, res) => {
    try {
        const data = await fetchLatestData();
        if (!data) {
            res.status(404).json({ error: 'No data found' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ error: 'Failed to fetch data from MongoDB. Error: ' + error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
