import React from 'react';
import { User, Github, Linkedin, Mail } from 'lucide-react';
import { FaGoogleScholar } from "react-icons/fa6"; // Import Google icon
import { Section } from './Section';

export function Bio() {
  return (
    <div className="mb-8 pt-50 md:pt-0">
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-custom-blue">
          <img
            src="https://github.com/MartyWYCheng/MartyWYCheng.github.io/blob/main/public/img/profile_bw.jpg?raw=true"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-2">Marty Cheng</h1>
          <p className="text-xl text-custom-blue mb-4">PhD Candidate | Graduate Researcher</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/wen-yu-cheng/" className="text-custom-blue hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} />
            </a>
            <a href="https://scholar.google.com/citations?user=qc-hbyIAAAAJ&hl=en" className="text-custom-blue hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGoogleScholar size={20} />
            </a>
            <a href="https://github.com/MartyWYCheng" className="text-custom-blue hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Github size={20} />
            </a>
            <a href="mailto:marty.chengwy@gmail.com" className="text-custom-blue hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <Section icon={<User />} title="About Me" titleClassName="text-custom-blue">
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