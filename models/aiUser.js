import mongoose from "mongoose";

const aiuserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const AiUser = mongoose.model("AiUser", aiuserSchema);

export default AiUser;
