
import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  BarChart3, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  Activity, 
  ArrowUpRight, 
  AlertCircle, 
  Gauge, 
  Database, 
  Server, 
  Zap, 
  Users, 
  ArrowDownUp, 
  GitBranch, 
  Layers, 
  GitFork, 
  ChartPie, 
  SearchCheck, 
  Workflow,
  CircleDollarSign,
  Clock,
  Shield,
  Lock,
  Key,
  Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';

const ProductInfoMate = () => {
  const [activeMetric, setActiveMetric] = useState('revenue');

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100">
        <CirclePattern className="top-0 right-0 text-purple-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
                  InfoMate
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  AI-Powered <span className="text-gradient-accent animate-pulse-slow">Healthcare Analytics</span> Platform
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Gain valuable insights into your revenue cycle with our comprehensive analytics and reporting capabilities, powered by advanced data science algorithms.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-accent hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                    Explore Features
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto transition-all duration-500 hover:shadow-2xl hover:translate-y-[-8px]">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-xs font-medium">
                        Revenue Dashboard
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-800">Revenue Performance</h3>
                        <div className="px-2 py-1 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center">
                          <ArrowUpRight size={12} className="mr-1" /> 12.4%
                        </div>
                      </div>
                      
                      <div className="h-40 w-full bg-gray-50 rounded-lg overflow-hidden relative mb-3 transition-all duration-300 hover:bg-gray-100">
                        <div className="absolute inset-0 flex items-end">
                          <div style={{height: '60%'}} className="w-1/12 bg-purple-200 mx-0.5 transition-all duration-500 hover:bg-purple-300 hover:h-[65%]"></div>
                          <div style={{height: '45%'}} className="w-1/12 bg-purple-300 mx-0.5 transition-all duration-500 hover:bg-purple-400 hover:h-[50%]"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-400 mx-0.5 transition-all duration-500 hover:bg-purple-500 hover:h-[75%]"></div>
                          <div style={{height: '55%'}} className="w-1/12 bg-purple-300 mx-0.5 transition-all duration-500 hover:bg-purple-400 hover:h-[60%]"></div>
                          <div style={{height: '80%'}} className="w-1/12 bg-purple-600 mx-0.5 transition-all duration-500 hover:bg-purple-700 hover:h-[85%]"></div>
                          <div style={{height: '65%'}} className="w-1/12 bg-purple-400 mx-0.5 transition-all duration-500 hover:bg-purple-500 hover:h-[70%]"></div>
                          <div style={{height: '75%'}} className="w-1/12 bg-purple-500 mx-0.5 transition-all duration-500 hover:bg-purple-600 hover:h-[80%]"></div>
                          <div style={{height: '85%'}} className="w-1/12 bg-purple-700 mx-0.5 transition-all duration-500 hover:bg-purple-800 hover:h-[90%]"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-500 mx-0.5 transition-all duration-500 hover:bg-purple-600 hover:h-[75%]"></div>
                          <div style={{height: '90%'}} className="w-1/12 bg-purple-800 mx-0.5 transition-all duration-500 hover:bg-purple-900 hover:h-[95%]"></div>
                          <div style={{height: '78%'}} className="w-1/12 bg-purple-600 mx-0.5 transition-all duration-500 hover:bg-purple-700 hover:h-[83%]"></div>
                          <div style={{height: '92%'}} className="w-1/12 bg-purple-900 mx-0.5 animate-pulse-slow transition-all duration-500 hover:h-[97%]"></div>
                        </div>
                        
                        <div className="absolute top-0 left-0 right-0 h-px bg-gray-200"></div>
                        <div className="absolute top-1/4 left-0 right-0 h-px bg-gray-200"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
                        <div className="absolute top-3/4 left-0 right-0 h-px bg-gray-200"></div>
                      </div>
                      
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Jan</span>
                        <span>Apr</span>
                        <span>Jul</span>
                        <span>Dec</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-purple-50 hover:shadow-md">
                        <p className="text-xs text-gray-500 mb-1">Claims Submitted</p>
                        <div className="flex items-end justify-between">
                          <p className="text-lg font-bold">2,874</p>
                          <div className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center">
                            <ArrowUpRight size={10} className="mr-0.5" /> 8%
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 transition-all duration-300 hover:bg-purple-50 hover:shadow-md">
                        <p className="text-xs text-gray-500 mb-1">Avg Days in A/R</p>
                        <div className="flex items-end justify-between">
                          <p className="text-lg font-bold">23.5</p>
                          <div className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center">
                            <ArrowUpRight size={10} className="mr-0.5" /> 12%
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500 transition-all duration-300 hover:bg-purple-100">
                      <div className="flex items-center mb-1">
                        <AlertCircle size={14} className="text-purple-600 mr-1" />
                        <p className="text-xs font-semibold text-purple-700">AI Insight</p>
                      </div>
                      <p className="text-xs text-gray-700">
                        Your denial rate for cardiology procedures has decreased by 14% since implementing the new pre-authorization workflow.
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-yellow-500 rounded-xl opacity-20 animate-rotate-slow"></div>
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-float"></div>
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
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Key Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Data-Driven Insights
            </h2>
            <p className="text-lg text-gray-600">
              InfoMate transforms your revenue cycle data into actionable insights, enabling informed decision-making and proactive financial management.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<BarChart3 size={24} />}
              title="Comprehensive Dashboards"
              description="Interactive visualizations that provide at-a-glance understanding of key performance metrics and trends."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={100}
            />
            
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Predictive Analytics"
              description="AI-powered forecasting that accurately predicts cash flow, reimbursement patterns, and potential bottlenecks."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={200}
            />
            
            <FeatureCard
              icon={<Gauge size={24} />}
              title="Performance Benchmarking"
              description="Compare your metrics against industry standards and similar healthcare organizations to identify improvement opportunities."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={300}
            />
            
            <FeatureCard
              icon={<Activity size={24} />}
              title="Denial Analysis"
              description="Detailed insights into claim denial patterns with root cause identification and recommended corrections."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={400}
            />
            
            <FeatureCard
              icon={<PieChart size={24} />}
              title="Payer Performance Tracking"
              description="Monitor and compare payer behaviors, reimbursement rates, and processing times to optimize your payer mix."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={500}
            />
            
            <FeatureCard
              icon={<LineChart size={24} />}
              title="Custom Reporting"
              description="Create personalized reports and analytics views for different stakeholders in your organization."
              iconClassName="bg-purple-100 text-purple-600"
              className="transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Interactive Analytics Demo Section - NEW */}
      <section className="py-20 bg-purple-50 relative overflow-hidden">
        <CirclePattern className="top-0 left-0 text-purple-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Interactive Demo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Explore Our Analytics Platform
            </h2>
            <p className="text-lg text-gray-600">
              Get a feel for InfoMate's powerful analytics capabilities with our interactive demo. Select different metrics to see the data visualization change.
            </p>
          </AnimatedElement>
          
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <h3 className="text-xl font-bold mb-4">Select a Metric</h3>
                <div className="space-y-3">
                  <button 
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeMetric === 'revenue' ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 hover:bg-purple-50 text-gray-700'}`}
                    onClick={() => setActiveMetric('revenue')}
                  >
                    <CircleDollarSign size={20} className={activeMetric === 'revenue' ? 'text-purple-600' : 'text-gray-500'} />
                    <span>Revenue Performance</span>
                  </button>
                  
                  <button 
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeMetric === 'denials' ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 hover:bg-purple-50 text-gray-700'}`}
                    onClick={() => setActiveMetric('denials')}
                  >
                    <AlertCircle size={20} className={activeMetric === 'denials' ? 'text-purple-600' : 'text-gray-500'} />
                    <span>Denial Analysis</span>
                  </button>
                  
                  <button 
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeMetric === 'ar' ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 hover:bg-purple-50 text-gray-700'}`}
                    onClick={() => setActiveMetric('ar')}
                  >
                    <Clock size={20} className={activeMetric === 'ar' ? 'text-purple-600' : 'text-gray-500'} />
                    <span>Days in A/R</span>
                  </button>
                  
                  <button 
                    className={`w-full text-left p-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${activeMetric === 'payers' ? 'bg-purple-100 text-purple-700' : 'bg-gray-50 hover:bg-purple-50 text-gray-700'}`}
                    onClick={() => setActiveMetric('payers')}
                  >
                    <Users size={20} className={activeMetric === 'payers' ? 'text-purple-600' : 'text-gray-500'} />
                    <span>Payer Performance</span>
                  </button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="bg-gray-50 p-4 rounded-xl h-80 relative">
                  {activeMetric === 'revenue' && (
                    <AnimatedElement className="h-full" animationType="fade-up">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Monthly Revenue Trend</h4>
                        <div className="flex space-x-2">
                          <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">2023</span>
                          <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">2024</span>
                        </div>
                      </div>
                      <div className="h-[85%] w-full relative">
                        <div className="absolute inset-0 flex items-end justify-around pb-8">
                          <div className="flex flex-col items-center">
                            <div style={{height: '60%'}} className="w-8 bg-purple-400 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-500 hover:h-[65%]"></div>
                            <span className="text-xs text-gray-500">Jan</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div style={{height: '75%'}} className="w-8 bg-purple-500 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-600 hover:h-[80%]"></div>
                            <span className="text-xs text-gray-500">Feb</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div style={{height: '65%'}} className="w-8 bg-purple-400 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-500 hover:h-[70%]"></div>
                            <span className="text-xs text-gray-500">Mar</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div style={{height: '85%'}} className="w-8 bg-purple-600 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-700 hover:h-[90%]"></div>
                            <span className="text-xs text-gray-500">Apr</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div style={{height: '90%'}} className="w-8 bg-purple-700 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-800 hover:h-[95%]"></div>
                            <span className="text-xs text-gray-500">May</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div style={{height: '80%'}} className="w-8 bg-purple-600 rounded-t-sm mb-2 transition-all duration-500 hover:bg-purple-700 hover:h-[85%]"></div>
                            <span className="text-xs text-gray-500">Jun</span>
                          </div>
                        </div>
                        
                        <div className="absolute inset-x-0 top-0 h-px bg-gray-200"></div>
                        <div className="absolute inset-x-0 top-1/4 h-px bg-gray-200"></div>
                        <div className="absolute inset-x-0 top-1/2 h-px bg-gray-200"></div>
                        <div className="absolute inset-x-0 top-3/4 h-px bg-gray-200"></div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200"></div>
                        
                        <div className="absolute top-0 -left-10 text-xs text-gray-500">$1.5M</div>
                        <div className="absolute top-1/4 -left-10 text-xs text-gray-500">$1.0M</div>
                        <div className="absolute top-1/2 -left-10 text-xs text-gray-500">$0.5M</div>
                        <div className="absolute bottom-0 -left-10 text-xs text-gray-500">$0</div>
                      </div>
                    </AnimatedElement>
                  )}
                  
                  {activeMetric === 'denials' && (
                    <AnimatedElement className="h-full" animationType="fade-up">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Denials by Reason</h4>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Last 90 Days</span>
                      </div>
                      <div className="h-[85%] flex items-center justify-center">
                        <div className="w-56 h-56 relative">
                          <div className="absolute inset-0 rounded-full border-[20px] border-purple-700 animate-pulse-slow"></div>
                          <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-t-purple-500 border-r-purple-500 transform rotate-45"></div>
                          <div className="absolute inset-0 rounded-full border-[20px] border-transparent border-b-purple-300 transform rotate-[190deg]"></div>
                          <div className="absolute inset-2 rounded-full bg-gray-50 flex items-center justify-center">
                            <div className="text-center">
                              <p className="text-lg font-bold text-gray-800">342</p>
                              <p className="text-xs text-gray-500">Total Denials</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 ml-6">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-700 mr-2"></div>
                            <span className="text-sm">Eligibility (42%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 mr-2"></div>
                            <span className="text-sm">Medical Necessity (28%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-300 mr-2"></div>
                            <span className="text-sm">Coding Errors (18%)</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-gray-300 mr-2"></div>
                            <span className="text-sm">Other (12%)</span>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  )}
                  
                  {activeMetric === 'ar' && (
                    <AnimatedElement className="h-full" animationType="fade-up">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Days in A/R by Specialty</h4>
                        <div className="flex space-x-2">
                          <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Under Target</span>
                          <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded-full">Over Target</span>
                        </div>
                      </div>
                      <div className="h-[85%] w-full relative">
                        <div className="absolute inset-0 flex flex-col justify-around pt-3 pb-8">
                          <div className="flex items-center">
                            <span className="w-24 text-sm">Cardiology</span>
                            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 transition-all duration-500 hover:bg-green-600" style={{width: '68%'}}></div>
                            </div>
                            <span className="ml-2 text-sm">25.4</span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="w-24 text-sm">Orthopedics</span>
                            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 transition-all duration-500 hover:bg-green-600" style={{width: '73%'}}></div>
                            </div>
                            <span className="ml-2 text-sm">28.9</span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="w-24 text-sm">Oncology</span>
                            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 transition-all duration-500 hover:bg-red-600" style={{width: '85%'}}></div>
                            </div>
                            <span className="ml-2 text-sm">34.2</span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="w-24 text-sm">Neurology</span>
                            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 transition-all duration-500 hover:bg-green-600" style={{width: '59%'}}></div>
                            </div>
                            <span className="ml-2 text-sm">23.8</span>
                          </div>
                          
                          <div className="flex items-center">
                            <span className="w-24 text-sm">Radiology</span>
                            <div className="flex-1 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 transition-all duration-500 hover:bg-red-600" style={{width: '92%'}}></div>
                            </div>
                            <span className="ml-2 text-sm">38.5</span>
                          </div>
                        </div>
                        
                        <div className="absolute inset-x-0 top-0 h-px bg-gray-200"></div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-200"></div>
                        
                        <div className="absolute bottom-2 w-full flex justify-between px-24">
                          <div className="h-6 w-px bg-gray-300 relative">
                            <span className="absolute -top-6 -left-5 text-xs text-gray-500">0</span>
                          </div>
                          <div className="h-6 w-px bg-gray-300 relative">
                            <span className="absolute -top-6 -left-5 text-xs text-gray-500">10</span>
                          </div>
                          <div className="h-6 w-px bg-gray-300 relative">
                            <span className="absolute -top-6 -left-5 text-xs text-gray-500">20</span>
                          </div>
                          <div className="h-6 w-px bg-purple-400 relative">
                            <span className="absolute -top-6 -left-10 text-xs text-purple-700 font-medium">Target: 30</span>
                          </div>
                          <div className="h-6 w-px bg-gray-300 relative">
                            <span className="absolute -top-6 -left-5 text-xs text-gray-500">40</span>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  )}
                  
                  {activeMetric === 'payers' && (
                    <AnimatedElement className="h-full" animationType="fade-up">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-semibold">Payer Performance Comparison</h4>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">Last Quarter</span>
                      </div>
                      <div className="h-[85%] w-full flex items-center">
                        <div className="flex-1 h-full flex items-end justify-around px-8 pb-8">
                          <div className="space-y-1 text-center">
                            <div className="relative flex flex-col space-y-1 items-center">
                              <div style={{height: '85%'}} className="w-12 bg-purple-700 rounded-t-sm transition-all duration-500 hover:bg-purple-800"></div>
                              <div style={{height: '70%'}} className="w-12 bg-purple-500 rounded-t-sm transition-all duration-500 hover:bg-purple-600"></div>
                              <div style={{height: '50%'}} className="w-12 bg-purple-300 rounded-t-sm transition-all duration-500 hover:bg-purple-400"></div>
                            </div>
                            <span className="text-xs text-gray-500">BCBS</span>
                          </div>
                          
                          <div className="space-y-1 text-center">
                            <div className="relative flex flex-col space-y-1 items-center">
                              <div style={{height: '80%'}} className="w-12 bg-purple-700 rounded-t-sm transition-all duration-500 hover:bg-purple-800"></div>
                              <div style={{height: '60%'}} className="w-12 bg-purple-500 rounded-t-sm transition-all duration-500 hover:bg-purple-600"></div>
                              <div style={{height: '55%'}} className="w-12 bg-purple-300 rounded-t-sm transition-all duration-500 hover:bg-purple-400"></div>
                            </div>
                            <span className="text-xs text-gray-500">Cigna</span>
                          </div>
                          
                          <div className="space-y-1 text-center">
                            <div className="relative flex flex-col space-y-1 items-center">
                              <div style={{height: '95%'}} className="w-12 bg-purple-700 rounded-t-sm transition-all duration-500 hover:bg-purple-800"></div>
                              <div style={{height: '65%'}} className="w-12 bg-purple-500 rounded-t-sm transition-all duration-500 hover:bg-purple-600"></div>
                              <div style={{height: '40%'}} className="w-12 bg-purple-300 rounded-t-sm transition-all duration-500 hover:bg-purple-400"></div>
                            </div>
                            <span className="text-xs text-gray-500">Medicare</span>
                          </div>
                          
                          <div className="space-y-1 text-center">
                            <div className="relative flex flex-col space-y-1 items-center">
                              <div style={{height: '75%'}} className="w-12 bg-purple-700 rounded-t-sm transition-all duration-500 hover:bg-purple-800"></div>
                              <div style={{height: '55%'}} className="w-12 bg-purple-500 rounded-t-sm transition-all duration-500 hover:bg-purple-600"></div>
                              <div style={{height: '45%'}} className="w-12 bg-purple-300 rounded-t-sm transition-all duration-500 hover:bg-purple-400"></div>
                            </div>
                            <span className="text-xs text-gray-500">Aetna</span>
                          </div>
                        </div>
                        
                        <div className="w-32 space-y-3">
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-700 mr-2"></div>
                            <span className="text-xs">Payment %</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-500 mr-2"></div>
                            <span className="text-xs">Avg Days</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 bg-purple-300 mr-2"></div>
                            <span className="text-xs">Denial %</span>
                          </div>
                        </div>
                      </div>
                    </AnimatedElement>
                  )}
                </div>
                
                <div className="bg-purple-50 p-3 rounded-lg mt-3 border-l-4 border-purple-500">
                  <div className="flex items-center mb-1">
                    <Zap size={14} className="text-purple-600 mr-1" />
                    <p className="text-xs font-semibold text-purple-700">AI Insight</p>
                  </div>
                  <p className="text-xs text-gray-700">
                    {activeMetric === 'revenue' && "Based on current trends, we project a 15% revenue increase in Q3 if you maintain the current clean claim rate above 95%."}
                    {activeMetric === 'denials' && "Eligibility denials have decreased 8% month-over-month since implementing the new pre-registration verification process."}
                    {activeMetric === 'ar' && "Consider reviewing the Radiology department's workflows; their A/R days exceed the target by 28% and are trending upward."}
                    {activeMetric === 'payers' && "Medicare shows the highest payment rate but also the longest payment time. Consider adjusting claim submission timing to optimize cash flow."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Data Integration Section - NEW */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Technology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamless Data Integration
            </h2>
            <p className="text-lg text-gray-600">
              InfoMate connects to your existing systems to provide a comprehensive view of your revenue cycle data without disrupting your workflows.
            </p>
          </AnimatedElement>
          
          <Tabs defaultValue="architecture" className="w-full max-w-5xl mx-auto">
            <TabsList className="w-full justify-evenly mb-6">
              <TabsTrigger value="architecture" className="flex-1 py-3 text-base">System Architecture</TabsTrigger>
              <TabsTrigger value="security" className="flex-1 py-3 text-base">Data Security</TabsTrigger>
              <TabsTrigger value="api" className="flex-1 py-3 text-base">API & Connectivity</TabsTrigger>
            </TabsList>
            
            <TabsContent value="architecture" className="p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Modular Architecture</h3>
                  <p className="text-gray-600 mb-5">
                    InfoMate is built on a modern, microservices-based architecture that ensures scalability, reliability, and easy integration with your existing systems.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Server size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Distributed processing of large datasets without performance degradation</span>
                    </li>
                    <li className="flex items-start">
                      <Database size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Automatic data synchronization with minimal maintenance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <GitBranch size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Flexible deployment options: cloud-hosted, on-premise, or hybrid</span>
                    </li>
                    <li className="flex items-start">
                      <Layers size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Multiple integration methods to match your technical capabilities</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                    <div className="w-full max-w-xs mx-auto relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Database size={24} className="text-purple-600" />
                      </div>
                      
                      <div className="pt-20 grid grid-cols-3 gap-3">
                        <div className="col-span-3 flex justify-center">
                          <ArrowDownUp size={18} className="text-purple-400" />
                        </div>
                        
                        <div className="bg-purple-50 p-2 rounded flex items-center justify-center">
                          <GitFork size={18} className="text-purple-500" />
                        </div>
                        <div className="bg-purple-50 p-2 rounded flex items-center justify-center">
                          <GitFork size={18} className="text-purple-500" />
                        </div>
                        <div className="bg-purple-50 p-2 rounded flex items-center justify-center">
                          <GitFork size={18} className="text-purple-500" />
                        </div>
                        
                        <div className="col-span-3 flex justify-center">
                          <ArrowDownUp size={18} className="text-purple-400" />
                        </div>
                        
                        <div className="col-span-3 flex space-x-4 justify-center">
                          <div className="w-10 h-10 bg-purple-200 rounded flex items-center justify-center animate-pulse-slow">
                            <ChartPie size={18} className="text-purple-700" />
                          </div>
                          <div className="w-10 h-10 bg-purple-200 rounded flex items-center justify-center animate-pulse-slow" style={{animationDelay: '0.3s'}}>
                            <BarChart3 size={18} className="text-purple-700" />
                          </div>
                          <div className="w-10 h-10 bg-purple-200 rounded flex items-center justify-center animate-pulse-slow" style={{animationDelay: '0.6s'}}>
                            <LineChart size={18} className="text-purple-700" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Enterprise-Grade Security</h3>
                  <p className="text-gray-600 mb-5">
                    InfoMate employs multiple layers of security to protect your sensitive healthcare data and maintain compliance with regulatory requirements.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Shield size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">HIPAA-compliant data handling with end-to-end encryption</span>
                    </li>
                    <li className="flex items-start">
                      <SearchCheck size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Regular security audits and penetration testing</span>
                    </li>
                    <li className="flex items-start">
                      <Users size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Role-based access controls with detailed permission management</span>
                    </li>
                    <li className="flex items-start">
                      <Workflow size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Comprehensive audit logs for all data access and modifications</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]">
                    <div className="relative w-full max-w-xs mx-auto h-40">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-purple-200 flex items-center justify-center animate-rotate-slow">
                          <div className="w-24 h-24 rounded-full border-2 border-purple-300 flex items-center justify-center animate-rotate-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}>
                            <div className="w-16 h-16 rounded-full border-2 border-purple-400 flex items-center justify-center animate-rotate-slow" style={{animationDuration: '10s'}}>
                              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                                <Shield size={18} className="text-white" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Lock size={14} className="text-purple-600" />
                      </div>
                      
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Key size={14} className="text-purple-600" />
                      </div>
                      
                      <div className="absolute bottom-0 left-16 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users size={14} className="text-purple-600" />
                      </div>
                      
                      <div className="absolute top-10 right-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Eye size={14} className="text-purple-600" />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Security Level:</span>
                        <span className="text-purple-700 font-medium">Enterprise</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full mt-1 overflow-hidden">
                        <div className="h-full bg-purple-600 w-[95%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="p-6 bg-gray-50 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Powerful API Ecosystem</h3>
                  <p className="text-gray-600 mb-5">
                    InfoMate provides robust APIs and pre-built connectors that make integration with your existing healthcare systems simple and efficient.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">RESTful API with comprehensive documentation and developer sandbox</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Pre-built connectors for leading EHR and practice management systems</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">FHIR-compliant data exchange for healthcare interoperability</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={18} className="text-purple-500 mt-1 mr-2 shrink-0" />
                      <span className="text-gray-600">Bi-directional data synchronization with real-time updates</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="bg-gray-800 p-4 rounded-lg w-full font-mono text-xs text-green-400 shadow-md">
                    <div className="mb-3 text-gray-400"># Example API Request</div>
                    <div>GET /api/v1/analytics/revenue</div>
                    <div className="text-gray-500">Authorization: Bearer {'{jwt-token}'}</div>
                    <div className="text-gray-500">Content-Type: application/json</div>
                    <div className="mt-4 mb-2 text-gray-400"># Response</div>
                    <div>{`{`}</div>
                    <div className="ml-4">{`"status": "success",`}</div>
                    <div className="ml-4">{`"data": {`}</div>
                    <div className="ml-8">{`"totalRevenue": 1245780.50,`}</div>
                    <div className="ml-8">{`"period": "Q2-2023",`}</div>
                    <div className="ml-8">{`"growthRate": 12.4,`}</div>
                    <div className="ml-8">{`"breakdown": [`}</div>
                    <div className="ml-12">{`{ "category": "Inpatient", "amount": 654321.25 },`}</div>
                    <div className="ml-12">{`{ "category": "Outpatient", "amount": 456782.75 },`}</div>
                    <div className="ml-12">{`{ "category": "Other", "amount": 134676.50 }`}</div>
                    <div className="ml-8">{`]`}</div>
                    <div className="ml-4">{`}`}</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Reports & Dashboards Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <CirclePattern className="top-0 left-0 text-purple-100" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Reporting Suite
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Analytics Dashboards
            </h2>
            <p className="text-lg text-gray-600">
              InfoMate offers a comprehensive suite of pre-built dashboards designed specifically for healthcare RCM.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-3">
              <AnimatedElement className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-xl">
                <div className="p-4 bg-purple-500 text-white flex justify-between items-center">
                  <h3 className="font-bold">Executive Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      <BarChart3 size={16} />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      <LineChart size={16} />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      <PieChart size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-purple-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Net Collections</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">+12.3%</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">$1.24M</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 transition-all duration-700" style={{width: '78%'}}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span className="text-gray-500">$900K Target</span>
                        <span className="text-purple-600 font-medium">78% Complete</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-green-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Avg Days in A/R</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">-4.2 days</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">23.8</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 transition-all duration-700" style={{width: '85%'}}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span className="text-gray-500">30 days Target</span>
                        <span className="text-green-600 font-medium">85% Better</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-purple-50">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">First Pass Resolution</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">+7.8%</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">92.4%</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500 transition-all duration-700" style={{width: '92%'}}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span className="text-gray-500">85% Target</span>
                        <span className="text-purple-600 font-medium">Exceeding</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2">
                      <h4 className="font-medium mb-3">Monthly Revenue Trend</h4>
                      <div className="bg-gray-50 h-64 rounded-lg p-4 relative transition-all duration-300 hover:bg-gray-100">
                        <div className="absolute inset-0 flex items-end p-4">
                          <div style={{height: '60%'}} className="w-1/12 bg-purple-200 mx-0.5 transition-all duration-500 hover:h-[65%] hover:bg-purple-300"></div>
                          <div style={{height: '45%'}} className="w-1/12 bg-purple-300 mx-0.5 transition-all duration-500 hover:h-[50%] hover:bg-purple-400"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-400 mx-0.5 transition-all duration-500 hover:h-[75%] hover:bg-purple-500"></div>
                          <div style={{height: '55%'}} className="w-1/12 bg-purple-300 mx-0.5 transition-all duration-500 hover:h-[60%] hover:bg-purple-400"></div>
                          <div style={{height: '80%'}} className="w-1/12 bg-purple-600 mx-0.5 transition-all duration-500 hover:h-[85%] hover:bg-purple-700"></div>
                          <div style={{height: '65%'}} className="w-1/12 bg-purple-400 mx-0.5 transition-all duration-500 hover:h-[70%] hover:bg-purple-500"></div>
                          <div style={{height: '75%'}} className="w-1/12 bg-purple-500 mx-0.5 transition-all duration-500 hover:h-[80%] hover:bg-purple-600"></div>
                          <div style={{height: '85%'}} className="w-1/12 bg-purple-700 mx-0.5 transition-all duration-500 hover:h-[90%] hover:bg-purple-800"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-500 mx-0.5 transition-all duration-500 hover:h-[75%] hover:bg-purple-600"></div>
                          <div style={{height: '90%'}} className="w-1/12 bg-purple-800 mx-0.5 transition-all duration-500 hover:h-[95%] hover:bg-purple-900"></div>
                          <div style={{height: '78%'}} className="w-1/12 bg-purple-600 mx-0.5 transition-all duration-500 hover:h-[83%] hover:bg-purple-700"></div>
                          <div style={{height: '92%'}} className="w-1/12 bg-purple-900 mx-0.5 animate-pulse-slow transition-all duration-500 hover:h-[97%]"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Denial Categories</h4>
                      <div className="bg-gray-50 h-64 rounded-lg p-4 relative transition-all duration-300 hover:bg-purple-50">
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 rounded-full border-[16px] border-transparent transition-all duration-500 hover:border-[18px]" style={{
                            borderRightColor: '#9061F9',
                            borderBottomColor: '#9061F9',
                            transform: 'rotate(45deg)'
                          }}></div>
                          <div className="absolute inset-0 rounded-full border-[16px] border-transparent transition-all duration-500 hover:border-[18px]" style={{
                            borderTopColor: '#6D28D9',
                            borderLeftColor: '#6D28D9',
                            transform: 'rotate(45deg)'
                          }}></div>
                          <div className="absolute inset-2 rounded-full bg-gray-50"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-3xl font-bold">62%</div>
                              <div className="text-xs text-gray-500">Eligibility</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <AnimatedElement 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={100}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Claims Dashboard</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">Claims by Status</h4>
                    <div className="h-32 bg-gray-50 rounded p-2 relative transition-all duration-300 hover:bg-gray-100">
                      <div className="absolute inset-0 flex items-end p-2">
                        <div className="w-1/3 bg-green-500 h-[70%] rounded-sm transition-all duration-500 hover:h-[73%] hover:bg-green-600"></div>
                        <div className="w-1/3 bg-yellow-400 h-[20%] rounded-sm transition-all duration-500 hover:h-[23%] hover:bg-yellow-500"></div>
                        <div className="w-1/3 bg-red-400 h-[10%] rounded-sm transition-all duration-500 hover:h-[13%] hover:bg-red-500"></div>
                      </div>
                    </div>
                    <div className="flex text-xs mt-2 justify-between">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                        <span>Paid (70%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mr-1"></div>
                        <span>Pending (20%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
                        <span>Denied (10%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={200}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Provider Performance</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">RVU by Provider</h4>
                    <div className="h-32 bg-gray-50 rounded p-2 transition-all duration-300 hover:bg-gray-100">
                      <div className="h-full w-full flex items-end space-x-1">
                        <div className="h-[90%] bg-purple-600 w-1/5 transition-all duration-500 hover:h-[93%] hover:bg-purple-700"></div>
                        <div className="h-[85%] bg-purple-500 w-1/5 transition-all duration-500 hover:h-[88%] hover:bg-purple-600"></div>
                        <div className="h-[70%] bg-purple-400 w-1/5 transition-all duration-500 hover:h-[73%] hover:bg-purple-500"></div>
                        <div className="h-[60%] bg-purple-300 w-1/5 transition-all duration-500 hover:h-[63%] hover:bg-purple-400"></div>
                        <div className="h-[45%] bg-purple-200 w-1/5 transition-all duration-500 hover:h-[48%] hover:bg-purple-300"></div>
                      </div>
                    </div>
                    <div className="flex text-xs mt-2 justify-between">
                      <span>Dr. Smith</span>
                      <span>Dr. Jones</span>
                      <span>Dr. Lee</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
              delay={300}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Payer Analytics</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">Payment Time by Payer</h4>
                    <div className="h-32 bg-gray-50 rounded p-2 transition-all duration-300 hover:bg-gray-100 relative">
                      <div className="absolute inset-0 flex items-end justify-around p-2">
                        <div className="w-1/4 bg-purple-300 h-[40%] transition-all duration-500 hover:h-[43%] hover:bg-purple-400"></div>
                        <div className="w-1/4 bg-purple-500 h-[70%] transition-all duration-500 hover:h-[73%] hover:bg-purple-600"></div>
                        <div className="w-1/4 bg-purple-400 h-[50%] transition-all duration-500 hover:h-[53%] hover:bg-purple-500"></div>
                        <div className="w-1/4 bg-purple-600 h-[85%] transition-all duration-500 hover:h-[88%] hover:bg-purple-700"></div>
                      </div>
                    </div>
                    <div className="flex text-xs mt-2 justify-between">
                      <span>BlueCross</span>
                      <span>Medicare</span>
                      <span>Aetna</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-gradient-accent hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explore All Analytics Features
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <CirclePattern className="bottom-0 left-0 text-white opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Impact of InfoMate
            </h2>
            <p className="text-lg opacity-90">
              Healthcare organizations using InfoMate see substantial improvements in financial performance.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="27%"
              label="Average revenue increase"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              delay={100}
            />
            
            <StatsCard
              value="94%"
              label="Forecasting accuracy"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              delay={200}
            />
            
            <StatsCard
              value="40%"
              label="Reduction in denial-related revenue loss"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              delay={300}
            />
            
            <StatsCard
              value="3.2x"
              label="ROI on InfoMate investment"
              className="bg-white/10 backdrop-blur-sm text-white border-none transition-all duration-300 hover:bg-white/20 transform hover:scale-105"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Applications
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How Healthcare Organizations Use InfoMate
            </h2>
            <p className="text-lg text-gray-600">
              Discover how different stakeholders leverage InfoMate's analytical capabilities.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <AnimatedElement 
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]"
              delay={100}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-purple-200 hover:text-purple-700">
                  <span className="font-bold">C</span>
                </div>
                <h3 className="text-xl font-bold mb-3">For C-Suite Executives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">High-level financial performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Revenue forecasting and trend analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Strategic decision support with AI-driven recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Competitive benchmarking against industry standards</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]"
              delay={200}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-purple-200 hover:text-purple-700">
                  <span className="font-bold">R</span>
                </div>
                <h3 className="text-xl font-bold mb-3">For Revenue Cycle Managers</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Detailed claim status tracking and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Denial management and prevention insights</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Staff productivity and efficiency metrics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Workflow optimization recommendations</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]"
              delay={300}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-purple-200 hover:text-purple-700">
                  <span className="font-bold">P</span>
                </div>
                <h3 className="text-xl font-bold mb-3">For Practice Administrators</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Provider performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Service line profitability analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Patient satisfaction and financial experience metrics</span>
                  </li>
                  <li className="flex items-start">
                    <Check size={16} className="text-purple-500 mt-1 mr-2 shrink-0" />
                    <span className="text-gray-600">Resource allocation and scheduling optimization</span>
                  </li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.01]">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Data into Actionable Insights?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo to see how InfoMate can help your organization optimize financial performance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6">
                  Talk to an Expert
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

export default ProductInfoMate;
