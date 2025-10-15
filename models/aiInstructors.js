import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema({
  uptitle: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  btnname: { type: String, required: true },
  btnLink: { type: String, required: true },
});

export default mongoose.model("AiInstructors", InstructorSchema);
