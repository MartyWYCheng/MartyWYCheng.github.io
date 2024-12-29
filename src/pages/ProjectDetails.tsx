import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../data/projects';

export function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-white">{project.title}</h1>
      <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: project.description }}></p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span key={skill} className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
