const mongoose = require('mongoose');
const { mongoUrl } = require('../configs/mainConfig');

mongoose.connect(mongoUrl,
    {
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
        autoIndex: false
    }
)
    .then(() => {
        console.log(`MongoDB :: Connection has been successfully.`);
    })
    .catch((e) => {
        console.log(`CATCH ERROR MongoDB :: (connect) :: ${e}`);
    });

module.exports = {
    mongoose
};