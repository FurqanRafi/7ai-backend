import AiUser from "../models/aiUser.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AiUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({ message: "User Found", user, token });
  } catch (error) {
    console.log(error);
  }
};
