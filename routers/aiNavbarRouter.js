import express from "express";
import {
  GetNavbar,
  CreateNavbar,
  UpdateNavbar,
  DeleteNavbar,
} from "../controller/aiNavbarController.js";

const router = express.Router();

router.get("/navbar", GetNavbar);
router.post("/navbar", CreateNavbar);
router.put("/navbar/:id", UpdateNavbar);
router.delete("/navbar/:id", DeleteNavbar);

export default router;
