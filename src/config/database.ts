import mongoose from 'mongoose';

const connectDatabase = async (): Promise<void> => {
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mongoose-typescript-app';
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};

export default connectDatabase;
