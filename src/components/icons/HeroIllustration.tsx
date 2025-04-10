
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroIllustrationProps {
  className?: string;
}

const HeroIllustration = ({ className }: HeroIllustrationProps) => {
  return (
    <div className={cn("relative h-full w-full", className)}>
      {/* Main circles */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-insscrub-500 rounded-full opacity-80 animate-float"></div>
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-teal-500 rounded-full opacity-80 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-purple-500 rounded-full opacity-80 animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Document/card elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-12 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-full h-6 bg-insscrub-200 rounded-t-lg"></div>
        <div className="p-2">
          <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      
      <div className="absolute bottom-1/4 left-1/3 w-40 h-28 bg-white rounded-lg shadow-lg transform -rotate-6 animate-float" style={{ animationDelay: '0.8s' }}>
        <div className="w-full h-6 bg-teal-200 rounded-t-lg"></div>
        <div className="p-2">
          <div className="w-1/2 h-3 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-full h-3 bg-gray-200 rounded-full mb-2"></div>
          <div className="w-3/4 h-3 bg-gray-200 rounded-full"></div>
        </div>
      </div>
      
      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="40%" y1="30%" x2="60%" y2="40%" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="6 4" />
        <line x1="60%" y1="40%" x2="40%" y2="60%" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="6 4" />
        <line x1="40%" y1="60%" x2="30%" y2="70%" stroke="#CBD5E0" strokeWidth="2" strokeDasharray="6 4" />
      </svg>
      
      {/* Small decorative elements */}
      <div className="absolute top-1/5 right-1/5 w-6 h-6 bg-yellow-400 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-1/5 right-1/3 w-4 h-4 bg-red-400 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-5 h-5 bg-green-400 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default HeroIllustration;
