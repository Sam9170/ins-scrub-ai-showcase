
import React, { useState } from 'react';
import { Bot, FileCheck, FileText, Scan, Upload, CheckCircle, RefreshCw } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

const OCRProcessingDemo = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedText, setExtractedText] = useState("");

  const simulateOCRProcessing = () => {
    setIsProcessing(true);
    setStep(1);
    
    toast({
      title: "Upload Received",
      description: "Starting document analysis...",
    });

    setTimeout(() => {
      setStep(2);
      toast({
        title: "Processing",
        description: "Analyzing document structure...",
      });

      setTimeout(() => {
        setStep(3);
        setExtractedText(`MEDICAL CLAIM FORM
Patient: John Smith
DOB: 01/15/1980
Insurance ID: INS123456789
Provider: Dr. Sarah Johnson
Date of Service: 04/15/2025
Diagnosis: J45.901
Procedure: 99214
Amount: $175.00`);
        
        setIsProcessing(false);
        toast({
          title: "Processing Complete",
          description: "Document analysis finished successfully!",
        });
      }, 2000);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto relative">
      <div className="flex mb-6">
        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
          <div className="flex items-center mb-2">
            <Bot size={18} className="text-blue-600 mr-2" />
            <span className="font-semibold text-blue-700">HealthOCR Assistant</span>
          </div>
          <p className="text-sm text-gray-700">
            Upload a medical document, and I'll extract the important information automatically.
          </p>
        </div>

        <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
          {!isProcessing && !extractedText ? (
            <Button
              onClick={simulateOCRProcessing}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              <Upload className="mr-2" />
              Upload Document
            </Button>
          ) : isProcessing ? (
            <div className="space-y-4">
              <div className="flex justify-center">
                <Scan className={`h-8 w-8 ${step === 1 ? 'text-blue-500 animate-pulse' : 'text-gray-300'}`} />
                <div className="mx-2 border-t-2 border-gray-200 w-8 mt-4" />
                <FileText className={`h-8 w-8 ${step === 2 ? 'text-blue-500 animate-pulse' : 'text-gray-300'}`} />
                <div className="mx-2 border-t-2 border-gray-200 w-8 mt-4" />
                <FileCheck className={`h-8 w-8 ${step === 3 ? 'text-blue-500 animate-pulse' : 'text-gray-300'}`} />
              </div>
              <p className="text-sm text-gray-600">
                {step === 1 ? "Scanning document..." : 
                 step === 2 ? "Analyzing content..." :
                 "Finalizing extraction..."}
              </p>
            </div>
          ) : null}
        </div>

        {extractedText && (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center mb-3">
                <CheckCircle className="text-green-600 mr-2" />
                <span className="font-semibold text-gray-700">Extracted Information</span>
              </div>
              <pre className="text-sm text-gray-600 whitespace-pre-wrap font-mono bg-white p-3 rounded border border-gray-100">
                {extractedText}
              </pre>
            </div>

            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setExtractedText("");
                  toast({
                    title: "Reset Complete",
                    description: "Ready for new document",
                  });
                }}
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <RefreshCw className="mr-2" />
                Process New Document
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCRProcessingDemo;
