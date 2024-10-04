import { useState } from "react";

export const useCodeManager = () => {
  const [files, setFiles] = useState(["newFile.js"]);
  const [currentFile, setCurrentFile] = useState("newFile.js");
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("JS");

  const createNewFile = () => {
    const newFile = `newFile-${files.length + 1}.js`;
    setFiles([...files, newFile]);
    setCurrentFile(newFile);
    setCode("");
  };

  const deleteFile = (fileName) => {
    const updatedFiles = files.filter((file) => file !== fileName);
    setFiles(updatedFiles);
    if (currentFile === fileName) {
      setCurrentFile(updatedFiles[0] || "");
      setCode("");
    }
  };

  const saveCode = () => {
    localStorage.setItem(currentFile, JSON.stringify({ code, language }));
    alert("Code saved");
  };

  const resetCode = () => {
    setCode("");
  };

  return {
    files,
    currentFile,
    code,
    language,
    setLanguage,
    createNewFile,
    deleteFile,
    saveCode,
    resetCode,
    setCode,
  };
};
