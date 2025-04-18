
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileCheck, Send, AlertCircle, CheckCircle2, CircleDollarSign, ClipboardCheck, HeartPulse } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from '../AnimatedElement';

const ClaimSubmissionDemo = () => {
  const [step, setStep] = useState(1);
  const { toast } = useToast();
  
  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      toast({
        title: `Step ${step} Completed Successfully`,
        description: step === 3 ? "Submitting claim..." : "Moving to next step...",
        duration: 2000,
      });
    } else {
      setStep(1);
      toast({
        title: "Demo Reset",
        description: "Starting a new claim submission...",
        duration: 2000,
      });
    }
  };

  const getStepDescription = (stepNumber: number) => {
    switch (stepNumber) {
      case 1:
        return "Patient Information & Verification";
      case 2:
        return "Service & Provider Details";
      case 3:
        return "Review & Validation";
      case 4:
        return "Confirmation";
      default:
        return "";
    }
  };

  return (
    <AnimatedElement className="w-full max-w-4xl mx-auto">
      <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-orange-800">
            Interactive Claim Submission Demo
          </CardTitle>
          <p className="text-center text-orange-600 mt-2">
            Experience our streamlined 4-step submission process
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`relative p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                  s === step
                    ? 'bg-orange-100 border-orange-400 shadow-md'
                    : s < step
                    ? 'bg-green-50 border-green-400'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`font-medium ${s === step ? 'text-orange-700' : s < step ? 'text-green-700' : 'text-gray-500'}`}>
                      Step {s}
                    </span>
                    <p className={`text-xs mt-1 ${s === step ? 'text-orange-600' : s < step ? 'text-green-600' : 'text-gray-400'}`}>
                      {getStepDescription(s)}
                    </p>
                  </div>
                  {s < step && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-inner mb-6">
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5" />
                  Patient Information
                </h3>
                <p className="text-gray-600 mb-4">
                  Verify patient details and insurance information for accurate claim processing
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 transition-all duration-300 hover:shadow-md">
                    <span className="block text-sm text-gray-600 mb-1">Patient Name</span>
                    <span className="font-medium text-orange-800">John Smith</span>
                    <div className="mt-2 text-xs text-orange-600">ID: #PAT-2024-001</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 transition-all duration-300 hover:shadow-md">
                    <span className="block text-sm text-gray-600 mb-1">Insurance Details</span>
                    <span className="font-medium text-orange-800">Blue Cross Blue Shield</span>
                    <div className="mt-2 text-xs text-orange-600">Policy: #INS-BC-789</div>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700 flex items-center gap-2">
                  <CircleDollarSign className="w-5 h-5" />
                  Service Details
                </h3>
                <p className="text-gray-600 mb-4">
                  Enter medical service information and provider details for claim processing
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 transition-all duration-300 hover:shadow-md">
                    <span className="block text-sm text-gray-600 mb-1">Service Information</span>
                    <span className="font-medium text-orange-800">Annual Physical Exam</span>
                    <div className="mt-2 text-xs text-orange-600">CPT Code: 99395</div>
                    <div className="mt-1 text-xs text-orange-600">Date: 03/15/2024</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 transition-all duration-300 hover:shadow-md">
                    <span className="block text-sm text-gray-600 mb-1">Provider Details</span>
                    <span className="font-medium text-orange-800">Dr. Jane Wilson</span>
                    <div className="mt-2 text-xs text-orange-600">NPI: 1234567890</div>
                    <div className="mt-1 text-xs text-orange-600">Facility: Wilson Medical Center</div>
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-orange-700 flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5" />
                  Claim Review
                </h3>
                <p className="text-gray-600 mb-4">
                  Review claim details and validation results before submission
                </p>
                <div className="flex items-center space-x-2 text-green-600 mb-4">
                  <FileCheck className="w-5 h-5" />
                  <span>Automatic validation complete - Ready for submission</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800 font-medium">Claim ID: #CL-2024-001</span>
                    <span className="text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm">Ready to Submit</span>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      All required fields completed
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Insurance information verified
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      CPT codes validated
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-700 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Submission Complete
                </h3>
                <p className="text-gray-600 mb-4">
                  Claim has been successfully submitted and is being processed
                </p>
                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                    <span className="text-green-700 font-medium text-lg">Claim submitted successfully</span>
                    <div className="text-center space-y-2">
                      <p className="text-sm text-green-600">Claim ID: #CL-2024-001</p>
                      <p className="text-sm text-green-600">Estimated Processing Time: 2-3 business days</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center">
            <Button
              onClick={handleNextStep}
              className={`${
                step < 4 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'bg-green-500 hover:bg-green-600'
              } text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2`}
            >
              {step < 4 ? (
                <>
                  <span>Next Step</span>
                  <Send className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Start New Claim</span>
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
