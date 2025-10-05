import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, ChevronDown, ChevronUp, Code } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { Section } from './Section';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function Experience() {
  const { activeSkill } = useSkillsHighlight();
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleExpandSkills = (event: CustomEvent) => {
      const { id } = event.detail;
      if (experienceData.some(exp => exp.id === id)) {
        setExpandedSkills(prev => new Set(prev).add(id));
      }
    };

    window.addEventListener('expandSkills', handleExpandSkills as EventListener);
    return () => window.removeEventListener('expandSkills', handleExpandSkills as EventListener);
  }, []);

  const toggleSkills = (expId: string) => {
    setExpandedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(expId)) {
        newSet.delete(expId);
      } else {
        newSet.add(expId);
      }
      return newSet;
    });
  };

  return (
    <Section icon={<Briefcase />} title="Experience" titleClassName="text-custom-blue">
      <div className="space-y-6">
        {experienceData.map((exp) => {
          const isHighlighted = activeSkill && exp.skills.includes(activeSkill);
          const isSkillsExpanded = expandedSkills.has(exp.id);
          return (
            <div
              key={exp.id}
              className={`experience-item p-4 rounded-lg transition-all duration-300 ${
                isHighlighted
                  ? 'bg-blue-900/20 border border-blue-500/50'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
              data-skills={`Skills: ${exp.skills.join(', ')}`}
              data-experience-id={exp.id}
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
              <p className="mt-2 text-gray-300 print:hidden" dangerouslySetInnerHTML={{ __html: exp.summary }}></p>
              
              {/* Achievements Section - Only visible in print */}
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mt-4 achievements-section hidden print:block">
                  <h4 className="text-sm font-medium text-gray-300 mb-2 print:text-gray-800 print:font-bold print:text-xs">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 print:text-gray-700 print:text-xs">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Skills Section */}
              <div className="mt-4 skills-section print:hidden">
                <button
                  onClick={() => toggleSkills(exp.id)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <Code size={16} />
                  <span>Skills ({exp.skills.length})</span>
                  {isSkillsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {isSkillsExpanded && (
                  <div className="mt-3 flex flex-wrap gap-2 animate-in slide-in-from-top-2 duration-200 skills-container">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        data-skill={skill}
                        className={`text-xs px-2 py-1 rounded transition-colors duration-200 ${
                          skill === activeSkill
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}