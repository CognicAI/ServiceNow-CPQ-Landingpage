import React from 'react';
import { Database, ArrowRight, Cpu, Cloud, Shield, Zap } from 'lucide-react';

export const Architecture: React.FC = () => {
  const dataFlow = [
    {
      icon: Database,
      title: 'Data Sources',
      description: 'Medical equipment catalogs, pricing databases, compliance regulations',
      color: 'bg-blue-500'
    },
    {
      icon: Cloud,
      title: 'ServiceNow Platform',
      description: 'Central data processing and workflow management',
      color: 'bg-green-500'
    },
    {
      icon: Cpu,
      title: 'AI Processing',
      description: 'Machine learning algorithms for recommendations and validation',
      color: 'bg-purple-500'
    },
    {
      icon: Shield,
      title: 'Compliance Engine',
      description: 'Automated regulatory checking and validation',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'CPQ Output',
      description: 'Intelligent quotes with real-time pricing and configurations',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Data Acquisition Pipeline Architecture
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sophisticated data pipeline ensures seamless integration of medical equipment data, 
            compliance requirements, and AI-powered intelligence for optimal CPQ performance.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">System Architecture Overview</h3>
            <p className="text-gray-600 mb-6">
              Complete data flow from source systems to intelligent quote generation
            </p>
          </div>
          
          {/* Architecture Diagram */}
          <div className="relative bg-white rounded-xl shadow-lg p-6">
            <div className="text-center">
              <img 
                src="/images/architecture-diagram.png" 
                alt="Data Acquisition Pipeline Architecture"
                className="w-full h-auto max-h-[600px] object-contain rounded-lg shadow-md mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden text-center p-8">
                <Database className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">
                  Upload your architecture diagram to /public/images/architecture-diagram.png
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Supported formats: PNG, JPG, SVG
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Flow Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
            Data Flow Process
          </h3>
          
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between">
              {dataFlow.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center max-w-40">
                    <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                  {index < dataFlow.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-gray-400 flex-shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile Flow */}
          <div className="lg:hidden space-y-6">
            {dataFlow.map((step, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Data Sources Integration</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Medical device manufacturer catalogs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Real-time pricing APIs</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Regulatory compliance databases (FDA, CE, BIS)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Customer configuration preferences</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Historical sales and performance data</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Processing Capabilities</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Real-time data synchronization</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">AI-powered data validation</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Automated compliance checking</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Dynamic pricing calculations</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Intelligent recommendation engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
