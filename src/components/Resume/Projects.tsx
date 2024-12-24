import React from 'react';
import { Code2 } from 'lucide-react';
import { Section } from './Section';
import { projectsData } from '../../data/projects';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function Projects() {
  const { activeSkill } = useSkillsHighlight();

  return (
    <Section icon={<Code2 />} title="Projects">
      <div className="space-y-6">
        {projectsData.map((project) => {
          const isHighlighted = activeSkill && project.skills.includes(activeSkill);
          return (
            <div
              key={project.title}
              className={`p-4 rounded-lg transition-all duration-300 ${
                isHighlighted
                  ? 'bg-blue-900/20 border border-blue-500/50'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
            >
              <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs px-2 py-1 rounded ${
                      skill === activeSkill
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-gray-300'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}