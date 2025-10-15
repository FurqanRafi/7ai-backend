import mongoose from "mongoose";

const WhatSchema = new mongoose.Schema({
  what: {
    img: { type: String, required: true },
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
});

export default mongoose.model("AiWhat", WhatSchema);
