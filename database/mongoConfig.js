const mongoose = require('mongoose');
const { mongoUrl } = require('../configs/mainConfig');

const connectMongoDB = async () => {
    try {
        await mongoose.connect(mongoUrl, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            autoIndex: false
        });

        console.log('MongoDB :: Connection has been successfully.');
    } catch (error) {
        console.error('MongoDB :: Connection failed:', error);
        throw error;
    }
};

module.exports = {
    mongoose,
    connectMongoDB
};