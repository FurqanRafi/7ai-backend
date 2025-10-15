import AiTestimonials from "../models/aiTestimonials.js";

export const GetTestimonials = async (req, res) => {
  try {
    const testimonials = await AiTestimonials.find();
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Get Testimonials");
  }
};

export const CreateTestimonials = async (req, res) => {
  try {
    const del = await AiTestimonials.deleteMany();
    const testimonials = await AiTestimonials.create(req.body);
    res.status(201).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Create Testimonials");
  }
};

export const UpdateTestimonials = async (req, res) => {
  try {
    const testimonials = await AiTestimonials.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Update Testimonials");
  }
};

export const DeleteTestimonials = async (req, res) => {
  try {
    const testimonials = await AiTestimonials.findByIdAndDelete(req.params.id);
    res.status(200).json(testimonials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    console.log("finally Delete Testimonials");
  }
};
