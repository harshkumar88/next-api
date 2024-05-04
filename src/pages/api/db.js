// db.js

import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://HarshBansal:HarshBansal88@cluster0.ffsv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process with failure
  }
};

export { connectDB };
