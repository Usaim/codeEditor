import { useState } from "react";

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState("bg-gray-900");

  const toggleTheme = () => {
    setTheme(theme === "bg-gray-900" ? "bg-white" : "bg-gray-900");
  };

  return {
    theme,
    toggleTheme,
  };
};
