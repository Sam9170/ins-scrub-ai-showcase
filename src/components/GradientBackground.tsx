
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'mixed';
  animated?: boolean;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  children,
  variant = 'primary',
  animated = true
}) => {
  const baseGradientClasses = {
    'primary': 'bg-gradient-to-br from-insscrub-50 to-insscrub-100 dark:from-insscrub-900/50 dark:to-insscrub-800',
    'secondary': 'bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800',
    'accent': 'bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800',
    'mixed': 'bg-gradient-to-br from-insscrub-50 via-teal-50 to-purple-50 dark:from-insscrub-900/50 dark:via-teal-900/50 dark:to-purple-900/50'
  };

  const animationClasses = animated ? 'animate-gradient-background' : '';

  return (
    <div className={cn("relative overflow-hidden", baseGradientClasses[variant], animationClasses, className)}>
      {children}
    </div>
  );
};

export default GradientBackground;
