import express from "express";
import {
  GetQuestion,
  CreateQuestion,
  UpdateQuestion,
  DeleteQuestion,
} from "../controller/aiQuestionController.js";
const router = express.Router();

router.get("/question", GetQuestion);
router.post("/question", CreateQuestion);
router.put("/question/:id", UpdateQuestion);
router.delete("/question/:id", DeleteQuestion);

export default router;
