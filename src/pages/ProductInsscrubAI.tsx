import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EligibilityCheckDemo from '@/components/eligibility/EligibilityCheckDemo';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import PricingCard from '@/components/shared/PricingCard';
import IntegrationSection from '@/components/shared/IntegrationSection';
import AnimatedElement from '@/components/AnimatedElement';
import { Brain, Zap, Shield, Users } from 'lucide-react';

const ProductInsscrubAI = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$199",
      description: "Essential AI-powered verification",
      features: [
        "Up to 250 verifications/month",
        "Basic eligibility checks",
        "Standard response time",
        "Email support"
      ]
    },
    {
      title: "Advanced",
      price: "$499",
      description: "Complete verification suite",
      features: [
        "Up to 1000 verifications/month",
        "Real-time eligibility checks",
        "Priority processing",
        "24/7 support",
        "Custom rules engine"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Unlimited AI-powered verification",
      features: [
        "Unlimited verifications",
        "Custom AI models",
        "Dedicated support team",
        "White-label solution",
        "API access"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              InsScrub AI
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Intelligent Automation for Healthcare <span className="text-gradient-primary">Revenue Cycle</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Our comprehensive set of agentic AI systems seamlessly integrates into your existing workflows, automating billing and revenue processes to enhance financial performance.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                Schedule Demo
              </Button>
              <Button variant="outline" className="border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50 text-lg px-8 py-6">
                View Case Studies
              </Button>
            </div>
          </AnimatedElement>
          <AnimatedElement animationType="fade-right">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto">
                <div className="flex mb-6">
                  <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-insscrub-50 p-3 rounded-lg border-l-4 border-insscrub-500 animate-pulse-slow">
                    <div className="flex items-center mb-2">
                      <Bot size={18} className="text-insscrub-600 mr-2" />
                      <span className="font-semibold text-insscrub-700">InsScrub AI Assistant</span>
                    </div>
                    <p className="text-sm text-gray-700">Analyzing patient insurance verification...</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-700">Patient: <span className="font-medium">John Smith</span></p>
                    <p className="text-sm text-gray-700">Insurance: <span className="font-medium">Blue Cross PPO</span></p>
                    <p className="text-sm text-gray-700">Status: <span className="font-medium text-green-600">Verified</span></p>
                  </div>
                  <div className="bg-insscrub-50 p-3 rounded-lg border-l-4 border-insscrub-500">
                    <div className="flex items-center mb-2">
                      <Bot size={18} className="text-insscrub-600 mr-2" />
                      <span className="font-semibold text-insscrub-700">InsScrub AI Assistant</span>
                    </div>
                    <p className="text-sm text-gray-700">
                      Verification complete. Coverage active. <br />
                      Deductible remaining: $350 <br />
                      Co-pay for visit type: $25 <br />
                      Status: In-network
                    </p>
                  </div>
                  <div className="pt-2">
                    <div className="w-full h-2 bg-insscrub-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-insscrub-500 animate-pulse-slow"></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Processing claims data...</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-teal-500 rounded-xl opacity-20 animate-rotate-slow"></div>
              <div className="absolute -top-5 -left-5 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float"></div>
            </div>
          </AnimatedElement>
        </div>
        <WavePattern className="text-white" />
      </section>
      
      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience AI-Powered Verification
            </h2>
            <p className="text-lg text-gray-600">
              See how InsScrub AI instantly verifies insurance eligibility
            </p>
          </AnimatedElement>
          <EligibilityCheckDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced AI Features
            </h2>
            <p className="text-lg text-gray-600">
              Cutting-edge technology for insurance verification
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={100}>
              <Brain className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Verification</h3>
              <p className="text-gray-600">Smart eligibility checks using machine learning</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={200}>
              <Zap className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Real-time Processing</h3>
              <p className="text-gray-600">Instant verification results</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={300}>
              <Shield className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fraud Detection</h3>
              <p className="text-gray-600">Advanced algorithms to detect suspicious patterns</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={400}>
              <Users className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Multi-payer Support</h3>
              <p className="text-gray-600">Connect with all major insurance providers</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedElement className="text-center" delay={100}>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <p className="text-purple-100">Verification accuracy</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={200}>
              <div className="text-4xl font-bold mb-2">3sec</div>
              <p className="text-purple-100">Average response time</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={300}>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <p className="text-purple-100">Verifications completed</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={400}>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p className="text-purple-100">Insurance providers</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from healthcare providers using InsScrub AI
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
              Flexible Pricing Options
            </h2>
            <p className="text-lg text-gray-600">
              Scale your verification needs with our flexible plans
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

export default ProductInsscrubAI;
