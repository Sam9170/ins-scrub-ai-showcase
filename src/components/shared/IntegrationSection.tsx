
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedElement from '@/components/AnimatedElement';

interface Integration {
  name: string;
  description: string;
  logo: string;
}

const integrations: Integration[] = [
  {
    name: "Epic",
    description: "Seamlessly integrate with Epic EHR for streamlined workflows",
    logo: "epic-logo.png"
  },
  {
    name: "Cerner",
    description: "Connect directly with Cerner systems for real-time data exchange",
    logo: "cerner-logo.png"
  },
  {
    name: "Athenahealth",
    description: "Automate data flow between Athenahealth and our platform",
    logo: "athena-logo.png"
  }
];

const IntegrationSection = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedElement className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
            Integrations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Connect with Your Existing Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform seamlessly integrates with major healthcare systems and EHRs to ensure smooth data flow and operational efficiency.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {integrations.map((integration, index) => (
            <AnimatedElement
              key={integration.name}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              delay={index * 100}
            >
              <div className="h-12 w-12 bg-blue-100 rounded-lg mb-4" />
              <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
              <p className="text-gray-600 mb-4">{integration.description}</p>
              <Button variant="link" className="p-0">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntegrationSection;
