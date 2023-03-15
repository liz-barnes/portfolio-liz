import './App.scss'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './components/HomePage'
import { DevelopmentPage } from './components/DevelopmentPage'
import { DesignPage } from './components/DesignPage'
import { Resume } from './components/Resume'
import { DesignProject } from './components/DesignProject'
import { DevelopmentProject } from './components/DevelopmentProject'

function App() {
  return (
    <>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projectName" element={<DesignProject />} />
          <Route path="/development/:title" element={<DevelopmentProject />} />
        </Routes>
      </div>
    </>
  )
}

export default App
