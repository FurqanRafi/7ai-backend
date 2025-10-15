import mongoose from "mongoose";

const PricingSchema = new mongoose.Schema({
  desc: String,
  pricing: [
    {
      title: String,
      duration: String,
      text: String,
      price: String,
      takeprice: String,
      btnText: String,
      btnLink: String,
    },
  ],
});

export default mongoose.model("AiPricing", PricingSchema);
