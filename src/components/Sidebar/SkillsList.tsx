import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data/skills';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export function SkillsList() {
  const { setActiveSkill } = useSkillsHighlight();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>('Specialty/Focus');

  const toggleCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="relative">
      <button
        className="md:hidden text-white fixed top-4 left-4 z-10"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
      </button>
      <aside className={`transition-all duration-300 ${isCollapsed ? 'hidden md:block' : 'block'} md:w-64 sticky top-0 h-screen overflow-y-auto bg-custom-gray pt-16 p-6 space-y-6`}>
        {!isCollapsed && (
          <>
            <h2 className="text-xl font-bold text-custom-blue mb-4">Skills</h2>
            <div className="space-y-3">
              {Object.entries(skillsData).map(([category, skills]) => (
                <div key={category}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm uppercase text-gray-400 mb-2">{category}</h3>
                    <button onClick={() => toggleCategory(category)}>
                      {activeCategory === category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                  {activeCategory === category && (
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
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}