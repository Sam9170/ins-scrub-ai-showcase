
import React, { useState } from 'react';
import { Bot, Check, ClipboardCheck, FileSearch, ShieldCheck, UserCheck } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  patientName: z.string().min(2, "Patient name is required"),
  insuranceId: z.string().min(5, "Insurance ID must be at least 5 characters"),
  dob: z.string().min(1, "Date of birth is required"),
});

const EligibilityCheckDemo = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<null | {
    status: string;
    deductible: number;
    copay: number;
    network: string;
  }>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      insuranceId: "",
      dob: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      toast({
        title: "Verification in Progress",
        description: "Checking insurance eligibility...",
      });

      setTimeout(() => {
        setVerificationResult({
          status: "Active",
          deductible: 500,
          copay: 25,
          network: "In-Network",
        });
        setIsVerifying(false);
        toast({
          title: "Verification Complete",
          description: "Insurance eligibility verified successfully!",
        });
      }, 2000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto relative">
      <div className="flex mb-6">
        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      </div>

      <div className="space-y-4">
        <div className="bg-insscrub-50 p-3 rounded-lg border-l-4 border-insscrub-500">
          <div className="flex items-center mb-2">
            <Bot size={18} className="text-insscrub-600 mr-2" />
            <span className="font-semibold text-insscrub-700">InsScrub AI Assistant</span>
          </div>
          <p className="text-sm text-gray-700">
            Welcome! I'll help you verify insurance eligibility. Please provide the patient's information.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Patient Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="insuranceId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Insurance ID</FormLabel>
                  <FormControl>
                    <Input placeholder="INS123456789" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-insscrub-500 to-insscrub-600 hover:from-insscrub-600 hover:to-insscrub-700"
              disabled={isVerifying}
            >
              {isVerifying ? (
                <div className="flex items-center">
                  <FileSearch className="animate-spin mr-2" />
                  Verifying...
                </div>
              ) : (
                <div className="flex items-center">
                  <ShieldCheck className="mr-2" />
                  Verify Eligibility
                </div>
              )}
            </Button>
          </form>
        </Form>

        {verificationResult && (
          <div className="mt-6 space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center mb-2">
                <UserCheck className="text-green-600 mr-2" />
                <span className="font-semibold text-green-700">Verification Results</span>
              </div>
              <div className="text-sm space-y-2">
                <p className="flex items-center">
                  <Check className="text-green-500 mr-2 h-4 w-4" />
                  Status: {verificationResult.status}
                </p>
                <p className="flex items-center">
                  <Check className="text-green-500 mr-2 h-4 w-4" />
                  Deductible Remaining: ${verificationResult.deductible}
                </p>
                <p className="flex items-center">
                  <Check className="text-green-500 mr-2 h-4 w-4" />
                  Co-pay: ${verificationResult.copay}
                </p>
                <p className="flex items-center">
                  <Check className="text-green-500 mr-2 h-4 w-4" />
                  Network Status: {verificationResult.network}
                </p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  form.reset();
                  setVerificationResult(null);
                  toast({
                    title: "Reset Complete",
                    description: "Ready for next verification",
                  });
                }}
                className="text-insscrub-600 border-insscrub-200 hover:bg-insscrub-50"
              >
                <ClipboardCheck className="mr-2" />
                New Verification
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EligibilityCheckDemo;
