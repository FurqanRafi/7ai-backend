import express from "express";
import {
  GetCertificate,
  CreateCertificate,
  UpdateCertificate,
  DeleteCertificate,
} from "../controller/aiCertificateController.js";
const router = express.Router();

router.get("/certificate", GetCertificate);
router.post("/certificate", CreateCertificate);
router.put("/certificate/:id", UpdateCertificate);
router.delete("/certificate/:id", DeleteCertificate);

export default router;

