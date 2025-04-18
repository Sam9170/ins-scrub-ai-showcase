
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  isPopular,
  className
}: PricingCardProps) => {
  return (
    <div className={cn(
      "relative p-6 bg-white rounded-xl shadow-lg border transition-all",
      isPopular ? "border-blue-500 scale-105" : "border-gray-200",
      className
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-gray-600">/month</span>}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-3" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className="w-full" variant={isPopular ? "default" : "outline"}>
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
