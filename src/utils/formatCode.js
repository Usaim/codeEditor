export const formatCode = (code, language) => {
    if (language === "JS") {
      return code.replace(/\s{2,}/g, " ").trim(); // Simplistic formatting for JS
    }
    if (language === "XML") {
      return code.replace(/>\s*</g, ">\n<").trim(); // Basic formatting for XML
    }
    return code;
  };
  