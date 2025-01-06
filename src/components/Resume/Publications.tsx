import React from 'react';
import { BookOpen } from 'lucide-react';
import { Section } from './Section';
import { publicationsData } from '../../data/publications';

export function Publications() {
  return (
    <Section icon={<BookOpen />} title="Publications" titleClassName="text-custom-blue">
      <div className="space-y-4">
        {publicationsData.map((pubs) => (
          <div key={pubs.title} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-blue-400">{pubs.title}</h3>
            <p className="text-gray-400">{pubs.journal}</p>
            <p className="text-gray-500">{pubs.date}</p>
            {/*
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
            {pubs.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
            </ul>
            */}
          </div>
        ))}
      </div>
    </Section>
  );
}