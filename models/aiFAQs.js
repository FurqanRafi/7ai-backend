import mongoose from "mongoose";

const FaqsSchema = new mongoose.Schema({
  questions: [
    {
      question: String,
      answer: String,
    },
  ],
});

export default mongoose.model("AiFAQs", FaqsSchema);
