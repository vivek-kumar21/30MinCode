import { Router } from "express";
import {
  createQuiz,
  deleteQuizByQuestionId,
  getQuizByLang,
} from "../controllers/quiz.controller.js";

const router = Router();

router.route("/:lang").get(getQuizByLang);
router.route("/create").post(createQuiz);
router.route("/:lang/:questionId").delete(deleteQuizByQuestionId);
// router.route("/:lang").put(updateQuiz);

export default router;
