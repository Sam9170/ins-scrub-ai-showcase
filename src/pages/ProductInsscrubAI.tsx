
import React from 'react';
import { ArrowRight, Check, Calendar, Zap, Bot, Shield, Clock, Braces, CircleDollarSign, CheckCheck, LineChart, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import TestimonialCard from '@/components/TestimonialCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';
import { Card, CardContent } from '@/components/ui/card';

const ProductInsscrubAI = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-insscrub-50 to-insscrub-100">
        <CirclePattern className="top-0 right-0 text-insscrub-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5 border border-insscrub-200 shadow-sm">
                  <Bot size={16} className="mr-2 animate-pulse" />
                  <span>Healthcare AI Solution</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="relative">
                    <span className="relative z-10">InsScrub</span>
                    <span className="absolute bottom-0 left-0 right-0 h-3 bg-insscrub-200 rounded-lg -z-0 transform -rotate-1"></span>
                  </span>{' '}
                  <span className="text-gradient-primary">AI</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Our comprehensive set of agentic AI systems seamlessly integrates into your existing workflows, automating billing and revenue processes to enhance financial performance.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 mr-2">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">HIPAA Compliant</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 mr-2">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">AI Powered</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 mr-2">
                      <Check size={16} />
                    </div>
                    <span className="text-gray-700">EHR Compatible</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6 relative overflow-hidden group">
                    <span className="relative z-10">Schedule Demo</span>
                    <span className="absolute inset-0 h-full w-0 bg-white/20 transition-all duration-300 group-hover:w-full"></span>
                  </Button>
                  <Button variant="outline" className="border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50 text-lg px-8 py-6">
                    View Case Studies
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative">
                  <Card className="max-w-md mx-auto overflow-hidden shadow-2xl border-insscrub-200 relative z-10">
                    <CardContent className="p-0">
                      <div className="flex items-center bg-gray-50 px-6 py-4 border-b border-gray-100">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="ml-auto flex items-center">
                          <Bot size={18} className="text-insscrub-600 mr-2" />
                          <span className="font-semibold text-insscrub-700">InsScrub AI Assistant</span>
                        </div>
                      </div>
                      
                      <div className="p-6 space-y-4">
                        <div className="bg-insscrub-50 p-4 rounded-lg border-l-4 border-insscrub-500 animate-pulse-slow">
                          <p className="text-sm text-gray-700 font-mono">
                            <span className="text-insscrub-600 font-semibold">> </span>
                            Analyzing patient insurance verification...
                          </p>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                          <h4 className="font-medium text-gray-900 mb-2">Patient Information</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <span className="text-gray-500">Name:</span>
                              <span className="ml-2 font-medium">John Smith</span>
                            </div>
                            <div>
                              <span className="text-gray-500">DOB:</span>
                              <span className="ml-2 font-medium">04/15/1985</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Insurance:</span>
                              <span className="ml-2 font-medium">Blue Cross PPO</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Status:</span>
                              <span className="ml-2 font-medium text-green-600">Verified</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-insscrub-50 p-4 rounded-lg border-l-4 border-insscrub-500">
                          <p className="text-sm text-gray-700 font-mono mb-2">
                            <span className="text-insscrub-600 font-semibold">> </span>
                            Verification complete. Results:
                          </p>
                          <div className="pl-5 space-y-1 text-sm">
                            <p className="font-mono">Coverage: <span className="text-green-600">Active</span></p>
                            <p className="font-mono">Deductible remaining: <span className="font-semibold">$350</span></p>
                            <p className="font-mono">Co-pay for visit: <span className="font-semibold">$25</span></p>
                            <p className="font-mono">Status: <span className="text-blue-600">In-network</span></p>
                          </div>
                        </div>
                        
                        <div className="pt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-gray-500">Processing claims data...</span>
                            <span className="text-xs font-medium text-insscrub-600">75%</span>
                          </div>
                          <div className="w-full h-2 bg-insscrub-100 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-insscrub-500 animate-pulse-slow"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Decorative elements */}
                  <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-teal-500 rounded-xl opacity-20 animate-rotate-slow"></div>
                  <div className="absolute -top-8 -left-8 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-float"></div>
                  <div className="absolute top-1/2 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-30 animate-ping-slow"></div>
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
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              Key Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced AI Features
            </h2>
            <p className="text-lg text-gray-600">
              InsScrub AI offers a comprehensive suite of intelligent automation tools designed specifically for healthcare revenue cycle management.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield size={24} />}
              title="Automated Insurance Verification"
              description="Real-time validation of patient eligibility including coverage details, remaining deductible amounts, and in/out of network status."
              delay={100}
            />
            
            <FeatureCard
              icon={<CheckCheck size={24} />}
              title="Intelligent Claims Processing"
              description="Automated claim scrubbing and validation to ensure clean submissions and minimize denials and rejections."
              delay={200}
            />
            
            <FeatureCard
              icon={<Calendar size={24} />}
              title="Patient Scheduling Optimization"
              description="AI-powered scheduling that maximizes provider productivity while accommodating patient preferences."
              delay={300}
            />
            
            <FeatureCard
              icon={<CircleDollarSign size={24} />}
              title="Predictive Payment Analysis"
              description="Forecast expected reimbursements with AI algorithms that analyze historical data and payer trends."
              delay={400}
            />
            
            <FeatureCard
              icon={<Braces size={24} />}
              title="Customizable API Integration"
              description="Seamlessly connect with your existing EHR, practice management, and billing systems."
              delay={500}
            />
            
            <FeatureCard
              icon={<Zap size={24} />}
              title="Automated Denial Management"
              description="Identify, categorize, and resolve claim denials with intelligent workflows that learn and improve over time."
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative">
        <CirclePattern className="top-0 left-0 text-insscrub-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Streamlined Implementation Process
            </h2>
            <p className="text-lg text-gray-600">
              Our structured approach ensures a smooth transition to InsScrub AI with minimal disruption to your operations.
            </p>
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-insscrub-200 transform md:translateX(-0.5px)"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 md:space-y-24 relative">
                {/* Item 1 */}
                <div className="flex flex-col md:flex-row items-start">
                  <AnimatedElement 
                    className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right hidden md:block"
                    animationType="fade-right"
                  >
                    <h3 className="text-xl font-bold mb-2">Assessment & Planning</h3>
                    <p className="text-gray-600">
                      We analyze your current workflows and systems to create a tailored implementation plan that addresses your specific challenges.
                    </p>
                  </AnimatedElement>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-insscrub-500 text-white shrink-0 md:mx-auto">
                    <span className="font-bold">1</span>
                  </div>
                  <AnimatedElement 
                    className="md:w-1/2 md:pl-12 md:hidden"
                    animationType="fade-left"
                  >
                    <h3 className="text-xl font-bold mb-2">Assessment & Planning</h3>
                    <p className="text-gray-600">
                      We analyze your current workflows and systems to create a tailored implementation plan that addresses your specific challenges.
                    </p>
                  </AnimatedElement>
                </div>
                
                {/* Item 2 */}
                <div className="flex flex-col md:flex-row items-start">
                  <AnimatedElement 
                    className="md:w-1/2 md:pr-12 md:text-right md:order-1 order-2"
                    animationType="fade-left"
                  >
                    <h3 className="text-xl font-bold mb-2">System Integration</h3>
                    <p className="text-gray-600">
                      Our technical team seamlessly integrates InsScrub AI with your existing EHR and practice management systems.
                    </p>
                  </AnimatedElement>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-insscrub-500 text-white shrink-0 md:mx-auto order-1 md:order-2">
                    <span className="font-bold">2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                </div>
                
                {/* Item 3 */}
                <div className="flex flex-col md:flex-row items-start">
                  <AnimatedElement 
                    className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right hidden md:block"
                    animationType="fade-right"
                  >
                    <h3 className="text-xl font-bold mb-2">Staff Training</h3>
                    <p className="text-gray-600">
                      Comprehensive training sessions ensure your team can fully leverage all features of the InsScrub AI platform.
                    </p>
                  </AnimatedElement>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-insscrub-500 text-white shrink-0 md:mx-auto">
                    <span className="font-bold">3</span>
                  </div>
                  <AnimatedElement 
                    className="md:w-1/2 md:pl-12 md:hidden"
                    animationType="fade-left"
                  >
                    <h3 className="text-xl font-bold mb-2">Staff Training</h3>
                    <p className="text-gray-600">
                      Comprehensive training sessions ensure your team can fully leverage all features of the InsScrub AI platform.
                    </p>
                  </AnimatedElement>
                </div>
                
                {/* Item 4 */}
                <div className="flex flex-col md:flex-row items-start">
                  <AnimatedElement 
                    className="md:w-1/2 md:pr-12 md:text-right md:order-1 order-2"
                    animationType="fade-left"
                  >
                    <h3 className="text-xl font-bold mb-2">Go-Live & Support</h3>
                    <p className="text-gray-600">
                      Our implementation team provides hands-on support during launch and monitors system performance to ensure a smooth transition.
                    </p>
                  </AnimatedElement>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-insscrub-500 text-white shrink-0 md:mx-auto order-1 md:order-2">
                    <span className="font-bold">4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 order-3 hidden md:block"></div>
                </div>
                
                {/* Item 5 */}
                <div className="flex flex-col md:flex-row items-start">
                  <AnimatedElement 
                    className="md:w-1/2 md:pr-12 mb-6 md:mb-0 text-right hidden md:block"
                    animationType="fade-right"
                  >
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing analysis and refinement to maximize the ROI of your InsScrub AI implementation as your practice evolves.
                    </p>
                  </AnimatedElement>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-insscrub-500 text-white shrink-0 md:mx-auto">
                    <span className="font-bold">5</span>
                  </div>
                  <AnimatedElement 
                    className="md:w-1/2 md:pl-12 md:hidden"
                    animationType="fade-left"
                  >
                    <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
                    <p className="text-gray-600">
                      Ongoing analysis and refinement to maximize the ROI of your InsScrub AI implementation as your practice evolves.
                    </p>
                  </AnimatedElement>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-insscrub-600 to-insscrub-800 text-white relative overflow-hidden">
        <CirclePattern className="bottom-0 left-0 text-white opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              InsScrub AI by the Numbers
            </h2>
            <p className="text-lg opacity-90">
              Quantifiable results that impact your bottom line.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="85%"
              label="Reduction in claim errors"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={100}
            />
            
            <StatsCard
              value="67%"
              label="Less time spent on insurance verification"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={200}
            />
            
            <StatsCard
              value="41%"
              label="Decrease in denials"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={300}
            />
            
            <StatsCard
              value="$1.2M"
              label="Average annual revenue increase"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              InsScrub AI in Action
            </h2>
            <p className="text-lg text-gray-600">
              See how healthcare providers are transforming their revenue cycle with our AI solutions.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AnimatedElement 
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
              delay={100}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold">MG</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Metropolitan General Hospital</h3>
                    <p className="text-gray-500">350-bed urban hospital</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">
                    Struggling with high denial rates and lengthy A/R cycles due to manual verification processes and coding errors.
                  </p>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-4">
                    Implemented InsScrub AI's verification and claims processing modules to automate key RCM workflows.
                  </p>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Reduced denial rate by 62% in first 90 days</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Decreased A/R days from 52 to 31</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Reallocated 4 FTEs to higher-value tasks</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="text-insscrub-600 font-medium inline-flex items-center hover:text-insscrub-700 transition-colors">
                  Read full case study <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
              delay={200}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-bold">CP</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Coastal Physicians Group</h3>
                    <p className="text-gray-500">Multi-specialty practice with 45 providers</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-600 mb-4">
                    Inconsistent insurance verification process leading to unexpected patient balances and collection issues.
                  </p>
                  <h4 className="font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-600 mb-4">
                    Deployed InsScrub AI's eligibility verification and patient cost estimation features.
                  </p>
                  <h4 className="font-semibold mb-2">Results:</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Increased point-of-service collections by 43%</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Reduced billing-related patient complaints by 67%</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                      <span>Improved staff satisfaction and reduced turnover</span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="text-insscrub-600 font-medium inline-flex items-center hover:text-insscrub-700 transition-colors">
                  Read full case study <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Common Questions About InsScrub AI
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about our intelligent automation solutions.
            </p>
          </AnimatedElement>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <AnimatedElement 
              className="bg-white rounded-xl p-6 shadow-sm"
              delay={100}
            >
              <h3 className="text-xl font-semibold mb-3">How long does implementation typically take?</h3>
              <p className="text-gray-600">
                Most implementations can be completed within 4-8 weeks, depending on the complexity of your existing systems and the specific modules being deployed. Our team works closely with your staff to ensure a smooth transition with minimal disruption.
              </p>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl p-6 shadow-sm"
              delay={200}
            >
              <h3 className="text-xl font-semibold mb-3">Can InsScrub AI integrate with our current EHR system?</h3>
              <p className="text-gray-600">
                Yes, InsScrub AI is designed to integrate with all major EHR and practice management systems including Epic, Cerner, Allscripts, athenahealth, and many more. Our team has extensive experience with healthcare IT integrations.
              </p>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl p-6 shadow-sm"
              delay={300}
            >
              <h3 className="text-xl font-semibold mb-3">How does InsScrub AI ensure HIPAA compliance?</h3>
              <p className="text-gray-600">
                InsScrub AI is built with HIPAA compliance as a core requirement. We implement robust encryption, access controls, audit trails, and data protection measures. Our platform undergoes regular security assessments and penetration testing to maintain the highest level of data security.
              </p>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl p-6 shadow-sm"
              delay={400}
            >
              <h3 className="text-xl font-semibold mb-3">What kind of ROI can we expect from implementing InsScrub AI?</h3>
              <p className="text-gray-600">
                Most clients see a return on their investment within 3-6 months of full implementation. This ROI comes from multiple areas: reduced denials, faster payment cycles, decreased administrative costs, and improved staff productivity. Our analytics tools help you track these improvements.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-insscrub-500 to-insscrub-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Revenue Cycle?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo to see how InsScrub AI can address your specific challenges and improve your financial performance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-insscrub-600 hover:bg-gray-100 transition-colors text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg px-8 py-6">
                  Contact Sales
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

export default ProductInsscrubAI;
