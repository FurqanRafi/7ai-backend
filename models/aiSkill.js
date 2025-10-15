import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  img: { type: String, required: true },
  skill: [
    {
      icon: String,
      title: String,
      desc: String,
    },
  ],
});

export default mongoose.model("AiSkill", SkillSchema);
