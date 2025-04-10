
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TiltCardProps {
  className?: string;
  children: React.ReactNode;
  tiltAmount?: number;
  glareOpacity?: number;
  perspective?: number;
  glareColor?: string;
  scale?: number;
  disabled?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({
  className,
  children,
  tiltAmount = 15,
  glareOpacity = 0.2,
  perspective = 1000,
  glareColor = "rgba(255, 255, 255, 0.5)",
  scale = 1.02,
  disabled = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (!disabled) setIsHovering(true);
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setPosition({ x: 0, y: 0 });
      setIsHovering(false);
    }
  };

  return (
    <div
      ref={cardRef}
      className={cn("relative transition-transform duration-200 ease-out", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovering 
          ? `perspective(${perspective}px) rotateX(${position.y * -tiltAmount}deg) rotateY(${position.x * tiltAmount}deg) scale(${scale})` 
          : `perspective(${perspective}px) rotateX(0) rotateY(0) scale(1)`,
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      {children}
      
      {isHovering && !disabled && (
        <div 
          className="absolute inset-0 rounded-inherit overflow-hidden pointer-events-none"
          style={{
            background: `linear-gradient(${135 + position.x * 25}deg, ${glareColor} 0%, transparent 80%)`,
            opacity: glareOpacity,
            mixBlendMode: 'overlay',
            transform: 'translateZ(1px)',
          }}
        />
      )}
    </div>
  );
};

export default TiltCard;
