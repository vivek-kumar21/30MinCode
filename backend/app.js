import express from "express";
import cors from "cors";
// require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

import quizRouter from "./routes/quiz.routes.js";

app.use("/api/v1/quizzes", quizRouter);

// http://localhost:8000/api/v1/quiz
export { app };
