import express from "express";
import {
  GetFAQs,
  CreateFAQs,
  UpdateFAQs,
  DeleteFAQs,
} from "../controller/aiFAQsController.js";
const router = express.Router();

router.get("/faqs", GetFAQs);
router.post("/faqs", CreateFAQs);
router.put("/faqs/:id", UpdateFAQs);
router.delete("/faqs/:id", DeleteFAQs);

export default router;
