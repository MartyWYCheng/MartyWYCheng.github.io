import React from 'react';
import { Experience } from '../../types/experience';

interface ExperienceHeaderProps {
  experience: Experience;
}

export function ExperienceHeader({ experience }: ExperienceHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">{experience.title}</h1>
      <p className="text-xl text-gray-300">{experience.company}</p>
      <p className="text-gray-400">{experience.period}</p>
    </div>
  );
}