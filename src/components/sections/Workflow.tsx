import React from 'react';
import { MessageCircle, Search, CheckCircle, FileText, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: 'Customer Inquiry',
      description: 'AI analyzes customer needs through natural language processing',
      color: 'bg-blue-500'
    },
    {
      icon: Search,
      title: 'Guided Selection',
      description: 'Smart recommendations guide customers to optimal solutions',
      color: 'bg-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Auto Configuration',
      description: 'Real-time validation ensures compliance and compatibility',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Quote Generation',
      description: 'Professional quotes with integrated approval workflows',
      color: 'bg-orange-500'
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How AI Transforms the Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial inquiry to final quote, artificial intelligence streamlines every step 
            of the medical equipment sales process.
          </p>
        </div>

        <div className="relative">
          {/* Desktop workflow */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center max-w-xs">
                    <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center text-sm">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-gray-400 mx-4" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Mobile workflow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${step.color} w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Capabilities at Every Step
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Natural Language Processing:</strong> Understand customer needs from conversational input
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Predictive Analytics:</strong> Leverage historical data to improve recommendations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Automated Compliance:</strong> Real-time validation against regulatory requirements
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    <strong>Dynamic Pricing:</strong> Intelligent pricing optimization based on multiple factors
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="AI Technology"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};