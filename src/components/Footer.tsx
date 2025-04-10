
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute w-5 h-5 bg-white rounded-full transform -translate-x-1 -translate-y-1"></div>
                <span className="text-white font-bold text-xl relative z-10">IS</span>
              </div>
              <span className="font-bold text-xl">InsScrub</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering healthcare providers with AI-powered RCM solutions to optimize financial performance and reduce administrative burdens.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/insscrub-ai" className="text-gray-400 hover:text-white transition-colors">
                  InsScrub AI
                </Link>
              </li>
              <li>
                <Link to="/products/healthocr" className="text-gray-400 hover:text-white transition-colors">
                  HealthOCR
                </Link>
              </li>
              <li>
                <Link to="/products/infomate" className="text-gray-400 hover:text-white transition-colors">
                  InfoMate
                </Link>
              </li>
              <li>
                <Link to="/products/claim-submission" className="text-gray-400 hover:text-white transition-colors">
                  Claim Submission
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-insscrub-400" />
                <span className="text-gray-400">
                  123 Healthcare Blvd,<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex">
                <Phone size={18} className="mr-2 text-insscrub-400" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex">
                <Mail size={18} className="mr-2 text-insscrub-400" />
                <a href="mailto:info@insscrub.com" className="text-gray-400 hover:text-white transition-colors">
                  info@insscrub.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} InsScrub by RSB Healthcare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
