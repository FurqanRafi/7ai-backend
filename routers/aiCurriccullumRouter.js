import express from "express";
import {
  GetCurricullum,
  CreateCurricullum,
  UpdateCurricullum,
  DeleteCurricullum,
} from "../controller/aiCurricullumController.js";
const router = express.Router();

router.get("/curricullum", GetCurricullum);
router.post("/curricullum", CreateCurricullum);
router.put("/curricullum/:id", UpdateCurricullum);
router.delete("/curricullum/:id", DeleteCurricullum);

export default router;
