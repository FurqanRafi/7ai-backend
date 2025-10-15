import express from "express";
import {
  GetTestimonials,
  CreateTestimonials,
  UpdateTestimonials,
  DeleteTestimonials,
} from "../controller/aiTestimonialController.js";
const router = express.Router();

router.get("/testimonial", GetTestimonials);
router.post("/testimonial", CreateTestimonials);
router.put("/testimonial/:id", UpdateTestimonials);
router.delete("/testimonial/:id", DeleteTestimonials);

export default router;
