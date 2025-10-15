import mongoose from "mongoose";

const ProductivitySchema = new mongoose.Schema({
  img: { type: String, required: true },
  icon: [
    {
      img: String,
      desc: String,
    },
  ],
  title: { type: String, required: true },
  buttons: [
    {
      btnname: String,
      btnLink: String,
    },
  ],
});

export default mongoose.model("AiProductivity", ProductivitySchema);