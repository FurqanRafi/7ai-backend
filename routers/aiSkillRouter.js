import express from "express";
import {
  GetSkill,
  CreateSkill,
  UpdateSkill,
  DeleteSkill,
} from "../controller/aiSkillController.js";

const router = express.Router();

router.get("/skill", GetSkill);
router.post("/skill", CreateSkill);
router.put("/skill/:id", UpdateSkill);
router.delete("/skill/:id", DeleteSkill);

export default router;
