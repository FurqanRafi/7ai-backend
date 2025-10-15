import express from "express";
import {
  GetPromote,
  CreatePromote,
  UpdatePromote,
  DeletePromote,
} from "../controller/aiPromoteController.js";

const router = express.Router();

router.get("/promote", GetPromote);
router.post("/promote", CreatePromote);
router.put("/promote/:id", UpdatePromote);
router.delete("/promote/:id", DeletePromote);

export default router;
