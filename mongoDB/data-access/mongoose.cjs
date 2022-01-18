const mongoose = require('mongoose');

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // reconnectTries: 1,
    // reconnectInterval: 3000
};

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000';

async function connect() {
    try {
        return mongoose.connect(mongoUri, mongooseOptions);
        console.info('Mongoose connected to MongoDB');
    } catch (error) {
        console.error('first', error.message);
    }
}

async function disconnect(){
    try {
        await mongoose.disconnect();

        console.info('Mongoose disconnected');
    } catch (error) {
        console.error(error.message);
    }
}

function promiseConnect (mongoUri) {
    return mongoose.connect(mongoUri, mongooseOptions)
        .then((result) => {
            console.info('Mongoose connected to MongoDB');
            return result
        })
        .catch(error => {
            console.log(error)
            return Promise.reject(error)
        })
}

function promiseDisconnect () {
    return mongoose.disconnect(mongoUri, mongooseOptions)
        .then((result) => {
            console.info('Mongoose disconnected');
            return result
        })
        .catch(error => {
            console.error(error.message);
            return error
        })
}

module.exports = {
    disconnect,
    connect,
    promiseConnect,
    promiseDisconnect,
}
