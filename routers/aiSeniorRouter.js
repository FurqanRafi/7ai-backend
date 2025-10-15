import express from "express";
import {
  GetSenior,
  CreateSenior,
  UpdateSenior,
  DeleteSenior,
} from "../controller/aiSeniorController.js";

const router = express.Router();

router.get("/senior", GetSenior);
router.post("/senior", CreateSenior);
router.put("/senior/:id", UpdateSenior);
router.delete("/senior/:id", DeleteSenior);

export default router;
