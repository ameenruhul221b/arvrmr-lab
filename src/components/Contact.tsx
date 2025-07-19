import React from 'react';
import { MapPin, Calendar, User, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to dive into the world of extended reality? Whether you're a student, educator, 
            researcher, or industry professional, our AR/VR/MR Lab offers pathways to explore, 
            learn, and innovate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-700">University of Rajshahi, Bangladesh</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-teal-600 mr-3" />
                <span className="text-gray-700">Established: 2018</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 text-green-600 mr-3" />
                <span className="text-gray-700">Coordinator: Md. Tanvir Hossain</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Join Our Programs</h4>
              <p className="text-gray-600 mb-6">
                Join us in shaping the future of immersive technology and discover how AR/VR/MR 
                can transform education, business, and human interaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Apply for Training
                </button>
                <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to Innovate?</h3>
            <p className="text-blue-100 mb-8">
              Take the first step into the future of technology. Our comprehensive training programs 
              and research opportunities are designed to help you master AR/VR/MR technologies 
              and contribute to groundbreaking innovations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <span className="text-blue-100">Apply for our training programs</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <span className="text-blue-100">Learn cutting-edge XR technologies</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <span className="text-blue-100">Build award-winning projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <span className="text-blue-100">Shape the future of technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}