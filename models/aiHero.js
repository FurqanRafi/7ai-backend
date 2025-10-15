import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  heroimg: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  buttons: {
    btnname: { type: String, required: true },
    btnLink: { type: String, required: true },
  },
  icons: [
    {
      iconimg: String,
      iconDescription: String,
    },
  ],
});

export default mongoose.model("AiHero", HeroSchema);
