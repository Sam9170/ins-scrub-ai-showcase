
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  image?: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  image,
  className,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <AnimatedElement
      className={cn(
        "p-6 bg-white rounded-xl shadow-card border border-gray-100",
        className
      )}
      delay={delay}
    >
      {rating > 0 && (
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
      )}
      
      <blockquote className="text-gray-700 mb-4 italic">"{quote}"</blockquote>
      
      <div className="flex items-center">
        {image && (
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full mr-4 object-cover"
          />
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-gray-500">{role}, {company}</div>
        </div>
      </div>
    </AnimatedElement>
  );
};

export default TestimonialCard;
