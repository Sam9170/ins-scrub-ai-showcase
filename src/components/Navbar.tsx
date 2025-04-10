
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProductDropdown = () => setProductDropdownOpen(!productDropdownOpen);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center overflow-hidden">
              <div className="absolute w-5 h-5 bg-white rounded-full transform -translate-x-1 -translate-y-1"></div>
              <span className="text-white font-bold text-xl relative z-10">IS</span>
            </div>
            <span className="font-bold text-xl">InsScrub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button 
                onClick={toggleProductDropdown}
                className="flex items-center space-x-1 text-gray-700 hover:text-insscrub-600 transition-colors"
              >
                <span>Products</span>
                <ChevronDown size={16} className={cn(
                  "transition-transform duration-200",
                  productDropdownOpen ? "transform rotate-180" : ""
                )} />
              </button>
              
              {productDropdownOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white rounded-lg shadow-lg overflow-hidden p-2 z-50 animate-slide-up">
                  <div className="grid gap-2">
                    <Link 
                      to="/products/insscrub-ai" 
                      className="flex items-start p-3 rounded-md hover:bg-gray-50"
                      onClick={() => setProductDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 mr-3 bg-insscrub-100 text-insscrub-600 rounded-md flex items-center justify-center">
                        <span className="font-semibold">AI</span>
                      </div>
                      <div>
                        <h3 className="font-medium">InsScrub AI</h3>
                        <p className="text-xs text-gray-500">Intelligent automation for RCM</p>
                      </div>
                    </Link>
                    <Link 
                      to="/products/healthocr" 
                      className="flex items-start p-3 rounded-md hover:bg-gray-50"
                      onClick={() => setProductDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 mr-3 bg-teal-100 text-teal-600 rounded-md flex items-center justify-center">
                        <span className="font-semibold">OCR</span>
                      </div>
                      <div>
                        <h3 className="font-medium">HealthOCR</h3>
                        <p className="text-xs text-gray-500">Smart document extraction</p>
                      </div>
                    </Link>
                    <Link 
                      to="/products/infomate" 
                      className="flex items-start p-3 rounded-md hover:bg-gray-50"
                      onClick={() => setProductDropdownOpen(false)}
                    >
                      <div className="w-8 h-8 mr-3 bg-purple-100 text-purple-600 rounded-md flex items-center justify-center">
                        <span className="font-semibold">IM</span>
                      </div>
                      <div>
                        <h3 className="font-medium">InfoMate</h3>
                        <p className="text-xs text-gray-500">AI-driven analytics</p>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-insscrub-600 transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-insscrub-600 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-insscrub-600 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" className="border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50">
              Sign In
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg animate-slide-up">
            <div className="flex flex-col py-4 space-y-2">
              <div className="px-4 py-2">
                <button 
                  onClick={toggleProductDropdown}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Products</span>
                  <ChevronDown size={16} className={cn(
                    "transition-transform duration-200",
                    productDropdownOpen ? "transform rotate-180" : ""
                  )} />
                </button>
                
                {productDropdownOpen && (
                  <div className="mt-2 pl-4 border-l-2 border-insscrub-100 space-y-2">
                    <Link 
                      to="/products/insscrub-ai" 
                      className="block py-2"
                      onClick={() => {
                        setProductDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      InsScrub AI
                    </Link>
                    <Link 
                      to="/products/healthocr" 
                      className="block py-2"
                      onClick={() => {
                        setProductDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      HealthOCR
                    </Link>
                    <Link 
                      to="/products/infomate" 
                      className="block py-2"
                      onClick={() => {
                        setProductDropdownOpen(false);
                        setIsMenuOpen(false);
                      }}
                    >
                      InfoMate
                    </Link>
                  </div>
                )}
              </div>
              <Link 
                to="/pricing" 
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 pt-2 space-y-2">
                <Button variant="outline" className="w-full border-insscrub-500 text-insscrub-600 hover:bg-insscrub-50">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
