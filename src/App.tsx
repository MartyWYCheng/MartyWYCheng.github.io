import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume } from './pages/Resume';
import { ExperienceDetail } from './pages/ExperienceDetail';
import { Projects } from './components/Projects/Projects';
import { ProjectDetails } from './pages/ProjectDetails';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}