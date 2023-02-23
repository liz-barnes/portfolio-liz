import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DevelopmentPage } from './components/DevelopmentPage';
import { DesignPage } from './components/DesignPage';
import { Resume } from './components/Resume';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
