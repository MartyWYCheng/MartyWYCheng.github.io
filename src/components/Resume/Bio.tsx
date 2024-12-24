import React from 'react';
import { User, Github, Linkedin, Mail } from 'lucide-react';
import { Section } from './Section';

export function Bio() {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-6 mb-6">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-500">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">John Doe</h1>
          <p className="text-xl text-blue-400 mb-4">Senior Software Engineer</p>
          <div className="flex gap-4">
            <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:john@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <Section icon={<User />} title="About Me">
        <p className="text-gray-300 leading-relaxed">
          Passionate senior software engineer with 7+ years of experience building scalable web applications.
          Specialized in React, TypeScript, and cloud technologies. Strong advocate for clean code and best practices.
          Experienced in leading teams and mentoring junior developers.
        </p>
      </Section>
    </div>
  );
}