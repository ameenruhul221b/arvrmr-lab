import React from 'react';
import { Target, Eye, Lightbulb } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Lab</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 2018 by Bangladesh Sheikh Mujib Hi-Tech Park, our AR/VR/MR Lab serves as a beacon 
            of technological advancement in extended reality (XR).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Augmented Reality</h3>
            <p className="text-gray-600">
              Enhancing the real world with digital overlays, creating interactive experiences that blend 
              physical and digital environments seamlessly.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Virtual Reality</h3>
            <p className="text-gray-600">
              Creating immersive digital experiences that transport users to entirely new worlds and 
              enable unprecedented levels of interaction and engagement.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mixed Reality</h3>
            <p className="text-gray-600">
              Seamlessly blending virtual and physical worlds to create hybrid environments where 
              digital and physical objects coexist and interact in real-time.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide effective and intuitive training in AR/VR/MR technologies to imaginative, 
              enthusiastic, and capable students while fostering groundbreaking research and development 
              in extended reality applications. We're committed to pushing the boundaries of what's possible 
              in immersive technology and preparing the next generation of XR innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}