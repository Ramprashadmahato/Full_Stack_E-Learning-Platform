const mongoose = require("mongoose");

// Function to connect to MongoDB
const connectDb = async () => {
    try {
        // Connect to the MongoDB Atlas database using mongoose
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to the database!");
        console.error("Full Error:", error.message);
        console.error("Connection String used (masked):", process.env.MONGO_URI ? process.env.MONGO_URI.replace(/:([^@]+)@/, ":****@") : "MISSING");
        process.exit(1);
    }
};

// Export the connectDb function so it can be used in other parts of the application
module.exports = connectDb;
