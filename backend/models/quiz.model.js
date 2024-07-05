import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [String],
  answer: String,
});

const quizSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

export const CQuiz = mongoose.model("CQuiz", quizSchema, "CQuiz");
export const CppQuiz = mongoose.model("CppQuiz", quizSchema, "CppQuiz");
export const JavaQuiz = mongoose.model("JavaQuiz", quizSchema, "JavaQuiz");
export const PythonQuiz = mongoose.model(
  "PythonQuiz",
  quizSchema,
  "PythonQuiz"
);
export const JavascriptQuiz = mongoose.model(
  "JavascriptQuiz",
  quizSchema,
  "JavascriptQuiz"
);
