import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';

export function Projects() {
  return (
    <div className="space-y-6">
      {projectsData.map((project) => (
        <div key={project.id} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
          <Link 
            to={`/projects/${project.id}`}
            className="group flex items-center gap-2 text-xl font-semibold text-blue-400 hover:text-blue-300"
          >
            {project.title}
          </Link>
          <p className="text-gray-300 mt-2" dangerouslySetInnerHTML={{ __html: project.description }}></p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
