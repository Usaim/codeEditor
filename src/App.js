// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import CodeEdit from "./components/CodeEdit";
import { useCodeManager } from "./hooks/useCodeManager";
import { useThemeSwitcher } from "./hooks/useThemeSwitcher";

const App = () => {
  const {
    currentFile,
    code,
    language,
    setLanguage,
    createNewFile,
    deleteFile,
    saveCode,
    resetCode,
    setCode,
  } = useCodeManager();

  const { theme, toggleTheme } = useThemeSwitcher();

  return (
    <div className={`min-h-screen ${theme}`}>
      <div className="flex">
        <Sidebar
          files={currentFile}
          onNewFile={createNewFile}
          onDeleteFile={deleteFile}
          onSelectFile={setCode}
        />
        <div className="flex-1">
          <Toolbar
            language={language}
            onLanguageChange={setLanguage}
            onSave={saveCode}
            onReset={resetCode}
            onThemeToggle={toggleTheme}
          />
          <CodeEdit
            code={code}
            setCode={setCode}
            language={language}
            onSave={saveCode}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

