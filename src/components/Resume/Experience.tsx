import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { Section } from './Section';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function Experience() {
  const { activeSkill } = useSkillsHighlight();

  return (
    <Section icon={<Briefcase />} title="Experience">
      <div className="space-y-6">
        {experienceData.map((exp) => {
          const isHighlighted = activeSkill && exp.skills.includes(activeSkill);
          return (
            <div
              key={exp.id}
              className={`p-4 rounded-lg transition-all duration-300 ${
                isHighlighted
                  ? 'bg-blue-900/20 border border-blue-500/50'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <Link 
                    to={`/experience/${exp.id}`}
                    className="group flex items-center gap-2 text-xl font-semibold text-blue-400 hover:text-blue-300"
                  >
                    {exp.title}
                    <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-500">{exp.period}</span>
              </div>
              <p className="mt-2 text-gray-300">{exp.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
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