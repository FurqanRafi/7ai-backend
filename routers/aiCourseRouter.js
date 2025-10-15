import express from "express";
import {
  GetCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse,
} from "../controller/aiCourseController.js";

const router = express.Router();

router.get("/course", GetCourse);
router.post("/course", CreateCourse);
router.put("/course/:id", UpdateCourse);
router.delete("/course/:id", DeleteCourse);

export default router;
