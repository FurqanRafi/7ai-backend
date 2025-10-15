import express from "express";
import {
  GetWhat,
  CreateWhat,
  UpdateWhat,
  DeleteWhat,
} from "../controller/aiWhatController.js";

const router = express.Router();

router.get("/what", GetWhat);
router.post("/what", CreateWhat);
router.put("/what/:id", UpdateWhat);
router.delete("/what/:id", DeleteWhat);

export default router;
