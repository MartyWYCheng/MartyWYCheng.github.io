import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume } from './pages/Resume';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { SkillsList } from './components/Sidebar/SkillsList';

export default function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true); // Set initial state to true

  return (
    <Router>
      <div className="flex">
        <SkillsList isCollapsed={isSidebarCollapsed} setIsCollapsed={setIsSidebarCollapsed} />
        <div className={`flex-1 transition-all duration-300 ${isSidebarCollapsed ? 'pl-4' : 'md:pl-64'}`}>
          <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/experience/:id" element={<ExperienceDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}