import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialSlider from '@/components/shared/TestimonialSlider';
import PricingCard from '@/components/shared/PricingCard';
import IntegrationSection from '@/components/shared/IntegrationSection';
import AnimatedElement from '@/components/AnimatedElement';
import { MessageSquare, Search, Bot, Zap } from 'lucide-react';

const ProductInfoMate = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$149",
      description: "Smart healthcare assistance",
      features: [
        "Up to 1000 queries/month",
        "Basic AI responses",
        "Standard support",
        "Knowledge base access"
      ]
    },
    {
      title: "Professional",
      price: "$399",
      description: "Advanced AI assistant",
      features: [
        "Up to 5000 queries/month",
        "Advanced AI capabilities",
        "Priority support",
        "Custom training",
        "Analytics dashboard"
      ],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Full AI integration",
      features: [
        "Unlimited queries",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Full API access"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-green-50 to-green-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-5">
                  InfoMate
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Your AI-Powered <span className="text-gradient-secondary">Healthcare Assistant</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Revolutionize patient communication with our intelligent AI assistant.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-gradient-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-md text-white font-semibold">
                    Schedule Demo
                  </button>
                  <button className="bg-transparent border border-green-500 text-green-600 hover:bg-green-50 transition-colors text-lg px-8 py-6 rounded-md font-semibold">
                    View Documentation
                  </button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative flex justify-center">
                  <div className="relative w-80 h-[500px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-10 bg-green-500 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                        <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      </div>
                      <span className="text-white text-sm font-medium mx-auto">InfoMate AI Assistant</span>
                    </div>
                    
                    <div className="pt-14 px-4 h-full">
                      <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
                        <div className="w-full h-40 bg-green-50 border-2 border-dashed border-green-200 rounded-md flex items-center justify-center mb-3">
                          <div className="text-center">
                            <MessageSquare size={32} className="mx-auto text-green-500 mb-2" />
                            <p className="text-sm text-green-600 font-medium">Patient Query</p>
                          </div>
                        </div>
                        <div className="w-full h-8 bg-green-500 rounded-md flex items-center justify-center animate-pulse-slow">
                          <span className="text-white text-xs font-medium">Processing...</span>
                        </div>
                        <div className="absolute top-2 right-2 rounded-full bg-green-500 w-6 h-6 flex items-center justify-center animate-pulse-slow">
                          <Bot size={14} className="text-white" />
                        </div>
                      </div>
                      
                      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-4">
                        <h4 className="font-medium text-sm mb-2 text-green-700">AI Response</h4>
                        <div className="space-y-2">
                          <div>
                            <p className="text-xs text-gray-500">Patient Question</p>
                            <p className="text-sm font-medium">What are the symptoms of the flu?</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500">AI Answer</p>
                            <p className="text-sm font-medium">Common symptoms include fever, cough, sore throat, and fatigue.</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                          <button className="bg-transparent border border-green-500 text-green-600 hover:bg-green-50 transition-colors text-xs px-4 py-2 rounded-md font-semibold">Edit</button>
                          <button className="bg-green-500 hover:bg-green-600 transition-colors text-xs px-4 py-2 rounded-md text-white font-semibold">Confirm & Send</button>
                        </div>
                      </div>
                      
                      <div className="w-full h-1.5 bg-green-100 rounded-full overflow-hidden mb-2">
                        <div className="h-full w-4/5 bg-green-500 animate-pulse-slow"></div>
                      </div>
                      <p className="text-xs text-center text-gray-500">Processing query 1 of 1</p>
                    </div>
                  </div>
                  
                  <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full animate-float"></div>
                  <div className="absolute -z-10 -bottom-5 -right-5 w-24 h-24 bg-green-400 opacity-30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Powered Assistant Features
            </h2>
            <p className="text-lg text-gray-600">
              Transform your healthcare communication
            </p>
          </AnimatedElement>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={100}>
              <MessageSquare className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Chat</h3>
              <p className="text-gray-600">Intelligent conversations with patients</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={200}>
              <Search className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Quick Answers</h3>
              <p className="text-gray-600">Instant access to medical information</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={300}>
              <Bot className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">AI Learning</h3>
              <p className="text-gray-600">Continuous improvement through usage</p>
            </AnimatedElement>
            
            <AnimatedElement className="bg-white p-6 rounded-xl shadow-lg" delay={400}>
              <Zap className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">Immediate answers to patient queries</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedElement className="text-center" delay={100}>
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-green-100">Query accuracy</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={200}>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <p className="text-green-100">Questions answered</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={300}>
              <div className="text-4xl font-bold mb-2">60%</div>
              <p className="text-green-100">Time saved</p>
            </AnimatedElement>
            <AnimatedElement className="text-center" delay={400}>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-green-100">Available support</p>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Customer Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              See how InfoMate is transforming healthcare communication
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
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600">
              Find the perfect plan for your healthcare needs
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

export default ProductInfoMate;
