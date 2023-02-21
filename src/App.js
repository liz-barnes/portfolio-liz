import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { DevelopmentPage } from './components/DevelopmentPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/development" element={<DevelopmentPage />} />
      </Routes>
    </>
  );
}

export default App;
