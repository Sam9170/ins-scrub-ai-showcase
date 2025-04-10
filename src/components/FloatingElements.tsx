
import React from 'react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent' | 'mixed';
  density?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  uniqueId?: string;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({
  className,
  color = 'primary',
  density = 'medium',
  speed = 'medium',
  uniqueId = 'floating-elements',
}) => {
  // Generate a random number of elements based on density
  const elementCount = 
    density === 'low' ? 5 :
    density === 'medium' ? 10 :
    15;

  // Determine animation duration based on speed
  const durationBase = 
    speed === 'slow' ? 20 :
    speed === 'medium' ? 15 :
    10;

  // Get color class based on color prop
  const getColorClass = (index: number) => {
    if (color === 'mixed') {
      const colors = ['bg-insscrub-200/20', 'bg-teal-200/20', 'bg-purple-200/20'];
      return colors[index % colors.length];
    }
    
    return color === 'primary' ? 'bg-insscrub-200/20' :
           color === 'secondary' ? 'bg-teal-200/20' :
           'bg-purple-200/20';
  };

  const getBorderColorClass = (index: number) => {
    if (color === 'mixed') {
      const colors = ['border-insscrub-300/30', 'border-teal-300/30', 'border-purple-300/30'];
      return colors[index % colors.length];
    }
    
    return color === 'primary' ? 'border-insscrub-300/30' :
           color === 'secondary' ? 'border-teal-300/30' :
           'border-purple-300/30';
  };

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none z-0", className)}>
      {Array.from({ length: elementCount }).map((_, index) => {
        // Calculate random positions, sizes and delays
        const size = Math.floor(Math.random() * 80) + 40; // 40px to 120px
        const posX = Math.floor(Math.random() * 100);
        const posY = Math.floor(Math.random() * 100);
        const duration = durationBase + Math.floor(Math.random() * 10);
        const delay = Math.floor(Math.random() * 5);
        const isCircle = Math.random() > 0.5;
        
        return (
          <div
            key={`${uniqueId}-${index}`}
            className={cn(
              "absolute opacity-70 dark:opacity-30 backdrop-blur-3xl border",
              getBorderColorClass(index),
              getColorClass(index),
              isCircle ? "rounded-full" : "rounded-xl"
            )}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${posX}%`,
              top: `${posY}%`,
              animation: `float ${duration}s ease-in-out infinite`,
              animationDelay: `${delay}s`,
              transform: `rotate(${Math.floor(Math.random() * 360)}deg)`,
            }}
          />
        );
      })}
    </div>
  );
};

export default FloatingElements;
