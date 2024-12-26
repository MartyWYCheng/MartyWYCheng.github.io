import React from 'react';

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  titleClassName?: string; // Add this line
}

export function Section({ icon, title, children, titleClassName }: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2">
        <span className="text-blue-400">{icon}</span>
        <h2 className={`text-2xl font-bold ${titleClassName}`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}