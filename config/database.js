const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect("mongodb://localhost:27017/quotes").then((data) => {
        console.log(`MongoDb connnected with server ${data.connection.host}`);
    });
};
module.exports = connectDatabase