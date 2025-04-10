
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-right' | 'zoom-in' | 'none';
  delay?: number;
}

const AnimatedElement = ({
  children,
  className,
  animationType = 'fade-up',
  delay = 0,
}: AnimatedElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClass = () => {
    if (animationType === 'fade-up') {
      return isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10';
    }
    if (animationType === 'fade-right') {
      return isVisible
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 translate-x-10';
    }
    if (animationType === 'zoom-in') {
      return isVisible
        ? 'opacity-100 scale-100'
        : 'opacity-0 scale-95';
    }
    return '';
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        animationType !== 'none' && animationClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
