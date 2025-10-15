import mongoose from "mongoose";
import AiUser from "./models/aiUser.js";
import bcrypt from "bcrypt";

const seedAdmin = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://furqan:furqan123@cluster0.udrs5zb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    const hash = await bcrypt.hash("admin", 10);
    const admin = await AiUser.create({
      username: "admin",
      email: "7ai@admin.com",
      password: hash,
    });
    console.log(admin);
  } catch (error) {
    console.log(error);
  }
};

seedAdmin();
