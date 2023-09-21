import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { DevelopmentPage } from './components/DevelopmentPage'
import { DesignPage } from './components/DesignPage'
import { DesignProject } from './components/DesignProject'
import { DevelopmentProject } from './components/DevelopmentProject'
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="page-container" id={theme}>
        <Routes>
          <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/design/:title" element={<DesignProject />} />
          <Route path="/development/:title" element={<DevelopmentProject />} />
        </Routes>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
