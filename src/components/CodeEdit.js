import React, { useEffect, useRef } from "react";
import { formatCode } from "../utils/formatCode";

const CodeEdit = ({ code, setCode, language, onSave }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        onSave();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSave]);

  const handleFormat = () => {
    const formattedCode = formatCode(code, language);
    setCode(formattedCode);
  };

  return (
    <div className="relative p-4">
      <textarea
        ref={editorRef}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full h-screen text-sm font-mono p-4 bg-gray-900 text-white"
        spellCheck="false"
        placeholder="Write your code here..."
      />
      <button
        onClick={handleFormat}
        className="absolute top-2 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
      >
        Format Code
      </button>
    </div>
  );
};

export default CodeEdit;
