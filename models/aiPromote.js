import mongoose from "mongoose";

const PromoteSchema = new mongoose.Schema({
  icon: [
    {
      img: String,
      title: String,
    },
  ],
});

export default mongoose.model("AiPromote", PromoteSchema);
