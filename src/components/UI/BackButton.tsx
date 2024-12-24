import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
  return (
    <Link 
      to="/" 
      className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-8"
    >
      <ArrowLeft size={20} />
      Back to Resume
    </Link>
  );
}