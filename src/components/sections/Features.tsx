import React from 'react';
import { 
  MessageSquare, 
  Brain, 
  Settings, 
  Shield, 
  DollarSign, 
  FileText, 
  BarChart3, 
  Bot 
} from 'lucide-react';
import { FeatureCard } from '../ui/FeatureCard';

export const Features: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Guided Product Selection',
      description: 'Smart questionnaire-based system that matches customer needs with optimal product configurations through intelligent questioning.'
    },
    {
      icon: Brain,
      title: 'AI Recommendation Engine',
      description: 'GPT-powered suggestions analyze customer requirements and historical data to recommend the best equipment solutions.'
    },
    {
      icon: Settings,
      title: 'Dynamic Configuration',
      description: 'Real-time validation ensures all product combinations are compatible and compliant with regulatory requirements.'
    },
    {
      icon: Shield,
      title: 'Compliance Validator',
      description: 'Automated FDA, BIS, and CE compliance checking prevents regulatory issues before quotes are generated.'
    },
    {
      icon: DollarSign,
      title: 'Tiered Pricing Engine',
      description: 'Automatic discount application based on customer level, volume commitments, and regional pricing strategies.'
    },
    {
      icon: FileText,
      title: 'Professional Quote Generation',
      description: 'Beautiful PDF creation with customizable templates and integrated approval workflows for complex deals.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into sales performance, quote conversion rates, and market trends with actionable intelligence.'
    },
    {
      icon: Bot,
      title: 'Virtual Agent Support',
      description: '24/7 GPT-powered customer support that can answer product questions and assist with configuration challenges.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive CPQ Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every feature designed to eliminate complexity and accelerate your medical equipment sales process 
            while ensuring complete regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};