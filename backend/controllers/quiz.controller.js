import { CQuiz, CppQuiz, JavaQuiz, JavascriptQuiz, PythonQuiz } from "../models/quiz.model.js";

const getModelByLanguage = (language) => {
  // console.log("Language received:", language);

  switch (language.toLowerCase()) {
    case "c":
      return CQuiz;
    case "cpp":
      return CppQuiz;
    case "java":
      return JavaQuiz;
    case "python":
      return PythonQuiz;
    case "javascript":
      return JavascriptQuiz;
    default:
      throw new Error("Unsupported language");
  }
};

export const createQuiz = async (req, res) => {
  try {
    const { language, questions } = req.body;
    const QuizModel = getModelByLanguage(language);

    const existingQuiz = await QuizModel.findOne({ language });

    if (existingQuiz) {
      await QuizModel.updateOne(
        { language },
        { $push: { questions: { $each: questions } } }
      );

      res
        .status(200)
        .json({ message: "Questions added to existing quiz successfully." });
    } else {
      const quiz = new QuizModel({ language, questions });
      await quiz.save();

      res.status(201).json(quiz);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQuizByLang = async (req, res) => {
  try {
    const language = req.params.lang;
    const QuizModel = getModelByLanguage(language);

    const quizzes = await QuizModel.find({});
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteQuizByQuestionId = async (req, res) => {
  try {
    const { language, questionId } = req.params;
    const QuizModel = getModelByLanguage(language);

    const result = await QuizModel.updateOne(
      { "questions._id": questionId },
      { $pull: { questions: { _id: questionId } } }
    );

    if (result.nModified > 0) {
      res.status(200).json({ message: "Question deleted successfully." });
    } else {
      res.status(404).json({ message: "Question not found." });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
