import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useNavigate } from "react-router-dom";

const Code = ({ children, language }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(
      `/ide?code=${encodeURIComponent(children)}&language=${encodeURIComponent(
        language
      )}`
    );
  };

  return (
    <div className="relative mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-52 my-6">
      <div className="border border-gray-800 rounded-md">
        <SyntaxHighlighter style={vs2015}>{children}</SyntaxHighlighter>
        <button
          onClick={clickHandler}
          className="absolute bottom-[10px] right-[10px] bg-red-500 font-bold py-3 px-6 text-white rounded-md hover:bg-red-600"
        >
          Try it yourself
        </button>
      </div>
    </div>
  );
};

export default Code;
