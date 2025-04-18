import React from 'react';
import { ArrowRight, Check, FileCheck, Send, Clock, Shield, ChartBar, Zap, ClipboardCheck, CreditCard, CircleDollarSign, Filter, Search, CircleCheck, BadgeCheck, TrendingUp, ShieldCheck, ScrollText, HeartHandshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';
import ClaimSubmissionDemo from '@/components/claim/ClaimSubmissionDemo';

const ProductClaimProcessing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100">
        <CirclePattern className="top-0 right-0 text-orange-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
                  ClaimFlow Pro
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Streamlined <span className="bg-gradient-to-r from-orange-600 to-orange-500 inline-block text-transparent bg-clip-text">Claim Processing</span> & Submission
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Accelerate your healthcare claim processing with intelligent automation that reduces errors, speeds up submissions, and maximizes reimbursements.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                    View Documentation
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px]">
                    <div className="flex mb-6">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-orange-700">ClaimFlow Dashboard</h3>
                        <span className="text-xs text-gray-500">Today, 2:30 PM</span>
                      </div>
                      
                      <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500 transition-all duration-300 hover:bg-orange-100">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <ClipboardCheck size={18} className="text-orange-600 mr-2" />
                            <span className="font-semibold text-orange-700">New Claims</span>
                          </div>
                          <span className="text-sm font-medium bg-orange-200 text-orange-700 px-2 py-1 rounded-full">12</span>
                        </div>
                        <div className="w-full h-2 bg-orange-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-orange-500 animate-pulse-slow"></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Processing batch...</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <FileCheck size={18} className="text-green-600 mr-2" />
                            <span className="font-semibold text-gray-700">Processed</span>
                          </div>
                          <span className="text-sm font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">45</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-600">Clean Claims:</span>
                            <span className="font-medium">38</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-600">Flagged for Review:</span>
                            <span className="font-medium">7</span>
                          </li>
                          <li className="flex justify-between text-sm">
                            <span className="text-gray-600">Total Value:</span>
                            <span className="font-medium">$24,350</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-orange-50 p-3 rounded-lg transition-all duration-300 hover:bg-orange-100 transform hover:scale-105 cursor-pointer">
                          <div className="flex items-center mb-1">
                            <Send size={14} className="text-orange-600 mr-1" />
                            <span className="text-sm font-medium text-orange-700">Submit</span>
                          </div>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg transition-all duration-300 hover:bg-yellow-100 transform hover:scale-105 cursor-pointer">
                          <div className="flex items-center mb-1">
                            <Search size={14} className="text-yellow-600 mr-1" />
                            <span className="text-sm font-medium text-yellow-700">Review</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-red-500 rounded-xl opacity-20 animate-rotate-slow"></div>
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-float"></div>
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
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Intelligent Claim Processing
            </h2>
            <p className="text-lg text-gray-600">
              ClaimFlow Pro transforms your claim processing workflow with cutting-edge AI technology, ensuring faster submissions and higher approval rates.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BadgeCheck size={24} />}
              title="Advanced Claim Validation"
              description="AI-powered validation system checks 200+ rules in real-time, reducing denials by up to 35% and ensuring first-pass acceptance."
              iconClassName="bg-orange-100 text-orange-600"
              delay={100}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
            
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Revenue Optimization"
              description="Smart analytics identify underpayments and optimization opportunities, helping increase revenue by an average of 12% per claim."
              iconClassName="bg-orange-100 text-orange-600"
              delay={200}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
            
            <FeatureCard
              icon={<ShieldCheck size={24} />}
              title="Compliance Assurance"
              description="Stay compliant with automatic updates to payer rules and regulations, reducing compliance-related denials by 45%."
              iconClassName="bg-orange-100 text-orange-600"
              delay={300}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
            
            <FeatureCard
              icon={<ScrollText size={24} />}
              title="Smart Documentation"
              description="Automated documentation review ensures all required attachments are included and properly formatted before submission."
              iconClassName="bg-orange-100 text-orange-600"
              delay={400}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
            
            <FeatureCard
              icon={<HeartHandshake size={24} />}
              title="Payer Relations"
              description="Direct connectivity to 1000+ payers with automated follow-up workflows and relationship management tools."
              iconClassName="bg-orange-100 text-orange-600"
              delay={500}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
            
            <FeatureCard
              icon={<Zap size={24} />}
              title="Lightning Fast Processing"
              description="Process claims 5x faster with automated batch submissions and real-time status tracking across multiple payers."
              iconClassName="bg-orange-100 text-orange-600"
              delay={600}
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            />
          </div>
        </div>
      </section>
      
      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
              Interactive Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Our Streamlined Process
            </h2>
            <p className="text-lg text-gray-600">
              See how easy it is to submit claims with our intuitive interface. Follow along with our interactive demo to understand the simple steps involved.
            </p>
          </AnimatedElement>
          
          <ClaimSubmissionDemo />
        </div>
      </section>
      
      {/* Workflow Section */}
      <section className="py-20 bg-gray-50 relative">
        <CirclePattern className="top-0 left-0 text-orange-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
              Workflow
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamlined Claim Processing
            </h2>
            <p className="text-lg text-gray-600">
              Our intelligent system guides claims through each stage of the submission and processing workflow.
            </p>
          </AnimatedElement>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedElement className="bg-white rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]" delay={100}>
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <ClipboardCheck size={28} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Claim Creation</h3>
                <p className="text-gray-600 mb-4">
                  Easily create claims with intelligent form-filling that pulls from patient and provider data to reduce manual entry.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Smart templates for different claim types</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Auto-population from EHR data</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Built-in code validation</span>
                  </li>
                </ul>
              </AnimatedElement>
              
              <AnimatedElement className="bg-white rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]" delay={200}>
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <Search size={28} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Verification & Scrubbing</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI examines claims for errors, missing information, and potential denial triggers before submission.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">200+ automated validation checks</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Payer-specific rule verification</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Smart correction suggestions</span>
                  </li>
                </ul>
              </AnimatedElement>
              
              <AnimatedElement className="bg-white rounded-xl p-6 shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]" delay={300}>
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                  <Send size={28} className="text-orange-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Submission & Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Submit clean claims electronically to any payer and track their progress through the adjudication process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Direct connectivity to 1000+ payers</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Real-time submission status</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Automated follow-up workflows</span>
                  </li>
                </ul>
              </AnimatedElement>
            </div>
            
            <AnimatedElement className="mt-12 bg-white rounded-xl p-8 shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl" delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                    <ChartBar size={28} className="text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Analytics & Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Gain insights into your claims process with detailed analytics and reporting that help identify improvement opportunities.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Custom performance dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Denial pattern analysis</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-orange-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Revenue cycle optimization suggestions</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-full h-64 bg-orange-50 rounded-xl p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <div className="text-center">
                      <ChartBar size={48} className="mx-auto text-orange-400 mb-3" />
                      <p className="text-orange-700 font-medium">Interactive Analytics Dashboard</p>
                      <p className="text-sm text-orange-500">(Visualization placeholder)</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 text-white relative overflow-hidden">
        <CirclePattern className="bottom-0 right-0 text-white opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Proven Results
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of healthcare providers who have transformed their revenue cycle with ClaimFlow Pro.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="98.5%"
              label="Clean claim submission rate"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20"
              delay={100}
            />
            
            <StatsCard
              value="75%"
              label="Reduction in processing time"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20"
              delay={200}
            />
            
            <StatsCard
              value="$2.1M"
              label="Average annual savings"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20"
              delay={300}
            />
            
            <StatsCard
              value="99.9%"
              label="System uptime"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Integration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-5">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamlessly Connect Your Systems
            </h2>
            <p className="text-lg text-gray-600">
              ClaimFlow Pro integrates with your existing healthcare IT infrastructure for a smooth implementation.
            </p>
          </AnimatedElement>
          
          <div className="max-w-5xl mx-auto">
            <AnimatedElement className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl text-center transition-all duration-300 hover:bg-orange-50 hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-600">EHR</span>
                </div>
                <h3 className="font-bold mb-2">EHR Systems</h3>
                <p className="text-gray-600 text-sm">
                  Bi-directional integration with all major electronic health record systems
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl text-center transition-all duration-300 hover:bg-orange-50 hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-600">PM</span>
                </div>
                <h3 className="font-bold mb-2">Practice Management</h3>
                <p className="text-gray-600 text-sm">
                  Seamless data flow with your practice management software
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl text-center transition-all duration-300 hover:bg-orange-50 hover:shadow-md">
                <div className="w-16 h-16 bg-white rounded-lg shadow-sm flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-orange-600">RCM</span>
                </div>
                <h3 className="font-bold mb-2">Revenue Cycle</h3>
                <p className="text-gray-600 text-sm">
                  Connect with existing RCM tools for end-to-end visibility
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement className="mt-12 p-8 bg-gray-50 rounded-xl transition-all duration-300 hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold mb-4">API-First Architecture</h3>
                  <p className="text-gray-600 mb-6">
                    Our robust API infrastructure allows for custom integrations with any system in your technology stack.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-orange-500 mt-0.5 mr-2 shrink-0" />
                      <span className="text-gray-600">RESTful APIs with comprehensive documentation</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-orange-500 mt-0.5 mr-2 shrink-0" />
                      <span className="text-gray-600">Secure data exchange with end-to-end encryption</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-orange-500 mt-0.5 mr-2 shrink-0" />
                      <span className="text-gray-600">Developer sandbox for testing and implementation</span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2 flex items-center">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 w-full transition-all duration-300 hover:shadow-md">
                    <div className="mb-2">
                      <div className="text-xs text-gray-500 mb-1">API Endpoint Example</div>
                      <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                        POST /api/v1/claims/submit
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-1">Response</div>
                      <div className="bg-gray-800 text-blue-400 p-2 rounded text-xs font-mono overflow-x-auto">
                        {`{
  "status": "success",
  "claimId": "CL-12345",
  "submissionDate": "2023-07-15T10:30:00Z",
  "payerId": "BCBS-IL",
  "estimatedResponse": "2023-07-17"
}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Optimize Your Claim Processing?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Join healthcare providers nationwide who are saving time and increasing revenue with ClaimFlow Pro.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-orange-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                  View Pricing
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

export default ProductClaimProcessing;
