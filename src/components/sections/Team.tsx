import React from 'react';
import { Linkedin, Mail, Github } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Lead Developer & ServiceNow Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com/in/alexchen',
      email: 'alex.chen@servicenow-cpq.com',
      github: 'https://github.com/alexchen'
    },
    {
      name: 'Sarah Rodriguez',
      role: 'UX Designer & Frontend Specialist',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com/in/sarahrodriguez',
      email: 'sarah.rodriguez@servicenow-cpq.com',
      github: 'https://github.com/sarahrodriguez'
    },
    {
      name: 'Michael Johnson',
      role: 'AI Integration & Backend Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com/in/michaeljohnson',
      email: 'michael.johnson@servicenow-cpq.com',
      github: 'https://github.com/michaeljohnson'
    },
    {
      name: 'Emily Davis',
      role: 'Product Manager & Business Analyst',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://linkedin.com/in/emilydavis',
      email: 'emily.davis@servicenow-cpq.com',
      github: 'https://github.com/emilydavis'
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The talented individuals behind this innovative ServiceNow CPQ solution, 
            bringing together expertise in enterprise software, AI, and medical equipment sales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.role}</p>
              
              <div className="flex justify-center space-x-3">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-4 h-4 text-gray-600" />
                </a>
                <a 
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                >
                  <Github className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Hackathon Project
            </h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              This ServiceNow CPQ solution was developed as part of a hackathon challenge to revolutionize 
              medical equipment sales processes. Our team combined expertise in enterprise software development, 
              AI integration, and user experience design to create this comprehensive solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-full">
                <span className="text-blue-700 font-medium">ServiceNow Platform</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-full">
                <span className="text-green-700 font-medium">AI Integration</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-full">
                <span className="text-purple-700 font-medium">Medical Equipment Focus</span>
              </div>
              <div className="bg-orange-50 px-4 py-2 rounded-full">
                <span className="text-orange-700 font-medium">Enterprise CPQ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};