
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedWavesProps {
  className?: string;
  color?: string;
  waveCount?: number;
  speed?: 'slow' | 'medium' | 'fast';
}

const AnimatedWaves: React.FC<AnimatedWavesProps> = ({
  className,
  color = 'currentColor',
  waveCount = 3,
  speed = 'medium',
}) => {
  // Calculate animation duration based on speed
  const getDuration = (index: number) => {
    const baseSpeed = speed === 'slow' ? 15 : speed === 'medium' ? 10 : 5;
    return baseSpeed + index * 2;
  };

  // Calculate wave opacity
  const getOpacity = (index: number) => {
    const baseOpacity = 0.2;
    return baseOpacity - (index * 0.05);
  };

  return (
    <div className={cn("absolute bottom-0 left-0 right-0 h-24 overflow-hidden", className)}>
      {Array.from({ length: waveCount }).map((_, index) => (
        <svg 
          key={`wave-${index}`}
          className={cn(
            "absolute bottom-0 w-full h-full",
            `animate-wave-${index + 1}`
          )}
          style={{
            animation: `waveAnimation ${getDuration(index)}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
            opacity: getOpacity(index)
          }}
          viewBox="0 0 1440 320" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill={color}
            fillOpacity={getOpacity(index)}
            d={`M0,${64 + index * 32} C172.8,${128 + index * 16} 307.2,${160 - index * 16} 432,${144 + index * 24} C561.6,${128 - index * 32} 691.2,${64 + index * 20} 864,${80 - index * 16} C1036.8,${96 + index * 24} 1209.6,${112 - index * 16} 1440,${90 + index * 20} L1440,320 L0,320 Z`}
          />
        </svg>
      ))}
    </div>
  );
};

export default AnimatedWaves;
