const connectDB = require('./db');

async function fetchLatestData() {
    const mongoClient = await connectDB();

    try {
        const data = await mongoClient.db().collection('plcdata').find().sort({ DateAndTime: -1 }).limit(1).toArray();
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchDataRange(startTime, endTime) {
    const mongoClient = await connectDB();

    const start = new Date(startTime);
    const end = new Date(endTime);
    const sstring = start.toISOString().slice(0,10);
    const estring = end.toISOString().slice(0,10);
    console.log('Start:', sstring);
    console.log('End:', estring);
    try {
        const data = await mongoClient
            .db()
            .collection('plcdata')
            .find({ DateAndTime: { $gte: sstring, $lte: estring+" 23:59:59.000" } })
            .toArray();
        return data;
    } catch (error) {
        throw error;
    }
}

async function fetchAllData() {
    const mongoClient = await connectDB();
    try {
        const data = await mongoClient.db().collection('plcdata')
            .find({})
            .sort({DateAndTime: -1})
            .limit(20)
            .toArray();
        return data.reverse();
    } catch (error) {
        throw error;
    }
}
module.exports = {
    fetchLatestData,
    fetchDataRange,
    fetchAllData
};
