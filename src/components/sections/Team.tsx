import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

export const Team: React.FC = () => {
  const teamMembers = [
    {
      name: 'Harsha Vardhanu Parnandi',
      role: 'Team Lead & ServiceNow Architect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      linkedin: 'https://www.linkedin.com/in/harshavardhanuparnandi/',
      email: 'harshajustin2@gmail.com'
    },
    {
      name: 'Abhishek Kunoju',
      role: 'Frontend Developer & UI/UX Designer',
      image: '/images/Team/abhishek.jpg',
      linkedin: 'https://www.linkedin.com/in/abhishek-kunoju/',
      email: 'abhishekkunoju@gmail.com'
    },
    {
      name: 'Rahul Sai Nulakala',
      role: 'Backend Developer & AI Integration',
      image: '/images/Team/Rahul.jpg',
      linkedin: 'https://www.linkedin.com/in/rahul-sai-nulakala-5803b2275/',
      email: 'rahulsainulakala@gmail.com'
    },
    {
      name: 'Ravuri Sai Supreetha',
      role: 'Business Analyst & Product Manager',
      image: '/images/Team/Supreetha.jpg',
      linkedin: 'https://www.linkedin.com/in/ravuri-sai-supreetha-472128278/',
      email: 'ravurisaisupreetha@gmail.com'
    },
    {
      name: 'Sahithi Reddy Kadar',
      role: 'Quality Assurance & Compliance Specialist',
      image: '/images/Team/sahithi.jpg',
      linkedin: 'https://www.linkedin.com/in/sahithi-reddy-kadar-30786b287/',
      email: 'sahithireddykadar@gmail.com'
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
            A dedicated team of developers and analysts passionate about transforming medical equipment sales 
            through innovative ServiceNow CPQ solutions and cutting-edge AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100">
              <div className="relative mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-full bg-blue-600 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"></div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.role}</p>
              
              <div className="flex justify-center space-x-4">
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-blue-600" />
                </a>
                <a 
                  href={`mailto:${member.email}`}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gray-600" />
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