import mongoose from "mongoose";

const TestimonialsSchema = new mongoose.Schema({
  testimonial: [
    {
      desc: String,
      name: String,
      position: String,
      img: String,
    },
  ],
});

export default mongoose.model("AiTestimonials", TestimonialsSchema);
