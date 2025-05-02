import { connect } from 'mongoose';

class DatabaseServer {
    private MONGO_URI: string;

    constructor() {
        this.MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/foody-database";
    }

    connect = async (): Promise<void> => {
        try {
            await connect(this.MONGO_URI);
            console.log('MongoDB connected successfully!');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1); // Exit process if unable to connect
        }
    }
}

export default DatabaseServer;