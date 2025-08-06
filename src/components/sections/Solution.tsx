import React from 'react';
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

export const Solution: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: '90% Reduction in Quote Errors',
      description: 'AI-powered validation ensures accuracy from configuration to compliance'
    },
    {
      icon: Zap,
      title: '60% Faster Quote Generation',
      description: 'Automated workflows and intelligent recommendations accelerate the entire process'
    },
    {
      icon: Shield,
      title: 'Automated Compliance Validation',
      description: 'Built-in regulatory checks for FDA, CE, and BIS requirements across all markets'
    },
    {
      icon: TrendingUp,
      title: 'Zero-Training Required',
      description: 'Intuitive guided selling makes new representatives productive immediately'
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            ServiceNow CPQ Solution
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI-Powered, Compliance-First Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your medical equipment sales with intelligent automation that eliminates errors, 
            ensures compliance, and accelerates revenue growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Built on ServiceNow Platform
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Leverage the power of the world's leading enterprise platform with custom CPQ 
                capabilities designed specifically for medical equipment sales.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Enterprise-grade security and scalability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Seamless integration with existing systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Advanced workflow automation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Real-time analytics and reporting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Enterprise Technology"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-blue-600 bg-opacity-20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};