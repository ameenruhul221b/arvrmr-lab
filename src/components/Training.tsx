import React from 'react';
import { BookOpen, Users, Code, Award } from 'lucide-react';

export default function Training() {
  const studentCurriculum = [
    'AR/VR/MR introduction and technology overview',
    'Unity engine mastery and programming fundamentals',
    'Vuforia AR, VR SDKs, and MR tools',
    'Asset store utilization and 3D modeling basics',
    'Complete AR/VR applications from concept to deployment'
  ];

  const teacherProgram = [
    'Real-world AR/VR/MR applications showcase',
    'Unity, C#, and Visual Studio development',
    'Future trends and academic research opportunities',
    'Incorporating XR into educational curricula'
  ];

  return (
    <section id="training" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive training programs designed to equip students and educators with cutting-edge 
            AR/VR/MR skills and knowledge for the future of technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Student Curriculum</h3>
                <p className="text-gray-600">Comprehensive AR/VR/MR Development</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {studentCurriculum.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Educator Training</h3>
                <p className="text-gray-600">Specialized Program for Teachers</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {teacherProgram.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 px-8 py-6">
            <h3 className="text-2xl font-bold text-white mb-2">2020 Vision: Modular Training Approach</h3>
            <p className="text-blue-100">Five specialized programs designed for different skill levels and interests</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 transition-colors">
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Intro to AR/VR/MR</h4>
                </div>
                <p className="text-gray-600 text-sm">Foundation course for beginners</p>
              </div>
              
              <div className="border-2 border-teal-200 rounded-lg p-6 hover:border-teal-400 transition-colors">
                <div className="flex items-center mb-3">
                  <Award className="w-5 h-5 text-teal-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Advanced AR Developer</h4>
                </div>
                <p className="text-gray-600 text-sm">Specialized augmented reality skills</p>
              </div>
              
              <div className="border-2 border-green-200 rounded-lg p-6 hover:border-green-400 transition-colors">
                <div className="flex items-center mb-3">
                  <Users className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Advanced VR Developer</h4>
                </div>
                <p className="text-gray-600 text-sm">Immersive virtual reality expertise</p>
              </div>
              
              <div className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition-colors">
                <div className="flex items-center mb-3">
                  <BookOpen className="w-5 h-5 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">MR Application Development</h4>
                </div>
                <p className="text-gray-600 text-sm">Mixed reality challenges and solutions</p>
              </div>
              
              <div className="border-2 border-orange-200 rounded-lg p-6 hover:border-orange-400 transition-colors md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-3">
                  <Code className="w-5 h-5 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">AR/VR/MR Research</h4>
                </div>
                <p className="text-gray-600 text-sm">Academic and research opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}