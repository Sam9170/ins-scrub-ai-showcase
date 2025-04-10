
import React from 'react';
import { cn } from '@/lib/utils';

interface WavePatternProps {
  className?: string;
}

const WavePattern = ({ className }: WavePatternProps) => {
  return (
    <svg 
      className={cn("absolute bottom-0 left-0 w-full opacity-10", className)} 
      viewBox="0 0 1440 320" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fill="currentColor" 
        fillOpacity="1" 
        d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,138.7C1248,139,1344,181,1392,202.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default WavePattern;
