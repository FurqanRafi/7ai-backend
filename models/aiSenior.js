import mongoose from "mongoose";

const SeniorSchema = new mongoose.Schema({
  senior: [
    {
      img: String,
      social: [
        {
          icons: String,
          link: String,
        },
      ],
      name: String,
      position: String,
      desc: String,
    },
  ],
});

export default mongoose.model("AiSenior", SeniorSchema);
