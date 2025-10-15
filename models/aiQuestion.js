import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  title: String,
  img: String,
  desc: String,
  icon: [
    {
      icons: String,
      text: String,
    },
  ],
  btntext: String,
  btnLinks: String,
});

export default mongoose.model("AiQuestion", QuestionSchema);
