
import React from 'react';
import { ArrowRight, ArrowLeft, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedElement from '@/components/AnimatedElement';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "This platform has completely transformed how we handle our healthcare documentation. The accuracy is remarkable.",
    author: "Dr. Sarah Johnson",
    role: "Chief Medical Officer",
    company: "HealthCare Plus"
  },
  {
    quote: "The automated claims processing has cut our processing time by 75%. It's been a game-changer for our practice.",
    author: "Michael Chen",
    role: "Operations Director",
    company: "Pacific Medical Group"
  },
  {
    quote: "Integration was seamless, and the support team has been exceptional. Highly recommend!",
    author: "Emily Rodriguez",
    role: "IT Manager",
    company: "MedTech Solutions"
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <AnimatedElement className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        <Quote className="h-12 w-12 text-blue-500 mb-6 opacity-20" />
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
            {testimonials[currentIndex].quote}
          </p>
          <div>
            <p className="font-semibold text-gray-900">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-gray-600">
              {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
            </p>
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default TestimonialSlider;
