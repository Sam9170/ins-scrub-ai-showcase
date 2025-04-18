
import React, { useState } from 'react';
import { ArrowRight, Check, FileText, ScanSearch, Image, BadgeCheck, AlertCircle, FileCheck, Database, BarChart3, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';
import OCRProcessingDemo from '@/components/ocr/OCRProcessingDemo';

const ProductHealthOCR = () => {
  const [activeTab, setActiveTab] = useState("insurance");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100">
        <CirclePattern className="top-0 right-0 text-teal-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
                  HealthOCR
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Intelligent <span className="text-gradient-secondary">Document Processing</span> for Healthcare
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Advanced OCR technology that automatically captures and digitizes critical healthcare documents, from insurance cards to EOBs, with unmatched accuracy.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50 text-lg px-8 py-6">
                    View Documentation
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative flex justify-center">
                  <div className="relative w-80 h-[500px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-teal-500 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                      <span className="text-white text-sm font-medium mx-auto">HealthOCR Scanner</span>
                    </div>
                    
                    <div className="pt-14 px-4 h-full">
                      <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
                        <div className="w-full h-40 bg-teal-50 border-2 border-dashed border-teal-200 rounded-md flex items-center justify-center mb-3">
                          <div className="text-center">
                            <ScanSearch size={32} className="mx-auto text-teal-500 mb-2" />
                            <p className="text-sm text-teal-600 font-medium">Insurance Card Scan</p>
                          </div>
                        </div>
                        <div className="w-full h-8 bg-teal-500 rounded-md flex items-center justify-center animate-pulse-slow">
                          <span className="text-white text-xs font-medium">Scanning...</span>
                        </div>
                        <div className="absolute top-2 right-2 rounded-full bg-teal-500 w-6 h-6 flex items-center justify-center animate-pulse-slow">
                          <FileText size={14} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                        <h4 className="font-medium text-sm mb-2 text-teal-700">Extracted Information</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500">Subscriber Name</p>
                            <p className="text-sm font-medium">Sarah Johnson</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Member ID</p>
                            <p className="text-sm font-medium">XYZ123456789</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Group Number</p>
                            <p className="text-sm font-medium">GRP987654321</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Plan Type</p>
                            <p className="text-sm font-medium">PPO</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">Effective Date</p>
                            <p className="text-sm font-medium">01/01/2024</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                          <Button variant="outline" size="sm" className="text-xs h-8 border-teal-500 text-teal-600">Edit</Button>
                          <Button size="sm" className="text-xs h-8 bg-teal-500 hover:bg-teal-600">Confirm & Save</Button>
                        </div>
                      </div>
                      
                      <div className="w-full h-1.5 bg-teal-100 rounded-full overflow-hidden mb-2">
                        <div className="h-full w-4/5 bg-teal-500 animate-pulse-slow"></div>
                      </div>
                      <p className="text-xs text-center text-gray-500">Processing document 4 of 5</p>
                    </div>
                  </div>
                  
                  <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full animate-float"></div>
                  <div className="absolute -z-10 -bottom-5 -right-5 w-24 h-24 bg-teal-400 opacity-30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
        <WavePattern className="text-white" />
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Document Processing
            </h2>
            <p className="text-lg text-gray-600">
              HealthOCR combines cutting-edge OCR technology with healthcare-specific AI algorithms to streamline your document workflows.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ScanSearch size={24} />}
              title="Insurance Card Scanning"
              description="Extract patient insurance information from physical and digital cards with over 99% accuracy."
              iconClassName="bg-teal-100 text-teal-600"
              delay={100}
            />
            
            <FeatureCard
              icon={<FileText size={24} />}
              title="EOB Processing"
              description="Automatically capture and digitize paper-based Explanation of Benefits documents to streamline posting."
              iconClassName="bg-teal-100 text-teal-600"
              delay={200}
            />
            
            <FeatureCard
              icon={<Image size={24} />}
              title="Clinical Document Capture"
              description="Convert paper forms, referrals, and clinical notes into structured digital data."
              iconClassName="bg-teal-100 text-teal-600"
              delay={300}
            />
            
            <FeatureCard
              icon={<AlertCircle size={24} />}
              title="Error Detection"
              description="AI-powered validation checks to identify potential OCR errors and ensure data accuracy."
              iconClassName="bg-teal-100 text-teal-600"
              delay={400}
            />
            
            <FeatureCard
              icon={<BadgeCheck size={24} />}
              title="Quality Assurance"
              description="Automated quality checks and human-in-the-loop verification for sensitive information."
              iconClassName="bg-teal-100 text-teal-600"
              delay={500}
            />
            
            <FeatureCard
              icon={<FileCheck size={24} />}
              title="Intelligent Document Classification"
              description="Automatic sorting and routing of different document types to the appropriate processing queues."
              iconClassName="bg-teal-100 text-teal-600"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Interactive Demo Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
              Live Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Intelligent Document Processing
            </h2>
            <p className="text-lg text-gray-600">
              Watch as HealthOCR instantly extracts and processes information from medical documents with high accuracy.
            </p>
          </AnimatedElement>
          
          <OCRProcessingDemo />
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white relative">
        <CirclePattern className="top-0 left-0 text-teal-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Document Processing Use Cases
            </h2>
            <p className="text-lg text-gray-600">
              Explore how healthcare organizations are leveraging HealthOCR to transform their document workflows.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedElement 
              className="bg-white border border-gray-100 rounded-xl shadow-card p-6 md:p-8"
              delay={100}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <FileText size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Front Office Insurance Verification</h3>
              <p className="text-gray-600 mb-6">
                Streamline the patient intake process by instantly capturing insurance card information at check-in. Eliminate manual data entry and reduce errors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Reduce check-in time by up to 72%</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Eliminate transcription errors in demographic data</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Automatically validate insurance information in real-time</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white border border-gray-100 rounded-xl shadow-card p-6 md:p-8"
              delay={200}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <Database size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">EOB & Payment Processing</h3>
              <p className="text-gray-600 mb-6">
                Automate the capture and digitization of paper EOBs and payment information for faster payment posting and reconciliation.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Process 300+ EOBs per hour with 99% accuracy</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Extract payment adjustments, denials and remark codes</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Integrate directly with your billing system for automated posting</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white border border-gray-100 rounded-xl shadow-card p-6 md:p-8"
              delay={300}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <BadgeCheck size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Referral & Authorization Processing</h3>
              <p className="text-gray-600 mb-6">
                Quickly capture and route referral information and authorization documents to avoid treatment delays.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Reduce referral processing time from days to minutes</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Extract key clinical information for faster authorization</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Automatically alert staff to missing information</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white border border-gray-100 rounded-xl shadow-card p-6 md:p-8"
              delay={400}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-100 flex items-center justify-center mb-6">
                <BarChart3 size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Clinical Document Management</h3>
              <p className="text-gray-600 mb-6">
                Convert paper-based clinical notes, lab results, and medical records into searchable digital documents.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Create a complete digital patient record</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Extract key clinical data points for analytics</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Enable full-text search across all patient documents</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HealthOCR vs. Traditional OCR
            </h2>
            <p className="text-lg text-gray-600">
              See how our healthcare-specific OCR solution outperforms generic document processing technologies.
            </p>
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-lg">
            <div className="bg-teal-600 text-white py-6">
              <div className="grid grid-cols-3 gap-4 px-6">
                <div className="col-span-1"></div>
                <div className="col-span-1 text-center font-bold">HealthOCR</div>
                <div className="col-span-1 text-center font-bold">Generic OCR</div>
              </div>
            </div>
            
            <div className="bg-white">
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100">
                <div className="col-span-1 font-medium">Healthcare-Specific Models</div>
                <div className="col-span-1 text-center">
                  <CheckCircle2 size={20} className="mx-auto text-teal-500" />
                </div>
                <div className="col-span-1 text-center text-gray-400">Limited</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="col-span-1 font-medium">Insurance Card Recognition</div>
                <div className="col-span-1 text-center">
                  <div className="bg-teal-100 text-teal-700 rounded-full px-2 py-1 text-xs font-medium inline-block">99.7% Accurate</div>
                </div>
                <div className="col-span-1 text-center">
                  <div className="bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs font-medium inline-block">85% Accurate</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100">
                <div className="col-span-1 font-medium">EOB Processing Capability</div>
                <div className="col-span-1 text-center">
                  <CheckCircle2 size={20} className="mx-auto text-teal-500" />
                </div>
                <div className="col-span-1 text-center text-gray-400">Basic</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100 bg-gray-50">
                <div className="col-span-1 font-medium">Integration with Healthcare Systems</div>
                <div className="col-span-1 text-center">
                  <div className="text-teal-600 font-medium">Pre-built connectors</div>
                </div>
                <div className="col-span-1 text-center text-gray-600">Custom development required</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-gray-100">
                <div className="col-span-1 font-medium">HIPAA Compliance</div>
                <div className="col-span-1 text-center">
                  <CheckCircle2 size={20} className="mx-auto text-teal-500" />
                </div>
                <div className="col-span-1 text-center text-gray-400">Varies</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gray-50">
                <div className="col-span-1 font-medium">Healthcare Terminology Recognition</div>
                <div className="col-span-1 text-center">
                  <CheckCircle2 size={20} className="mx-auto text-teal-500" />
                </div>
                <div className="col-span-1 text-center">
                  <div className="text-gray-400">Limited</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-teal-700 text-white relative overflow-hidden">
        <CirclePattern className="bottom-0 left-0 text-white opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              HealthOCR in Numbers
            </h2>
            <p className="text-lg opacity-90">
              Measurable impact on document processing efficiency and accuracy.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="99.7%"
              label="Data extraction accuracy"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={100}
            />
            
            <StatsCard
              value="85%"
              label="Reduction in manual data entry"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={200}
            />
            
            <StatsCard
              value="3x"
              label="Faster document processing speed"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={300}
            />
            
            <StatsCard
              value="$125K"
              label="Average annual cost savings"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Under the Hood
            </h2>
            <p className="text-lg text-gray-600">
              Discover the advanced technologies that power HealthOCR's intelligent document processing capabilities.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-5xl mx-auto">
            <AnimatedElement delay={100}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold">Computer Vision & OCR</h3>
              </div>
              <p className="text-gray-600 mb-4 pl-16">
                Our advanced computer vision algorithms can recognize and process documents in various formats, orientations, and quality levels. The multi-layer OCR engine ensures maximum character recognition accuracy.
              </p>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Document classification and orientation correction</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Image enhancement for low-quality scans</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Multi-language text recognition</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={200}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold">Healthcare-Specific AI Models</h3>
              </div>
              <p className="text-gray-600 mb-4 pl-16">
                Our AI models are trained specifically on healthcare documents, including insurance cards, EOBs, and clinical documentation, enabling high accuracy for industry-specific terminology.
              </p>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Healthcare terminology recognition</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Payer-specific document templates</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Continuous learning from corrections</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={300}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold">Data Validation & Enrichment</h3>
              </div>
              <p className="text-gray-600 mb-4 pl-16">
                HealthOCR doesn't just extract text—it understands healthcare data. Our intelligent validation system checks extracted information against databases and rules to ensure accuracy.
              </p>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Format validation for IDs, codes, and dates</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Cross-referencing with payer databases</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Automated error correction suggestions</span>
                </li>
              </ul>
            </AnimatedElement>
            
            <AnimatedElement delay={400}>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
                  <span className="font-bold text-teal-600">4</span>
                </div>
                <h3 className="text-xl font-bold">Integration Capabilities</h3>
              </div>
              <p className="text-gray-600 mb-4 pl-16">
                HealthOCR offers flexible deployment options and robust APIs that allow seamless integration with your existing systems and workflows.
              </p>
              <ul className="space-y-2 pl-16">
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Cloud, on-premise, and hybrid deployment</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">RESTful APIs for easy system integration</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-teal-500 mt-0.5 mr-2 shrink-0" />
                  <span className="text-gray-600">Pre-built connectors for major EHRs</span>
                </li>
              </ul>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about HealthOCR and document processing.
            </p>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <div 
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === 0 ? 'shadow-md' : ''}`}
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(0)}
                >
                  <span className="font-medium text-lg">How long does it take to implement HealthOCR?</span>
                  {expandedFaq === 0 ? 
                    <ChevronUp className="text-teal-500" size={20} /> : 
                    <ChevronDown className="text-gray-400" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === 0 ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    Most implementations are completed within 2-4 weeks, depending on the complexity of your environment and the specific modules being deployed. Our implementation team works closely with your IT department to ensure a smooth integration with your existing systems.
                  </p>
                </div>
              </div>
              
              <div 
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === 1 ? 'shadow-md' : ''}`}
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(1)}
                >
                  <span className="font-medium text-lg">What types of documents can HealthOCR process?</span>
                  {expandedFaq === 1 ? 
                    <ChevronUp className="text-teal-500" size={20} /> : 
                    <ChevronDown className="text-gray-400" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === 1 ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    HealthOCR is designed to handle a wide range of healthcare documents, including insurance cards, EOBs, referrals, clinical notes, lab results, patient forms, and more. Our specialized OCR technology is trained on healthcare-specific documents to ensure high accuracy across different document types.
                  </p>
                </div>
              </div>
              
              <div 
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === 2 ? 'shadow-md' : ''}`}
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(2)}
                >
                  <span className="font-medium text-lg">Is HealthOCR HIPAA compliant?</span>
                  {expandedFaq === 2 ? 
                    <ChevronUp className="text-teal-500" size={20} /> : 
                    <ChevronDown className="text-gray-400" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === 2 ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    Yes, HealthOCR is fully HIPAA compliant. We implement robust security measures including encryption, access controls, audit logs, and secure data storage. We can also sign Business Associate Agreements (BAAs) with healthcare organizations to ensure compliance with privacy regulations.
                  </p>
                </div>
              </div>
              
              <div 
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === 3 ? 'shadow-md' : ''}`}
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(3)}
                >
                  <span className="font-medium text-lg">How does the pricing work?</span>
                  {expandedFaq === 3 ? 
                    <ChevronUp className="text-teal-500" size={20} /> : 
                    <ChevronDown className="text-gray-400" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === 3 ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    HealthOCR offers flexible pricing models based on your organization's specific needs. We provide both subscription-based pricing and volume-based pricing options. Most clients choose our subscription plan which includes a set number of monthly document scans with additional scans available at discounted rates. Contact our sales team for a customized quote.
                  </p>
                </div>
              </div>
              
              <div 
                className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === 4 ? 'shadow-md' : ''}`}
              >
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(4)}
                >
                  <span className="font-medium text-lg">Do you offer support and training?</span>
                  {expandedFaq === 4 ? 
                    <ChevronUp className="text-teal-500" size={20} /> : 
                    <ChevronDown className="text-gray-400" size={20} />
                  }
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    expandedFaq === 4 ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    Yes, all HealthOCR plans include comprehensive training and ongoing support. Our implementation includes staff training sessions, detailed documentation, and access to our knowledge base. We also provide 24/7 technical support via email, phone, and chat to ensure any issues are resolved quickly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Document Workflows?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo to see HealthOCR in action with your own documents.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-teal-600 hover:bg-gray-100 transition-colors text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg px-8 py-6">
                  Talk to Sales
                </Button>
              </div>
            </div>
            <CirclePattern className="bottom-0 right-0 text-white opacity-10" />
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductHealthOCR;
