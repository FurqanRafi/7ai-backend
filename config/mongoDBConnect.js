import mongoose from "mongoose";
import dotenv from "dotenv";



dotenv.config();
const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB CONNECTED");
  } catch (error) {
    console.log("MongoDB Connected fAILED", error);
  } finally {
  }
};

export default ConnectDB;
