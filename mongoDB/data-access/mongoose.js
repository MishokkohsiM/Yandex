import mongoose from 'mongoose';

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000';

export async function connect() {
    try {
        await mongoose.connect(mongoUri, mongooseOptions);
        console.info('Mongoose connected to MongoDB');
    } catch (error) {
        console.error(error.message);
    }
}

export async function disconnect(){
    try {
        await mongoose.disconnect();

        console.info('Mongoose disconnected');
    } catch (error) {
        console.error(error.message);
    }
}
