import React from "react";

const Toolbar = ({ language, onLanguageChange, onSave, onReset, onThemeToggle }) => {
  return (
    <div className="p-4 bg-gray-700 text-white flex justify-between items-center">
      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="bg-gray-900 text-white p-2"
      >
        <option value="JS">JavaScript</option>
        <option value="XML">XML</option>
      </select>
      <div>
        <button onClick={onSave} className="bg-blue-500 py-2 px-4 mx-2 rounded">
          Save
        </button>
        <button onClick={onReset} className="bg-red-500 py-2 px-4 rounded">
          Reset
        </button>
      </div>
      <button onClick={onThemeToggle} className="bg-gray-500 py-2 px-4 rounded">
        Toggle Theme
      </button>
    </div>
  );
};

export default Toolbar;
