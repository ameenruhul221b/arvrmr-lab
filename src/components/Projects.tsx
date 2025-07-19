import React from 'react';
import { Award, ExternalLink, Smartphone, Eye } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Bornomala AR',
      subtitle: 'Interactive Children\'s Books',
      achievement: '1st place at Techfest 2019',
      description: 'AR-based learning series for Bangladeshi children (ages 3-15) featuring 6 Bengali books, 6 English books, and 2 math books with interactive learning features.',
      features: ['Letter learning', 'Writing practice', 'Word formation', 'Interactive storytelling'],
      icon: <Award className="w-6 h-6 text-yellow-600" />,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Guardian of the Garden',
      subtitle: 'Dual-Platform Game',
      achievement: '3rd place at Techfest 2019',
      description: 'Innovative game available in both 2D mobile and VR versions, published on Google Play Store using Unity Game Engine with Oculus VR support.',
      features: ['2D mobile version', 'VR compatibility', 'Google Play Store', 'Unity Engine'],
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Bazar Jai',
      subtitle: 'Revolutionary E-commerce Platform',
      achievement: '10 Lakhs Idea Fund Winner',
      description: 'First 360° VR marketplace in Bangladesh with virtual shop presence, historical place tours, and VR box compatibility.',
      features: ['360° VR marketplace', 'Virtual tours', 'Business integration', 'Historical sites'],
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      gradient: 'from-blue-500 to-purple-500',
      link: 'https://bazarjai.com/'
    },
    {
      title: '360° VR Tours',
      subtitle: 'Architectural Visualization',
      achievement: 'Campus Innovation Project',
      description: 'Virtual tours of University of Rajshahi campus buildings with resource tracking and admission system integration.',
      features: ['Campus buildings', 'Resource tracking', 'Admission integration', 'Real estate potential'],
      icon: <ExternalLink className="w-6 h-6 text-purple-600" />,
      gradient: 'from-purple-500 to-pink-500',
      link: 'http://103.99.176.144/cseru_tour/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Projects & Research</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our award-winning innovations and breakthrough projects that are transforming 
            education, entertainment, and e-commerce through immersive technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600">{project.subtitle}</p>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-gray-600" />
                    </a>
                  )}
                </div>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    🏆 {project.achievement}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}