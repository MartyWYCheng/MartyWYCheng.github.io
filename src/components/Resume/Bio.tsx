import React from 'react';
import { User, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './Section';

export function Bio() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src="assets/img/profile_morgan_bw.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Marty Cheng</h1>
          <p className="text-xl text-blue-400 mb-4">PhD Candidate | Graduate Researcher</p>
          <div className="flex gap-4">
            <a href="https://martywycheng.github.io/" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/wen-yu-cheng/" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:marty.chengwy@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <Section icon={<User />} title="About Me">
        <p className="text-gray-300 leading-relaxed">
        Versatile researcher with over 10 years of experience in rapid prototyping, prosthetics, leadership, 
        academic/grant writing, and public speaking. Great passion for finding creative solutions to critical 
        challenges. Thrives in all aspects of an interdisciplinary engineering project and excels in 
        communicating complex ideas. Highly interested in AI and data ana-lytics in medical and Human-Robot 
        Interaction (HRI) applications.
        </p>
      </Section>
    </div>
  );
}