import React from 'react';
import { TrendingUp, Users, BookOpen, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      number: '200+',
      label: 'Students Trained',
      description: 'Comprehensive AR/VR/MR development skills'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-teal-600" />,
      number: '10+',
      label: 'Teachers Trained',
      description: 'Equipped with cutting-edge teaching methodologies'
    },
    {
      icon: <Trophy className="w-8 h-8 text-green-600" />,
      number: '4+',
      label: 'Award-Winning Projects',
      description: 'Recognition at national competitions'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
      number: '6',
      label: 'Month Program',
      description: 'Intensive training from January to June 2019'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            2019 Achievements: Transforming Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our inaugural year delivered remarkable results that exceeded expectations across 
            training, research, and project development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-6 flex justify-center">{achievement.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:scale-110 transition-transform duration-200">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-3">{achievement.label}</div>
              <p className="text-gray-600 text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Training Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold mb-2">Multiple Assessment Methods</div>
                <p className="text-blue-100">Quizzes, hackathons, and hands-on projects</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Industry Recognition</div>
                <p className="text-blue-100">Competition wins and funding achievements</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">Research Initiatives</div>
                <p className="text-blue-100">Pioneering studies in cybersickness and BCI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}