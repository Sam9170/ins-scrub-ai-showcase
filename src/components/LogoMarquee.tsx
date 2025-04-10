
import React from 'react';
import { cn } from '@/lib/utils';

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoMarqueeProps {
  className?: string;
  logos: Logo[];
  speed?: 'slow' | 'medium' | 'fast';
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  title?: string;
  subtitle?: string;
}

const LogoMarquee: React.FC<LogoMarqueeProps> = ({
  className,
  logos,
  speed = 'medium',
  direction = 'left',
  pauseOnHover = true,
  title,
  subtitle
}) => {
  // Calculate animation duration based on speed
  const getDuration = () => {
    return speed === 'slow' ? '40s' : speed === 'medium' ? '30s' : '20s';
  };

  // Double the logos to create seamless loop
  const doubledLogos = [...logos, ...logos];

  return (
    <div className={cn("py-12", className)}>
      {(title || subtitle) && (
        <div className="text-center mb-8">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
        </div>
      )}
      
      <div 
        className={cn(
          "relative overflow-hidden",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        <div 
          className="flex whitespace-nowrap"
          style={{
            animation: `marquee ${getDuration()} linear infinite ${direction === 'right' ? 'reverse' : ''}`,
          }}
        >
          {doubledLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center mx-8"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                width={logo.width || 120} 
                height={logo.height || 40}
                className="max-h-12 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
