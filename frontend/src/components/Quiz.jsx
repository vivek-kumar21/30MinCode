import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { URL } from "../url";
import Markdown from "react-markdown";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);

  const { lang } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${URL}/api/v1/quizzes/${lang}`);

        setQuestions(res.data[0]?.questions || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [lang]);

  const handleAnswerOptionClick = (isCorrect, index) => {
    setSelectedAnswer(index);
    setAnswered(true);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setSelectedAnswer(null);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-200 min-h-screen">
      <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          {lang} Quiz
        </h1>
        {questions.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-700">
            No quiz data
          </div>
        ) : showScore ? (
          <div className="text-center text-xl font-semibold text-gray-700">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="mb-6">
              <div className="text-lg text-gray-700">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="mt-4 text-lg font-medium text-gray-900">
                <Markdown>{questions[currentQuestion].question}</Markdown>
              </div>
            </div>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((answerOption, index) => (
                <button
                  key={index}
                  className={`w-full p-3 rounded-lg transition duration-200 ${
                    answered
                      ? index === selectedAnswer
                        ? questions[currentQuestion].answer === answerOption
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                        : "bg-gray-300 text-gray-600"
                      : "bg-blue-500 text-white hover:bg-blue-700"
                  }`}
                  onClick={() =>
                    !answered &&
                    handleAnswerOptionClick(
                      questions[currentQuestion].answer === answerOption,
                      index
                    )
                  }
                >
                  {answerOption}
                </button>
              ))}
            </div>
            {answered && (
              <div className="mt-6 text-center">
                <button
                  className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
                  onClick={handleNextQuestion}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
