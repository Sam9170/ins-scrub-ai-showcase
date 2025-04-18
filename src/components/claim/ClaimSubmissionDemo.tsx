
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from '../AnimatedElement';

const ClaimSubmissionDemo = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      toast({
        title: `Step ${step} Completed`,
        description: "Moving to next step...",
        duration: 2000,
      });
    } else {
      setStep(1);
      toast({
        title: "Demo Reset",
        description: "Starting over...",
        duration: 2000,
      });
    }
  };

  return (
    <AnimatedElement className="w-full max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-orange-800">
            Interactive Claim Submission Demo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`relative p-4 rounded-lg border ${
                  s === step
                    ? 'bg-orange-100 border-orange-400'
                    : s < step
                    ? 'bg-green-50 border-green-400'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-medium ${s === step ? 'text-orange-700' : s < step ? 'text-green-700' : 'text-gray-500'}`}>
                    Step {s}
                  </span>
                  {s < step && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700">Patient Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-3 rounded">
                    <span className="block text-sm text-gray-600">Name</span>
                    <span className="font-medium">John Smith</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <span className="block text-sm text-gray-600">DOB</span>
                    <span className="font-medium">05/15/1980</span>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700">Service Details</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-3 rounded">
                    <span className="block text-sm text-gray-600">Service Date</span>
                    <span className="font-medium">03/15/2024</span>
                  </div>
                  <div className="bg-orange-50 p-3 rounded">
                    <span className="block text-sm text-gray-600">Provider</span>
                    <span className="font-medium">Dr. Jane Wilson</span>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700">Claim Details</h3>
                <div className="flex items-center space-x-2 text-green-600">
                  <FileCheck className="w-5 h-5" />
                  <span>All required fields complete</span>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <div className="flex justify-between items-center">
                    <span>Claim ID: #CL-2024-001</span>
                    <span className="text-green-600">Ready to Submit</span>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700">Submission Complete!</h3>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-green-700">Claim submitted successfully</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleNextStep}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            >
              {step < 4 ? (
                <>
                  <span>Next Step</span>
                  <Send className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Start Over</span>
                  <AlertCircle className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </AnimatedElement>
  );
};

export default ClaimSubmissionDemo;
