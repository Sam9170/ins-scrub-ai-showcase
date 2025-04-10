
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

const StatsCard = ({ value, label, icon, className, delay = 0 }: StatsCardProps) => {
  return (
    <AnimatedElement
      className={cn("bg-white rounded-xl p-6 shadow-card", className)}
      delay={delay}
    >
      <div className="flex items-start">
        {icon && <div className="mr-4">{icon}</div>}
        <div>
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <p className="text-gray-500">{label}</p>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default StatsCard;
