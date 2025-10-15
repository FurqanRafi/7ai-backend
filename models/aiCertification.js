import mongoose from "mongoose";

const CertificationSchema = new mongoose.Schema({
  paragraph: String,
  img: String,
  certificate: [
    {
      img: String,
      title: String,
      desc: String,
    },
  ],
});

export default mongoose.model("AiCertification", CertificationSchema);
