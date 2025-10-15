import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB Connected");
    }
  } catch (error) {
    console.log("MongoDB Connected FAILED", error);
    console.error("❌ DB Connection Error:", error.message);
  }
};

export default connectDB;
