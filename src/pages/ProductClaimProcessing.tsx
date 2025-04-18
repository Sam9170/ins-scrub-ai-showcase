import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClaimSubmissionDemo from '@/components/claim/ClaimSubmissionDemo';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import PricingCard from '@/components/shared/PricingCard';
import IntegrationSection from '@/components/shared/IntegrationSection';
import AnimatedElement from '@/components/AnimatedElement';
import { FileText, BarChart3, Clock, CheckCircle } from 'lucide-react';

const ProductClaimProcessing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$299",
      description: "Perfect for small practices",
      features: [
        "Up to 500 claims per month",
        "Basic claim validation",
        "Email support",
        "Standard processing time"
      ]
    },
    {
      title: "Professional",
      price: "$599",
      description: "Most popular for growing practices",
      features: [
        "Up to 2000 claims per month",
        "Advanced claim validation",
        "Priority support",
        "Faster processing time",
        "Custom rules engine"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large healthcare organizations",
      features: [
        "Unlimited claims",
        "Full automation suite",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced analytics"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <CirclePattern className="top-0 right-0 text-blue-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
                  ClaimFlow Pro
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Streamlined <span className="bg-gradient-to-r from-blue-600 to-blue-500 inline-block text-transparent bg-clip-text">Claim Processing</span> & Submission
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Accelerate your healthcare claim processing with intelligent automation that reduces errors, speeds up submissions, and maximizes reimbursements.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
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
                        <h3 className="font-bold text-blue-700">ClaimFlow Dashboard</h3>
                        <span className="text-xs text-gray-500">Today, 2:30 PM</span>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500 transition-all duration-300 hover:bg-blue-100">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <ClipboardCheck size={18} className="text-blue-600 mr-2" />
                            <span className="font-semibold text-blue-700">New Claims</span>
                          </div>
                          <span className="text-sm font-medium bg-blue-200 text-blue-700 px-2 py-1 rounded-full">12</span>
                        </div>
                        <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full w-1/3 bg-blue-500 animate-pulse-slow"></div>
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
                        <div className="bg-blue-50 p-3 rounded-lg transition-all duration-300 hover:bg-blue-100 transform hover:scale-105 cursor-pointer">
                          <div className="flex items-center mb-1">
                            <Send size={14} className="text-blue-600 mr-1" />
                            <span className="text-sm font-medium text-blue-700">Submit</span>
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
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-float"></div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
        <WavePattern className="text-white" />
      </section>
      
      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              See ClaimFlow Pro in Action
            </h2>
            <p className="text-lg text-gray-600">
              Experience how our intelligent claim processing system streamlines your workflow
            </p>
          </AnimatedElement>
          <ClaimSubmissionDemo />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedElement className="text-center" delay={100}>
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">First-pass claim acceptance</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={200}>
              <div className="text-4xl font-bold mb-2">75%</div>
              <p className="text-blue-100">Reduction in processing time</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={300}>
              <div className="text-4xl font-bold mb-2">$2.5M</div>
              <p className="text-blue-100">Average annual savings</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={400}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Automated processing</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Claims Management
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to streamline your claims processing workflow
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={100}>
              <FileText className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Claim Validation</h3>
              <p className="text-gray-600">Automatic error detection and correction suggestions</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={200}>
              <BarChart3 className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Track claim status and performance metrics</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={300}>
              <Clock className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Faster Processing</h3>
              <p className="text-gray-600">Reduce claim processing time by up to 75%</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={400}>
              <CheckCircle className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Compliance Assured</h3>
              <p className="text-gray-600">Stay compliant with latest healthcare regulations</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Healthcare Leaders
            </h2>
            <p className="text-lg text-gray-600">
              See what our customers have to say about ClaimFlow Pro
            </p>
          </AnimatedElement>
          <TestimonialSlider />
        </div>
      </section>

      {/* Integrations Section */}
      <IntegrationSection />

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that best fits your practice
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductClaimProcessing;
