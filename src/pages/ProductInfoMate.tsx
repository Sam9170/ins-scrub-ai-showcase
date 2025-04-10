
import React from 'react';
import { ArrowRight, Check, BarChart3, PieChart, LineChart, TrendingUp, Activity, ArrowUpRight, AlertCircle, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';

const ProductInfoMate = () => {
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
                  AI-Powered <span className="text-gradient-accent">Healthcare Analytics</span> Platform
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Gain valuable insights into your revenue cycle with our comprehensive analytics and reporting capabilities, powered by advanced data science algorithms.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-accent hover:opacity-90 transition-opacity text-lg px-8 py-6">
                    Schedule Demo
                  </Button>
                  <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
                    Explore Features
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2">
              <AnimatedElement animationType="fade-right">
                <div className="relative">
                  <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto">
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
                      
                      <div className="h-40 w-full bg-gray-50 rounded-lg overflow-hidden relative mb-3">
                        <div className="absolute inset-0 flex items-end">
                          <div style={{height: '60%'}} className="w-1/12 bg-purple-200 mx-0.5"></div>
                          <div style={{height: '45%'}} className="w-1/12 bg-purple-300 mx-0.5"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-400 mx-0.5"></div>
                          <div style={{height: '55%'}} className="w-1/12 bg-purple-300 mx-0.5"></div>
                          <div style={{height: '80%'}} className="w-1/12 bg-purple-600 mx-0.5"></div>
                          <div style={{height: '65%'}} className="w-1/12 bg-purple-400 mx-0.5"></div>
                          <div style={{height: '75%'}} className="w-1/12 bg-purple-500 mx-0.5"></div>
                          <div style={{height: '85%'}} className="w-1/12 bg-purple-700 mx-0.5"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-500 mx-0.5"></div>
                          <div style={{height: '90%'}} className="w-1/12 bg-purple-800 mx-0.5"></div>
                          <div style={{height: '78%'}} className="w-1/12 bg-purple-600 mx-0.5"></div>
                          <div style={{height: '92%'}} className="w-1/12 bg-purple-900 mx-0.5 animate-pulse-slow"></div>
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
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Claims Submitted</p>
                        <div className="flex items-end justify-between">
                          <p className="text-lg font-bold">2,874</p>
                          <div className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center">
                            <ArrowUpRight size={10} className="mr-0.5" /> 8%
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 mb-1">Avg Days in A/R</p>
                        <div className="flex items-end justify-between">
                          <p className="text-lg font-bold">23.5</p>
                          <div className="px-1.5 py-0.5 rounded bg-green-100 text-green-600 text-xs font-medium flex items-center">
                            <ArrowUpRight size={10} className="mr-0.5" /> 12%
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
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
              delay={100}
            />
            
            <FeatureCard
              icon={<TrendingUp size={24} />}
              title="Predictive Analytics"
              description="AI-powered forecasting that accurately predicts cash flow, reimbursement patterns, and potential bottlenecks."
              iconClassName="bg-purple-100 text-purple-600"
              delay={200}
            />
            
            <FeatureCard
              icon={<Gauge size={24} />}
              title="Performance Benchmarking"
              description="Compare your metrics against industry standards and similar healthcare organizations to identify improvement opportunities."
              iconClassName="bg-purple-100 text-purple-600"
              delay={300}
            />
            
            <FeatureCard
              icon={<Activity size={24} />}
              title="Denial Analysis"
              description="Detailed insights into claim denial patterns with root cause identification and recommended corrections."
              iconClassName="bg-purple-100 text-purple-600"
              delay={400}
            />
            
            <FeatureCard
              icon={<PieChart size={24} />}
              title="Payer Performance Tracking"
              description="Monitor and compare payer behaviors, reimbursement rates, and processing times to optimize your payer mix."
              iconClassName="bg-purple-100 text-purple-600"
              delay={500}
            />
            
            <FeatureCard
              icon={<LineChart size={24} />}
              title="Custom Reporting"
              description="Create personalized reports and analytics views for different stakeholders in your organization."
              iconClassName="bg-purple-100 text-purple-600"
              delay={600}
            />
          </div>
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
              <AnimatedElement className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className="p-4 bg-purple-500 text-white flex justify-between items-center">
                  <h3 className="font-bold">Executive Dashboard</h3>
                  <div className="flex space-x-2">
                    <button className="p-1 hover:bg-white/10 rounded">
                      <BarChart3 size={16} />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded">
                      <LineChart size={16} />
                    </button>
                    <button className="p-1 hover:bg-white/10 rounded">
                      <PieChart size={16} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Net Collections</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">+12.3%</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">$1.24M</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{width: '78%'}}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span className="text-gray-500">$900K Target</span>
                        <span className="text-purple-600 font-medium">78% Complete</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">Avg Days in A/R</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">-4.2 days</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">23.8</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500" style={{width: '85%'}}></div>
                      </div>
                      <div className="flex justify-between mt-1 text-xs">
                        <span className="text-gray-500">30 days Target</span>
                        <span className="text-green-600 font-medium">85% Better</span>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-500">First Pass Resolution</h4>
                        <span className="px-2 py-0.5 rounded text-xs bg-green-100 text-green-600">+7.8%</span>
                      </div>
                      <p className="text-2xl font-bold mb-2">92.4%</p>
                      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-purple-500" style={{width: '92%'}}></div>
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
                      <div className="bg-gray-50 h-64 rounded-lg p-4 relative">
                        <div className="absolute inset-0 flex items-end p-4">
                          <div style={{height: '60%'}} className="w-1/12 bg-purple-200 mx-0.5"></div>
                          <div style={{height: '45%'}} className="w-1/12 bg-purple-300 mx-0.5"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-400 mx-0.5"></div>
                          <div style={{height: '55%'}} className="w-1/12 bg-purple-300 mx-0.5"></div>
                          <div style={{height: '80%'}} className="w-1/12 bg-purple-600 mx-0.5"></div>
                          <div style={{height: '65%'}} className="w-1/12 bg-purple-400 mx-0.5"></div>
                          <div style={{height: '75%'}} className="w-1/12 bg-purple-500 mx-0.5"></div>
                          <div style={{height: '85%'}} className="w-1/12 bg-purple-700 mx-0.5"></div>
                          <div style={{height: '70%'}} className="w-1/12 bg-purple-500 mx-0.5"></div>
                          <div style={{height: '90%'}} className="w-1/12 bg-purple-800 mx-0.5"></div>
                          <div style={{height: '78%'}} className="w-1/12 bg-purple-600 mx-0.5"></div>
                          <div style={{height: '92%'}} className="w-1/12 bg-purple-900 mx-0.5 animate-pulse-slow"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Denial Categories</h4>
                      <div className="bg-gray-50 h-64 rounded-lg p-4 relative">
                        <div className="relative h-full w-full">
                          <div className="absolute inset-0 rounded-full border-[16px] border-transparent" style={{
                            borderRightColor: '#9061F9',
                            borderBottomColor: '#9061F9',
                            transform: 'rotate(45deg)'
                          }}></div>
                          <div className="absolute inset-0 rounded-full border-[16px] border-transparent" style={{
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
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              delay={100}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Claims Dashboard</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">Claims by Status</h4>
                    <div className="h-32 bg-gray-50 rounded p-2 relative">
                      <div className="absolute inset-0 flex items-end p-2">
                        <div className="w-1/3 bg-green-500 h-[70%] rounded-sm"></div>
                        <div className="w-1/3 bg-yellow-400 h-[20%] rounded-sm"></div>
                        <div className="w-1/3 bg-red-400 h-[10%] rounded-sm"></div>
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
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              delay={200}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Provider Performance</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">RVU by Provider</h4>
                    <div className="h-32 bg-gray-50 rounded p-2">
                      <div className="h-full w-full flex items-end space-x-1">
                        <div className="h-[90%] bg-purple-600 w-1/5"></div>
                        <div className="h-[85%] bg-purple-500 w-1/5"></div>
                        <div className="h-[70%] bg-purple-400 w-1/5"></div>
                        <div className="h-[60%] bg-purple-300 w-1/5"></div>
                        <div className="h-[45%] bg-purple-200 w-1/5"></div>
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
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              delay={300}
            >
              <div className="p-3 bg-purple-500 text-white">
                <h3 className="font-bold text-sm">Payer Analytics</h3>
              </div>
              <div className="p-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-500 mb-1">Payment Time by Payer</h4>
                    <div className="h-32 bg-gray-50 rounded p-2"></div>
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
            <Button className="bg-gradient-accent hover:opacity-90 transition-opacity">
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
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={100}
            />
            
            <StatsCard
              value="94%"
              label="Forecasting accuracy"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={200}
            />
            
            <StatsCard
              value="40%"
              label="Reduction in denial-related revenue loss"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={300}
            />
            
            <StatsCard
              value="3.2x"
              label="ROI on InfoMate investment"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
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
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
              delay={100}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
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
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
              delay={200}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
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
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100"
              delay={300}
            >
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
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
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Data into Actionable Insights?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Schedule a personalized demo to see how InfoMate can help your organization optimize financial performance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg px-8 py-6">
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
