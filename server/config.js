import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const mongoConfig = async () => {
    try {
        // Connection options to avoid deprecation warnings and ensure better handling
        // const options = {
        //     useNewUrlParser: true,
        //     // useUnifiedTopology: true,
        // };

        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

export default mongoConfig;
