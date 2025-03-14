import React from 'react';
//import { UserRoundPen } from 'lucide-react';
import { BookCheck, ArrowRight } from 'lucide-react';
//import { MdOutlineBookmarkAdded } from "react-icons/md";
//import { Link } from 'react-router-dom';
import { Section } from './Section';
import { publicationsData } from '../../data/publications';

export function Publications() {
  return (
    <Section icon={<BookCheck />} title="Publications" titleClassName="text-custom-blue">
      <div className="space-y-4">
        {publicationsData.map((pubs) => (
          <div key={pubs.title} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300">
            <a 
              href={pubs.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 text-xl font-semibold text-blue-400 hover:text-blue-300"
            >
              {pubs.title}
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <p className="text-gray-400">{pubs.journal}</p>
            {/*
            <p className="text-gray-500">{pubs.date}</p>
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