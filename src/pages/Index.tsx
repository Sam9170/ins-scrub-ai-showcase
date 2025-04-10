
import React from 'react';
import { ArrowRight, BarChart3, Shield, Zap, CheckCircle, Database, FileText, Brain, Clock, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import FeatureCard from '@/components/FeatureCard';
import StatsCard from '@/components/StatsCard';
import TestimonialCard from '@/components/TestimonialCard';
import WavePattern from '@/components/icons/WavePattern';
import CirclePattern from '@/components/icons/CirclePattern';
import HeroIllustration from '@/components/icons/HeroIllustration';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <CirclePattern className="top-0 right-0 text-insscrub-300" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement>
                <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
                  AI-Powered Healthcare RCM
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Revolutionize your <span className="text-gradient-primary">Revenue Cycle</span> with InsScrub AI
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Automating billing and revenue processes to enhance financial performance 
                  and reduce administrative burdens for healthcare providers.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                    Get Started
                  </Button>
                  <Button variant="outline" className="border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50 text-lg px-8 py-6">
                    Book Demo
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            <div className="md:w-1/2 relative h-80 md:h-[500px]">
              <AnimatedElement 
                animationType="fade-right"
                className="h-full"
              >
                <HeroIllustration />
              </AnimatedElement>
            </div>
          </div>
        </div>
        <WavePattern className="text-white" />
      </section>
      
      {/* Partners Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-gray-500 font-medium">Trusted by leading healthcare providers</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 flex items-center justify-center">
                <div className="bg-gray-200 h-8 w-32 rounded-md flex items-center justify-center text-gray-500 font-semibold">
                  Partner {i}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-5">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI-Powered RCM Solutions
            </h2>
            <p className="text-lg text-gray-600">
              From data capture to analytics and claim processing, our integrated suite of solutions
              streamlines the entire revenue cycle process.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement 
              delay={100}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 hover:border-insscrub-200 transition-all group"
            >
              <div className="h-3 bg-gradient-primary"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-insscrub-100 text-insscrub-600 rounded-lg mb-5 flex items-center justify-center">
                  <Brain size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">InsScrub AI</h3>
                <p className="text-gray-600 mb-5">
                  Comprehensive set of agentic AI that seamlessly integrates into your workflows, automating billing and revenue processes.
                </p>
                <Link 
                  to="/products/insscrub-ai" 
                  className="inline-flex items-center text-insscrub-600 font-medium hover:text-insscrub-700 transition-colors"
                >
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              delay={200}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 hover:border-teal-200 transition-all group"
            >
              <div className="h-3 bg-gradient-secondary"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-lg mb-5 flex items-center justify-center">
                  <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">HealthOCR</h3>
                <p className="text-gray-600 mb-5">
                  Advanced OCR-based scanning and data extraction from insurance cards, EOBs, and other healthcare documents.
                </p>
                <Link 
                  to="/products/healthocr" 
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors"
                >
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedElement>
            
            <AnimatedElement 
              delay={300}
              className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 hover:border-purple-200 transition-all group"
            >
              <div className="h-3 bg-gradient-accent"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg mb-5 flex items-center justify-center">
                  <BarChart3 size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">InfoMate</h3>
                <p className="text-gray-600 mb-5">
                  AI-driven analytics providing valuable insights into your revenue cycle with comprehensive forecasting capabilities.
                </p>
                <Link 
                  to="/products/infomate" 
                  className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors"
                >
                  Learn more <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-insscrub-100 text-insscrub-700 text-sm font-medium mb-5">
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Healthcare Providers Choose InsScrub
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered platform delivers transformative results across the revenue cycle.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap size={24} />}
              title="Increased Efficiency"
              description="Reduce manual work by up to 80% with our AI-powered automation, enabling your staff to focus on higher-value tasks."
              delay={100}
            />
            
            <FeatureCard
              icon={<Database size={24} />}
              title="Improved Accuracy"
              description="Minimize errors in claims processing and reduce denials with our intelligent verification systems."
              iconClassName="bg-teal-100 text-teal-600"
              delay={200}
            />
            
            <FeatureCard
              icon={<Clock size={24} />}
              title="Faster Reimbursements"
              description="Accelerate cash flow with streamlined claim submissions and real-time eligibility verification."
              iconClassName="bg-purple-100 text-purple-600"
              delay={300}
            />
            
            <FeatureCard
              icon={<Shield size={24} />}
              title="Enhanced Compliance"
              description="Stay compliant with ever-changing healthcare regulations through automated updates and checks."
              delay={400}
            />
            
            <FeatureCard
              icon={<PieChart size={24} />}
              title="Data-Driven Insights"
              description="Gain valuable intelligence into your revenue cycle performance with advanced analytics."
              iconClassName="bg-teal-100 text-teal-600"
              delay={500}
            />
            
            <FeatureCard
              icon={<CheckCircle size={24} />}
              title="Seamless Integration"
              description="Easily integrate with your existing EHR and practice management systems without disruption."
              iconClassName="bg-purple-100 text-purple-600"
              delay={600}
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-insscrub-500 to-insscrub-700 text-white relative overflow-hidden">
        <CirclePattern className="bottom-0 left-0 text-white" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Driving Real Results for Healthcare Providers
            </h2>
            <p className="text-lg opacity-90">
              Our clients see significant improvements across their revenue cycle operations.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCard
              value="93%"
              label="First-pass claim acceptance rate"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={100}
            />
            
            <StatsCard
              value="76%"
              label="Reduction in denial rate"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={200}
            />
            
            <StatsCard
              value="$3.2M"
              label="Average annual savings"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={300}
            />
            
            <StatsCard
              value="27%"
              label="Faster payment collection"
              className="bg-white/10 backdrop-blur-sm text-white border-none"
              delay={400}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-2xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium mb-5">
              Client Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Leading Healthcare Providers
            </h2>
            <p className="text-lg text-gray-600">
              See what our clients have to say about the InsScrub platform.
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="InsScrub AI has revolutionized our revenue cycle. We've seen a 35% increase in clean claims and significantly reduced our days in A/R."
              author="Dr. Sarah Johnson"
              role="Chief Medical Officer"
              company="Northeast Medical Group"
              delay={100}
            />
            
            <TestimonialCard
              quote="The HealthOCR module has eliminated countless hours of manual data entry. Our staff can now focus on patient care instead of paperwork."
              author="Mark Williams"
              role="Revenue Cycle Director"
              company="Pacific Healthcare Systems"
              delay={200}
            />
            
            <TestimonialCard
              quote="InfoMate's predictive analytics have given us unprecedented visibility into our cash flow, helping us make more informed financial decisions."
              author="Jennifer Chen"
              role="CFO"
              company="Meridian Health Partners"
              delay={300}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatedElement className="max-w-4xl mx-auto bg-gradient-to-br from-insscrub-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-insscrub-100 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Revenue Cycle?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of healthcare providers who are already optimizing their financial performance with InsScrub.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8 py-6">
                  Request Demo
                </Button>
                <Button variant="outline" className="border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50 text-lg px-8 py-6">
                  Contact Sales
                </Button>
              </div>
            </div>
            <CirclePattern className="bottom-0 right-0 text-insscrub-200" />
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
