import mongoose from "mongoose";

const NavbarSchema = new mongoose.Schema({
  logo: { type: String, required: true },
  menu: [
    {
      name: String,
      link: String,
    },
  ],
  button: {
    btnname: { type: String, required: true },
    btnLink: { type: String, required: true },
  },
});

export default mongoose.model("AiNavbar", NavbarSchema);
