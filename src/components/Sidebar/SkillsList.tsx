import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data/skills';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export function SkillsList() {
  const { setActiveSkill, scrollToSkill, setScrollToSkill } = useSkillsHighlight();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>('Specialty/Focus');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsCollapsed(mediaQuery.matches);
    const handleResize = () => setIsCollapsed(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (scrollToSkill) {
      // Find all elements containing the skill text
      const elements = Array.from(document.querySelectorAll(`[data-skill="${scrollToSkill}"]`));
      if (elements.length > 0) {
        // Sort elements by their position in the document
        const sortedElements = elements.sort((a, b) => {
          const aRect = a.getBoundingClientRect();
          const bRect = b.getBoundingClientRect();
          return aRect.top - bRect.top;
        });
        // Scroll to the title of the first instance
        const firstElement = sortedElements[0].closest('.experience-item, .project-item');
        if (firstElement) {
          firstElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setScrollToSkill(null);
      }
    }
  }, [scrollToSkill, setScrollToSkill]);

  const toggleCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const handleSkillClick = (skill: string) => {
    if (scrollToSkill !== skill) {
      setScrollToSkill(skill);
    }
    // Collapse the sidebar on mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
      setIsCollapsed(true);
    }
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
                    <button className="text-gray-400" onClick={() => toggleCategory(category)}>
                      {activeCategory === category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                  {activeCategory === category && (
                    <div className="space-y-2">
                      {skills.map((skill) => (
                        <div
                          key={skill}
                          id={skill}
                          className="p-2 rounded hover:bg-gray-800 cursor-pointer transition-colors duration-300"
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(null)}
                          onClick={() => handleSkillClick(skill)}
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