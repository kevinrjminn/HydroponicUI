// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Hydrodata:Vikes23@hydroponicdata.rrapohr.mongodb.net/Hydroponicdata?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let isConnected = false;

async function connectDB() {
    if (!isConnected) {
        try {
            await client.connect();
            isConnected = true;
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error);
        }
    }
    return client;
}

module.exports = connectDB;
