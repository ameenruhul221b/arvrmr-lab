import React from 'react';
import { ChevronRight, Zap, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white mb-8">
            <Zap className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Where Innovation Meets Reality</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            AR/VR/MR Lab
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
              University of Rajshahi
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The Lab for Immersive Technologies - Building the future through cutting-edge research in
            Augmented, Virtual, and Mixed Reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center group">
              Explore Our Work
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200">
              Join Training Program
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Users className="w-8 h-8 text-blue-300 mr-2" />
                <span className="text-3xl font-bold text-white">200+</span>
              </div>
              <p className="text-blue-200">Students Trained</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Award className="w-8 h-8 text-teal-300 mr-2" />
                <span className="text-3xl font-bold text-white">4+</span>
              </div>
              <p className="text-blue-200">Award-Winning Projects</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center mb-2">
                <Zap className="w-8 h-8 text-green-300 mr-2" />
                <span className="text-3xl font-bold text-white">2018</span>
              </div>
              <p className="text-blue-200">Established</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}