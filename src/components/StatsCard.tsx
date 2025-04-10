
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { InfoIcon } from 'lucide-react';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
  tooltip?: string;
}

const StatsCard = ({ 
  value, 
  label, 
  icon, 
  className, 
  delay = 0,
  tooltip
}: StatsCardProps) => {
  return (
    <AnimatedElement
      className={cn("bg-white rounded-xl p-6 shadow-card", className)}
      delay={delay}
    >
      <div className="flex items-start">
        {icon && <div className="mr-4">{icon}</div>}
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-1">{value}</h3>
          <div className="flex items-center">
            <p className="text-gray-500">{label}</p>
            {tooltip && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-1 inline-flex items-center text-gray-400 hover:text-gray-600">
                    <InfoIcon size={14} />
                    <span className="sr-only">More info</span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default StatsCard;
