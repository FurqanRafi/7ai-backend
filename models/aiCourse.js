import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema({
  course: [
    {
      img: String,
      title: String,
      desc: String,
    },
  ],
});

export default mongoose.model("AiCourse", CourseSchema);
