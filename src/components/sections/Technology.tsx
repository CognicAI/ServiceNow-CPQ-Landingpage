import React from 'react';
import { Server, Zap, Shield, BarChart, Cpu, Cloud } from 'lucide-react';

export const Technology: React.FC = () => {
  const technologies = [
    {
      icon: Server,
      name: 'ServiceNow Platform',
      description: 'Enterprise-grade foundation with advanced workflow capabilities'
    },
    {
      icon: Cpu,
      name: 'OpenAI GPT Integration',
      description: 'Advanced AI for intelligent recommendations and natural language processing'
    },
    {
      icon: Zap,
      name: 'RESTful APIs',
      description: 'Seamless integration with existing CRM and ERP systems'
    },
    {
      icon: Shield,
      name: 'Automated Workflows',
      description: 'Complex approval processes and compliance validation automation'
    },
    {
      icon: BarChart,
      name: 'Advanced Analytics',
      description: 'Real-time insights and predictive analytics for sales optimization'
    },
    {
      icon: Cloud,
      name: 'Cloud-Native Architecture',
      description: 'Scalable, secure, and globally distributed infrastructure'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built on Enterprise-Grade Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our solution leverages industry-leading technologies to deliver unmatched performance, 
            security, and scalability for medical equipment sales organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl shadow-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Architecture Benefits
              </h3>
              <p className="text-gray-300 text-lg mb-6">
                Our technology stack is designed for enterprise environments that demand 
                reliability, security, and seamless integration with existing business systems.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>99.9% Uptime SLA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Global Scalability</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>API-First Design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Real-time Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Advanced Security</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Technology Architecture"
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