import mongoose from "mongoose";

const CurricullumSchema = new mongoose.Schema({
  icon: [
    {
      icons: String,
      title: String,
    },
  ],
  paragraph1: String,
  paragraph2: String,
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
});

export default mongoose.model("AiCurricullum", CurricullumSchema);
