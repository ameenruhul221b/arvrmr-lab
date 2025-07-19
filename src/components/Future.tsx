import React from 'react';
import { Globe, Users, Lightbulb, Building2 } from 'lucide-react';

export default function Future() {
  const partnerships = [
    {
      name: 'Rajshahi Medical College',
      focus: 'Healthcare AR/VR applications',
      icon: <Building2 className="w-6 h-6 text-red-600" />
    },
    {
      name: 'Begum Rokeya University',
      focus: 'Educational technology research',
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />
    },
    {
      name: 'Pundra University of Science and Technology',
      focus: 'Technical innovation',
      icon: <Globe className="w-6 h-6 text-green-600" />
    },
    {
      name: 'RAJ IT Solutions Limited',
      focus: 'Industry applications and commercialization',
      icon: <Users className="w-6 h-6 text-purple-600" />
    }
  ];

  return (
    <section id="future" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">2020 Vision & Future Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building on our success, we're expanding our reach and impact through enhanced accessibility, 
            strategic partnerships, and innovative training approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Enhanced Accessibility</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Modern Website Launch</h4>
                  <p className="text-gray-600">Comprehensive online presence</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Social Media Expansion</h4>
                  <p className="text-gray-600">Facebook and YouTube channels</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Resource Repositories</h4>
                  <p className="text-gray-600">Open-access training materials</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Award Systems</h4>
                  <p className="text-gray-600">Recognition programs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Recent Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Team Tinkers</h4>
                  <p className="text-gray-600">BYLC YEB Winner</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Bazar Jai</h4>
                  <p className="text-gray-600">10 Lakhs Idea Fund Winner</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Lab Recognition</h4>
                  <p className="text-gray-600">Featured in RU Virtual Reality Lab launch</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">National Impact</h4>
                  <p className="text-gray-600">Adopted by institutions across Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Strategic Partnerships</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-center mb-3">
                  {partner.icon}
                  <h4 className="font-semibold text-gray-900 ml-3">{partner.name}</h4>
                </div>
                <p className="text-gray-600">{partner.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}