import React from 'react';
import { Experience } from '../../types/experience';

interface ExperienceContentProps {
  experience: Experience;
}

export function ExperienceContent({ experience }: ExperienceContentProps) {
  return (
    <div className="space-y-6">
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Overview</h2>
        <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: experience.description }}></p>
      </section>
{/*
     <section>
        <h2 className="text-xl font-semibold text-white mb-3">Key Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {experience.responsibilities?.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </section>
*/}
      {experience.achievements && (
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">Key Achievements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {experience.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>
      )}
      
      <section>
        <h2 className="text-xl font-semibold text-white mb-3">Skills Used</h2>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>     
    </div>
  );
}