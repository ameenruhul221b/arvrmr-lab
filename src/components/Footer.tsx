import React from 'react';
import { CarIcon as VrIcon, Facebook, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
                <VrIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">AR/VR/MR Lab</h3>
                <p className="text-gray-400">University of Rajshahi</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The Lab for Immersive Technologies - Where digital dreams become reality through 
              innovative research, education, and development in AR/VR/MR.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a></li>
              <li><a href="#training" className="text-gray-400 hover:text-white transition-colors">Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Focus Areas</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Augmented Reality</span></li>
              <li><span className="text-gray-400">Virtual Reality</span></li>
              <li><span className="text-gray-400">Mixed Reality</span></li>
              <li><span className="text-gray-400">Extended Reality</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 AR/VR/MR Lab, University of Rajshahi. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            The Lab for Immersive Technologies - Where digital dreams become reality.
          </p>
        </div>
      </div>
    </footer>
  );
}