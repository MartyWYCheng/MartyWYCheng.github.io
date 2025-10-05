import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Section } from './Section';
import { educationData } from '../../data/education';

export function Education() {
  return (
    <Section icon={<BookOpen />} title="Education" titleClassName="text-custom-blue">
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 print:border print:border-gray-300 print:bg-white print:p-4 print:mb-3">
            <h3 className="text-xl font-semibold text-blue-400 mb-2 print:text-black print:font-bold print:text-base">{edu.degree}</h3>
            <p className="text-gray-400 mb-1 print:text-gray-700 print:text-sm">{edu.school}</p>
            <p className="text-gray-500 mb-4 print:text-gray-600 print:text-xs">{edu.period}</p>
            
            {/* Achievements Section */}
            {edu.achievements && edu.achievements.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-300 mb-2 print:text-gray-800 print:font-bold print:text-xs">Achievements</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1 print:text-gray-700 print:text-xs">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: achievement }}></li>
                  ))}
                </ul>
              </div>
            )}

            {/* Notable Classes Section */}
            {edu.notableClasses && edu.notableClasses.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-green-400 print:text-gray-600" />
                  <h4 className="text-sm font-medium text-gray-300 print:text-gray-800 print:font-bold print:text-xs">Notable Classes</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.notableClasses.map((className, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 bg-green-900/30 text-green-300 text-xs rounded-full border border-green-700/50 hover:bg-green-900/50 transition-colors duration-200 print:bg-gray-100 print:text-gray-700 print:border-gray-300 print:text-xs"
                    >
                      {className}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}