import React from "react";
import FaqItem from "../components/FaqItem";

const faqData = [
  {
    type: "table",
    question: "Difference between C and C++",
    differences: [
      {
        feature: "Language Type",
        c: "Procedural",
        cpp: "Procedural + Object-Oriented",
      },
      { feature: "Inheritance", c: "No", cpp: "Yes" },
      { feature: "Encapsulation", c: "No", cpp: "Yes" },
      { feature: "Polymorphism", c: "No", cpp: "Yes" },
      { feature: "File Extension", c: ".c", cpp: ".cpp" },
    ],
  },
  {
    type: "table",
    question: "Difference between Java and C++",
    differences: [
      {
        feature: "Platform",
        java: "Platform-Independent",
        cpp: "Platform-Dependent",
      },
      {
        feature: "Memory Management",
        java: "Automatic (Garbage Collection)",
        cpp: "Manual",
      },
      {
        feature: "Multiple Inheritance",
        java: "No (through interfaces)",
        cpp: "Yes",
      },
      { feature: "Pointers", java: "No", cpp: "Yes" },
      { feature: "Syntax", java: "Simpler", cpp: "Complex" },
    ],
  },
  {
    type: "table",
    question: "Difference between Python and JavaScript",
    differences: [
      {
        feature: "Typing",
        python: "Dynamically Typed",
        js: "Dynamically Typed",
      },
      {
        feature: "Use Case",
        python: "Data Science, AI, Backend",
        js: "Web Development, Frontend",
      },
      {
        feature: "Syntax",
        python: "Simple, Readable",
        js: "C-like, Less Readable",
      },
      { feature: "Performance", python: "Slower", js: "Faster" },
      { feature: "Learning Curve", python: "Easy", js: "Moderate" },
    ],
  },
  {
    type: "text",
    question: "Which language should I take?",
    answer:
      "The choice of programming language depends on your goals and the type of projects you want to work on. For web development, JavaScript is essential. For data science, Python is highly recommended. For system-level programming, C or C++ is preferred. Each language has its strengths and is suited for different tasks.",
  },
  {
    type: "text",
    question: "What is the best language for web development?",
    answer:
      "JavaScript is the most popular language for web development. It is used for both frontend (React, Angular, Vue) and backend (Node.js) development. HTML and CSS are also essential for web development.",
  },
  {
    type: "text",
    question: "What is the best language for data science?",
    answer:
      "Python is the most widely used language for data science due to its simplicity and the vast number of libraries available (e.g., Pandas, NumPy, SciPy, TensorFlow, and scikit-learn). R is another popular language for statistical analysis and visualization.",
  },
  {
    type: "text",
    question: "Is C++ harder to learn than Python?",
    answer:
      "C++ is generally considered harder to learn than Python due to its complex syntax and manual memory management. Python’s syntax is simpler and more readable, making it an easier language for beginners.",
  },
  {
    type: "text",
    question: "What is the best language for mobile app development?",
    answer:
      "For Android app development, Java and Kotlin are the primary languages. For iOS development, Swift is the preferred language. Cross-platform development can be done using frameworks like React Native (JavaScript) and Flutter (Dart).",
  },
];

const Faqs = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center pt-28">
        <p className="text-4xl font-extrabold text-slate-700">
          Choose <span className="text-red-500">wisely</span>, code{" "}
          <span className="text-red-500">smartly</span>.
        </p>
        <p className="text-xl mt-2 italic">
          The right language unlocks potential.
        </p>
      </div>
      <div className="bg-gray-200 mt-20 p-8 rounded-lg shadow-md w-full max-w-5xl mx-auto">
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-extrabold text-red-500 mb-4">FAQs</h2>
        </div>
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            type={faq.type}
            question={faq.question}
            answer={faq.answer}
            differences={faq.differences}
          />
        ))}
      </div>
      <div className="pb-20"></div>
    </div>
  );
};

export default Faqs;
