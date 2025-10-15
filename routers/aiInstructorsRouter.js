import express from "express";
import {
  GetInstructors,
  CreateInstructors,
  UpdateInstructors,
  DeleteInstructors,
} from "../controller/aiInstructorsController.js";

const router = express.Router();

router.get("/instructor", GetInstructors);
router.post("/instructor", CreateInstructors);
router.put("/instructor/:id", UpdateInstructors);
router.delete("/instructor/:id", DeleteInstructors);

export default router;
