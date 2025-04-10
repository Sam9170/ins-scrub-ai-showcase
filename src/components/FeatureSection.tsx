
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import TiltCard from './TiltCard';
import FeatureCard from './FeatureCard';
import FloatingElements from './FloatingElements';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  className?: string;
  title: string;
  subtitle?: string;
  features: Feature[];
  layout?: 'grid' | 'alternating';
  variant?: 'primary' | 'secondary' | 'accent' | 'mixed';
  sectionBadge?: string;
  animated?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  className,
  title,
  subtitle,
  features,
  layout = 'grid',
  variant = 'primary',
  sectionBadge,
  animated = true
}) => {
  const getGradientClass = () => {
    switch (variant) {
      case 'primary': return 'text-gradient-primary';
      case 'secondary': return 'text-gradient-secondary';
      case 'accent': return 'text-gradient-accent';
      case 'mixed': return 'text-gradient-mixed';
    }
  };

  const renderGridLayout = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <AnimatedElement 
            key={index}
            delay={index * 100}
            animationType={animated ? 'fade-up' : 'none'}
          >
            <TiltCard tiltAmount={7} glareOpacity={0.1} disabled={!animated}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </TiltCard>
          </AnimatedElement>
        ))}
      </div>
    );
  };

  const renderAlternatingLayout = () => {
    return (
      <div className="space-y-16">
        {features.map((feature, index) => (
          <AnimatedElement 
            key={index}
            delay={index * 100}
            animationType={animated ? 'fade-up' : 'none'}
            className="flex flex-col md:flex-row md:items-center gap-8"
          >
            {index % 2 === 0 ? (
              <>
                <div className="md:w-1/2">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-card flex justify-center items-center h-52">
                    <div className="text-4xl text-insscrub-500 dark:text-insscrub-400">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="md:w-1/2 md:order-2">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-card flex justify-center items-center h-52">
                    <div className="text-4xl text-teal-500 dark:text-teal-400">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </>
            )}
          </AnimatedElement>
        ))}
      </div>
    );
  };

  return (
    <section className={cn("py-20 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
          {sectionBadge && (
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 dark:bg-insscrub-900/50 text-insscrub-700 dark:text-insscrub-300 text-sm font-medium mb-5">
              {sectionBadge}
            </span>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title.split(' ').map((word, i, arr) => (
              i === arr.length - 1 ? 
                <span key={i} className={getGradientClass()}> {word}</span> : 
                <span key={i}>{word} </span>
            ))}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </AnimatedElement>
        
        {layout === 'grid' ? renderGridLayout() : renderAlternatingLayout()}
      </div>
      
      {animated && <FloatingElements color={variant} density="low" />}
    </section>
  );
};

export default FeatureSection;
