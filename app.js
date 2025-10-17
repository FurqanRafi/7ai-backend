import express from "express";
import ConnectDB from "./config/mongoDBConnect.js";
import cors from "cors";
import NavbarRouter from "./routers/aiNavbarRouter.js";
import HeroRouter from "./routers/aiHeroRouter.js";
import ProductivityRouter from "./routers/aiProductivityRouter.js";
import InstructorsRouter from "./routers/aiInstructorsRouter.js";
import CourseRouter from "./routers/aiCourseRouter.js";
import SkillRouter from "./routers/aiSkillRouter.js";
import PromoteRouter from "./routers/aiPromoteRouter.js";
import SeniorRouter from "./routers/aiSeniorRouter.js";
import TestimonialRouter from "./routers/aiTestimonialRouter.js";
import WhatRouter from "./routers/aiWhatRouter.js";
import CurricullumRouter from "./routers/aiCurriccullumRouter.js";
import CertificateRouter from "./routers/aiCertifcateRouter.js";
import PricingRouter from "./routers/aiPricingRouter.js";
import FAQsRouter from "./routers/aiFAQsRouter.js";
import QuestionRouter from "./routers/aiQuestionRouter.js";
import FooterRouter from "./routers/aiFooterRouter.js";
import UserRouter from "./routers/aiUserRouter.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// const port = 3000;

ConnectDB();

app.get("/", (req, res) => {
  res.send("You Entered the Backend");
});
app.use("/api", NavbarRouter);
app.use("/api", HeroRouter);
app.use("/api", ProductivityRouter);
app.use("/api", InstructorsRouter);
app.use("/api", CourseRouter);
app.use("/api", SkillRouter);
app.use("/api", PromoteRouter);
app.use("/api", SeniorRouter);
app.use("/api", TestimonialRouter);
app.use("/api", WhatRouter);
app.use("/api", CurricullumRouter);
app.use("/api", CertificateRouter);
app.use("/api", PricingRouter);
app.use("/api", FAQsRouter);
app.use("/api", QuestionRouter);
app.use("/api", FooterRouter);
app.use("/api", UserRouter);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

export default app;
