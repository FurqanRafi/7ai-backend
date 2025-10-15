import express from "express";
import {
  GetPricing,
  CreatePricing,
  UpdatePricing,
  DeletePricing,
} from "../controller/aiPricingController.js";
const router = express.Router();

router.get("/pricing", GetPricing);
router.post("/pricing", CreatePricing);
router.put("/pricing/:id", UpdatePricing);
router.delete("/pricing/:id", DeletePricing);

export default router;
