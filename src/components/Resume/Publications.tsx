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
          <div key={pubs.title} className="p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 print:border print:border-gray-300 print:bg-white print:p-3 print:mb-3">
            <a 
              href={pubs.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center gap-2 text-xl font-semibold text-blue-400 hover:text-blue-300 print:text-black print:font-bold print:text-base print:no-underline"
            >
              {pubs.title}
              <ArrowRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
            </a>
            <p className="text-gray-400 print:text-gray-700 print:text-sm">{pubs.journal}</p>
            <p className="text-gray-500 text-sm print:text-gray-600 print:text-xs">
              DOI: <span className="font-mono">{pubs.doi}</span>
            </p>
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