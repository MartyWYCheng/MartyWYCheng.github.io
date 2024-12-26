import React from 'react';
import { BookOpen } from 'lucide-react';
import { Section } from './Section';
import { educationData } from '../../data/education';

export function Education() {
  return (
    <Section icon={<BookOpen />} title="Education" titleClassName="text-custom-blue">
      <div className="space-y-4">
        {educationData.map((edu) => (
          <div key={edu.degree} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
            <p className="text-gray-400">{edu.school}</p>
            <p className="text-gray-500">{edu.period}</p>
            {edu.achievements && (
              <p className="mt-2 text-gray-300">{edu.achievements}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}