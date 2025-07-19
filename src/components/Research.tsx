import React from 'react';
import { Brain, Zap, Navigation, GraduationCap } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'Brain Computer Interfacing (BCI)',
      subtitle: 'Cybersickness Evaluation',
      description: 'Utilizing EEG signals to measure VR-induced cybersickness, comparing brain activity with traditional questionnaire methods for adaptive VR systems.',
      highlights: ['EEG signal analysis', 'VR-induced cybersickness', 'Adaptive systems', 'Brain activity patterns']
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: 'Fast Measurement Scale (FMS)',
      subtitle: 'Dynamic VR Assessment',
      description: 'Developing rapid cybersickness assessment tools and flexible APIs for reactive VR applications to improve user comfort in extended sessions.',
      highlights: ['Rapid assessment', 'Flexible APIs', 'User comfort', 'Extended VR sessions']
    },
    {
      icon: <Navigation className="w-8 h-8 text-green-600" />,
      title: 'Circular Treadmill Systems',
      subtitle: 'VR Locomotion Research',
      description: 'Evaluating professional systems like "KAT Walk mini" and studying DIY alternatives for advancing natural movement in virtual environments.',
      highlights: ['KAT Walk mini', 'DIY alternatives', 'Natural movement', 'Locomotion systems']
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-purple-600" />,
      title: 'Interactive Learning',
      subtitle: 'Educational AR/VR/MR',
      description: 'Exploring educational applications across subjects, developing generalized hardware-software combinations to reduce dependency on specialized equipment.',
      highlights: ['Educational applications', 'Subject integration', 'Hardware-software', 'Accessibility']
    }
  ];

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Cutting-Edge Research</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering research initiatives that push the boundaries of AR/VR/MR technology, 
            focusing on user experience, accessibility, and innovative applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchAreas.map((research, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200">
                  {research.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{research.title}</h3>
                  <p className="text-gray-600">{research.subtitle}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{research.description}</p>

              <div className="grid grid-cols-2 gap-3">
                {research.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Research Impact</h3>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Our research initiatives are contributing to the global understanding of immersive technologies, 
              with publications, patents, and practical applications that benefit both academia and industry.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold mb-2">Multiple Publications</div>
                <p className="text-indigo-200">Academic papers and research findings</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Industry Applications</div>
                <p className="text-indigo-200">Real-world implementations and solutions</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Global Recognition</div>
                <p className="text-indigo-200">International conferences and collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}