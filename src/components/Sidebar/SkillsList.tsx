import React, { useState } from 'react';
import { skillsData } from '../../data/skills';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';

export function SkillsList() {
  const { setActiveSkill } = useSkillsHighlight();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-full md:w-64'} sticky top-0 h-screen overflow-y-auto bg-custom-gray p-6 space-y-6`}>
      <button
        className="md:hidden text-white"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? 'Expand' : 'Collapse'}
      </button>
      <h2 className="text-xl font-bold text-custom-blue mb-4">Skills</h2>
      <div className="space-y-3">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm uppercase text-gray-400 mb-2">{category}</h3>
            <div className="space-y-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="p-2 rounded hover:bg-gray-800 cursor-pointer transition-colors duration-300"
                  onMouseEnter={() => setActiveSkill(skill)}
                  onMouseLeave={() => setActiveSkill(null)}
                >
                  <span className="text-gray-100">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}