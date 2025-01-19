import React from 'react';
import { Projects } from '../../types/projects';

interface ProjectHeaderProps {
  projects: Projects;
}

export function ExperienceHeader({ projects }: ProjectHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{projects.title}</h1>
      {/*
      <p className="text-xl text-gray-300">{projects.company}</p>
      <p className="text-gray-400">{projects.period}</p>
      */}
    </div>
  );
}