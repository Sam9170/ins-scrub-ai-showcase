
import React from 'react';
import { cn } from '@/lib/utils';

interface CirclePatternProps {
  className?: string;
}

const CirclePattern = ({ className }: CirclePatternProps) => {
  return (
    <svg 
      className={cn("absolute opacity-20", className)} 
      width="600" 
      height="600" 
      viewBox="0 0 600 600" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="300" cy="300" r="200" stroke="currentColor" strokeWidth="50" strokeDasharray="20 20" />
      <circle cx="300" cy="300" r="150" stroke="currentColor" strokeWidth="30" />
      <circle cx="300" cy="300" r="50" stroke="currentColor" strokeWidth="10" />
    </svg>
  );
};

export default CirclePattern;
