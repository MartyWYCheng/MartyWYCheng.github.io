import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight, ChevronDown, ChevronUp, Wrench } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Section } from './Section';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function Projects() {
  const { activeSkill } = useSkillsHighlight();
  const [expandedSkills, setExpandedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleExpandSkills = (event: CustomEvent) => {
      const { id } = event.detail;
      if (projectsData.some(proj => proj.id === id)) {
        setExpandedSkills(prev => new Set(prev).add(id));
      }
    };

    window.addEventListener('expandSkills', handleExpandSkills as EventListener);
    return () => window.removeEventListener('expandSkills', handleExpandSkills as EventListener);
  }, []);

  const toggleSkills = (projId: string) => {
    setExpandedSkills(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projId)) {
        newSet.delete(projId);
      } else {
        newSet.add(projId);
      }
      return newSet;
    });
  };

  return (
    <Section icon={<Code />} title="Projects" titleClassName="text-custom-blue">
      <div className="space-y-6">
        {projectsData.map((proj) => {
          const isHighlighted = activeSkill && proj.skills.includes(activeSkill);
          const isSkillsExpanded = expandedSkills.has(proj.id);
          return (
            <div
              key={proj.id}
              className={`project-item p-4 rounded-lg transition-all duration-300 ${
                isHighlighted
                  ? 'bg-blue-900/20 border border-blue-500/50'
                  : 'bg-gray-800/50 hover:bg-gray-800'
              }`}
              data-skills={`Skills: ${proj.skills.join(', ')}`}
              data-project-id={proj.id}
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
              
              {/* Skills Section */}
              <div className="mt-4 skills-section print:hidden">
                <button
                  onClick={() => toggleSkills(proj.id)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-300 transition-colors duration-200"
                >
                  <Wrench size={16} />
                  <span>Skills ({proj.skills.length})</span>
                  {isSkillsExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                {isSkillsExpanded && (
                  <div className="mt-3 flex flex-wrap gap-2 animate-in slide-in-from-top-2 duration-200 skills-container">
                    {proj.skills.map((skill) => (
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