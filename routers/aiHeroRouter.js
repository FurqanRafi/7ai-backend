import express from "express";
import {
  CreateHero,
  GetHero,
  updateHero,
  deleteHero,
} from "../controller/aiHeroController.js";

const router = express.Router();

router.get("/hero", GetHero);
router.post("/hero", CreateHero);
router.put("/hero/:id", updateHero);
router.delete("/hero/:id", deleteHero);

export default router;
