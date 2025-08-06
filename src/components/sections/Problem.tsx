import React from 'react';
import { AlertTriangle, Clock, FileX, Users } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Complex Product Catalogs',
      description: 'Overwhelming sales reps with thousands of SKUs and configuration options'
    },
    {
      icon: FileX,
      title: 'Compliance Complexity',
      description: 'Varying requirements across regions (FDA, CE, BIS) causing delays and errors'
    },
    {
      icon: Clock,
      title: 'Manual Quote Processes',
      description: 'Time-consuming workflows leading to errors and frustrated customers'
    },
    {
      icon: Users,
      title: 'Extensive Training Requirements',
      description: 'New representatives need months to become productive with complex systems'
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Challenge in Medical Equipment Sales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional sales processes struggle with the complexity and compliance requirements 
            of medical equipment, leading to costly errors and lost opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-lg mb-4">
                <problem.icon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Cost of Inefficiency</h3>
              <p className="text-gray-600 mb-6">
                Current manual processes are costing medical equipment companies significant revenue 
                and customer satisfaction. The complexity of compliance and configuration requirements 
                makes traditional quoting systems inadequate.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">45% of quotes contain errors requiring revision</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">Average 7-day quote turnaround time</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-gray-700">3-6 months training for new sales reps</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Business Challenge"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};