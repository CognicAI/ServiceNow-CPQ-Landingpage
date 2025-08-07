import React from 'react';
import { Play, Download, ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('#problem') || document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-600 bg-opacity-50 rounded-full text-sm font-medium">
                ServiceNow CPQ Solution
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Revolutionize Medical Equipment Sales with{' '}
                <span className="text-blue-300">AI-Powered CPQ</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                ServiceNow-based solution that eliminates quoting errors, accelerates sales cycles, 
                and ensures compliance across global markets
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg" 
                icon={Play}
                className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Live Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                icon={Download}
                className="bg-white bg-opacity-10 backdrop-blur-sm border-white border-opacity-30 text-white hover:bg-white hover:bg-opacity-20 hover:border-opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Download Brochure
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">90%</div>
                <div className="text-blue-200 text-sm">Error Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">60%</div>
                <div className="text-blue-200 text-sm">Faster Quotes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-blue-200 text-sm">Compliance</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="CPQ Dashboard Interface"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToNextSection}
          className="flex flex-col items-center space-y-2 text-white hover:text-blue-300 transition-colors duration-300 group"
          aria-label="Scroll to next section"
        >
          <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            Scroll to explore
          </span>
          <div className="p-2 rounded-full border border-white border-opacity-30 group-hover:border-blue-300 transition-all duration-300 animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>
      </div>
    </section>
  );
};