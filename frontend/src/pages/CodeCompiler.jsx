import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import EditorComponent from "../components/EditorComponent";

const CodeCompiler = () => {
  const runCodeRef = useRef(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCode =
    queryParams.get("code") ||
    `#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}`;
  const initialLanguage = queryParams.get("language") || "C";

  const [language, setLanguage] = useState(initialLanguage);
  const [filename, setFilename] = useState("main.c");
  const [codeTemplate, setCodeTemplate] = useState(initialCode);

  useEffect(() => {
    const languageMapping = {
      C: "main.c",
      "C++": "main.cpp",
      Java: "HelloWorld.java",
      Python: "main.py",
      Javascript: "main.js",
    };
    setFilename(languageMapping[initialLanguage] || "main.c");
  }, [initialLanguage]);

  const handleRun = () => {
    if (runCodeRef.current) {
      runCodeRef.current();
    }
  };

  const handleLanguageChange = (language, filename, template) => {
    setLanguage(language);
    setFilename(filename);
    setCodeTemplate(template);
  };

  return (
    <div className="flex flex-col h-[560px]">
      <div className="flex flex-grow">
        <Sidebar
          initialLanguage={initialLanguage}
          onLanguageChange={handleLanguageChange}
        />
        <main className="flex-grow">
          <EditorComponent
            onRun={(run) => (runCodeRef.current = run)}
            language={language}
            setLanguage={setLanguage}
            filename={filename}
            codeTemplate={codeTemplate}
            handleRun={handleRun}
          />
        </main>
      </div>
    </div>
  );
};

export default CodeCompiler;
