
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  iconClassName?: string;
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  iconClassName,
  delay = 0
}: FeatureCardProps) => {
  return (
    <AnimatedElement 
      className={cn(
        "p-6 bg-white rounded-xl shadow-card border border-gray-100 hover:border-insscrub-200 transition-all", 
        className
      )}
      delay={delay}
    >
      <div className={cn(
        "w-12 h-12 flex items-center justify-center rounded-lg mb-4",
        iconClassName || "bg-insscrub-100 text-insscrub-600"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedElement>
  );
};

export default FeatureCard;
