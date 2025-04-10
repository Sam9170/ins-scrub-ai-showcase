
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import TestimonialCard from './TestimonialCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingElements from './FloatingElements';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialsSectionProps {
  className?: string;
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'mixed';
  showControls?: boolean;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  className,
  testimonials,
  title = "What Our Clients Say",
  subtitle = "Trusted by leading healthcare providers across the nation",
  variant = 'primary',
  showControls = true
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getGradientClass = () => {
    switch (variant) {
      case 'primary': return 'text-gradient-primary';
      case 'secondary': return 'text-gradient-secondary';
      case 'accent': return 'text-gradient-accent';
      case 'mixed': return 'text-gradient-mixed';
    }
  };

  return (
    <section className={cn("py-20 relative overflow-hidden", className)}>
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {title.split(' ').map((word, i, arr) => (
              i === arr.length - 2 ? 
                <span key={i} className={getGradientClass()}>{word} </span> : 
                <span key={i}>{word} </span>
            ))}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 dark:text-gray-300">
              {subtitle}
            </p>
          )}
        </AnimatedElement>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className="min-w-full px-4"
                >
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    image={testimonial.image}
                    className="h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {showControls && testimonials.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all",
                      activeIndex === index
                        ? `w-4 bg-${variant === 'primary' ? 'insscrub' : variant}-500 dark:bg-${variant === 'primary' ? 'insscrub' : variant}-400`
                        : "bg-gray-300 dark:bg-gray-600"
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="sr-only">Testimonial {index + 1}</span>
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <FloatingElements color={variant} density="low" speed="slow" />
    </section>
  );
};

export default TestimonialsSection;
