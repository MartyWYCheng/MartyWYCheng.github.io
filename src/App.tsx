import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Resume } from './pages/Resume';
import { ExperienceDetail } from './pages/ExperienceDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/experience/:id" element={<ExperienceDetail />} />
      </Routes>
    </Router>
  );
}