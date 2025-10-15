import express from "express";
import {
  GetProductivity,
  CreateProductivity,
  UpdateProductivity,
  DeleteProductivity,
} from "../controller/aiProductivityController.js";

const router = express.Router();

router.get("/productivity", GetProductivity);
router.post("/productivity", CreateProductivity);
router.put("/productivity/:id", UpdateProductivity);
router.delete("/productivity/:id", DeleteProductivity);

export default router;
