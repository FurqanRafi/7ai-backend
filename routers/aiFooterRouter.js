import express from "express";
import {
  GetFooter,
  CreateFooter,
  UpdateFooter,
  DeleteFooter,
} from "../controller/aiFooterController.js";
const router = express.Router();

router.get("/footer", GetFooter);
router.post("/footer", CreateFooter);
router.put("/footer/:id", UpdateFooter);
router.delete("/footer/:id", DeleteFooter);

export default router;
