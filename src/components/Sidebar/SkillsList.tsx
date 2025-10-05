import React, { useState, useEffect } from 'react';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/projects';
import { useSkillsHighlight } from '../../hooks/useSkillsHighlight';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

export function SkillsList() {
  const { activeSkill, setActiveSkill, scrollToSkill, setScrollToSkill } = useSkillsHighlight();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>('Specialty/Focus');
  const [persistentSkill, setPersistentSkill] = useState<string | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsCollapsed(mediaQuery.matches);
    const handleResize = () => setIsCollapsed(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  useEffect(() => {
    if (scrollToSkill) {
      // Find the first experience or project that contains this skill
      const firstExperience = experienceData.find(exp => exp.skills.includes(scrollToSkill));
      const firstProject = projectsData.find(proj => proj.skills.includes(scrollToSkill));
      
      let targetElement = null;
      let targetId = null;
      
      // Determine which comes first (experience or project)
      if (firstExperience && firstProject) {
        // Find both elements and compare their positions
        const expElement = document.querySelector(`[data-experience-id="${firstExperience.id}"]`);
        const projElement = document.querySelector(`[data-project-id="${firstProject.id}"]`);
        
        if (expElement && projElement) {
          const expRect = expElement.getBoundingClientRect();
          const projRect = projElement.getBoundingClientRect();
          targetElement = expRect.top < projRect.top ? expElement : projElement;
          targetId = expRect.top < projRect.top ? firstExperience.id : firstProject.id;
        } else if (expElement) {
          targetElement = expElement;
          targetId = firstExperience.id;
        } else if (projElement) {
          targetElement = projElement;
          targetId = firstProject.id;
        }
      } else if (firstExperience) {
        targetElement = document.querySelector(`[data-experience-id="${firstExperience.id}"]`);
        targetId = firstExperience.id;
      } else if (firstProject) {
        targetElement = document.querySelector(`[data-project-id="${firstProject.id}"]`);
        targetId = firstProject.id;
      }
      
      if (targetElement) {
        // Scroll to the element
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Auto-expand the skills section after scrolling
        setTimeout(() => {
          // Trigger expansion by dispatching a custom event
          const expandEvent = new CustomEvent('expandSkills', { 
            detail: { id: targetId, skill: scrollToSkill } 
          });
          window.dispatchEvent(expandEvent);
        }, 500);
      }
      
      setScrollToSkill(null);
    }
  }, [scrollToSkill, setScrollToSkill]);

  const toggleCategory = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  const handleSkillClick = (skill: string) => {
    // Toggle persistent highlighting: if same skill is clicked, turn off highlighting
    if (persistentSkill === skill) {
      setPersistentSkill(null);
      setActiveSkill(null);
    } else {
      // Set new persistent skill and scroll to it
      setPersistentSkill(skill);
      setActiveSkill(skill);
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
                          className={`p-2 rounded cursor-pointer transition-colors duration-300 ${
                            activeSkill === skill 
                              ? 'bg-blue-600 text-white' 
                              : 'hover:bg-gray-800'
                          }`}
                          onMouseEnter={() => setActiveSkill(skill)}
                          onMouseLeave={() => setActiveSkill(persistentSkill)}
                          onClick={() => handleSkillClick(skill)}
                        >
                          <span className={activeSkill === skill ? 'text-white' : 'text-gray-100'}>{skill}</span>
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