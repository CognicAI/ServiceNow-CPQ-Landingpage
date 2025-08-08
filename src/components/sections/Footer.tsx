import React from 'react';
import { Github, Mail, Users, ArrowUp, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Challenges', href: '#problem' },
    { label: 'Solution', href: '#workflow' },
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Technology', href: '#technology' },
    { label: 'Team', href: '#team' }
  ];

  const about = [
    { label: 'About Project', href: '#hero' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Meet the Team', href: '#team' },
    { label: 'Project Demo', href: '#demo' }
  ];

  const technical = [
    { label: 'System Architecture', href: '#architecture' },
    { label: 'Technology Stack', href: '#technology' },
    { label: 'Project Features', href: '#features' },
    { label: 'GitHub Repository', href: 'https://github.com/CognicAI/ServiceNow-CPQ-Backend' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">ServiceNow CPQ</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Revolutionizing medical equipment sales with AI-powered configure, price, quote solutions 
              built on the ServiceNow platform. Streamlining complex healthcare procurement processes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hackathon Project 2025</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ServiceNow CPQ Demo</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Project */}
          <div>
            <h4 className="text-lg font-semibold mb-6">About Project</h4>
            <ul className="space-y-3">
              {about.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Technical Details</h4>
            <ul className="space-y-3">
              {technical.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    {...(item.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 ServiceNow CPQ Hackathon Project. Built for demonstration purposes.
              </p>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <span>Powered by</span>
                <span className="text-blue-400 font-medium">ServiceNow Platform</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-4">
              <a 
                href="https://github.com/CognicAI/ServiceNow-CPQ-Backend" 
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source Code
              </a>
              <a href="#demo" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};