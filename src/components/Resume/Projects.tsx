import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Section } from './Section';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function Projects() {
  const { activeSkill } = useSkillsHighlight();

  return (
    <Section icon={<Code />} title="Projects" titleClassName="text-custom-blue">
      <div className="space-y-6">
        {projectsData.map((proj) => {
          const isHighlighted = activeSkill && proj.skills.includes(activeSkill);
          return (
            <div
              key={proj.id}
              className={`p-4 rounded-lg transition-all duration-300 ${
                isHighlighted
                  ? 'bg-blue-900/20 border border-blue-500/50'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <Link 
                    to={`/projects/${proj.id}`}
                    className="group flex items-center gap-2 text-xl font-semibold text-blue-400 hover:text-blue-300"
                  >
                    {proj.title}
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/*<p className="text-gray-400">{proj.company}</p>*/}
                </div>
                {/*<span className="text-gray-500">{proj.period}</span>*/}
              </div>
              <p className="mt-2 text-gray-300" dangerouslySetInnerHTML={{ __html: proj.summary }}></p>
              <div className="mt-3 flex flex-wrap gap-2">
                {proj.skills.map((skill) => (
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