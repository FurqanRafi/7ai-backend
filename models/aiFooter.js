import mongoose from "mongoose";

const FooterSchema = new mongoose.Schema({
  logo: String,
  desc: String,
  Social: [
    {
      icon: String,
      link: String,
    },
  ],
  contact: [
    {
      icon: String,
      text: String,
      link: String,
    },
  ],

  links: [
    {
      title: String,
      links: String,
    },
  ],
  sideLinks: [
    {
      title: String,
      link: String,
    },
  ],

  
});

export default mongoose.model("AiFooter", FooterSchema);
