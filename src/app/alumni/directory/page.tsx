import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Alumni Directory | Department of Political Science',
  description: 'Connect with fellow alumni from the Department of Political Science',
};

export default function AlumniDirectoryPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Directory</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with fellow graduates and expand your professional network.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Access Alumni Directory</h2>
            <p className="text-gray-600 mb-6">
              Our alumni directory is a valuable resource for networking and professional connections. 
              To maintain privacy and security, access is restricted to registered alumni and current students.
            </p>
            
            <div className="bg-accent bg-opacity-10 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">How to Access</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Register as Alumni</h4>
                    <p className="text-gray-600">Complete your alumni registration to verify your graduation status.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Request Access</h4>
                    <p className="text-gray-600">Contact the department office to request directory access credentials.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <span className="bg-accent text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-800">Connect & Network</h4>
                    <p className="text-gray-600">Search for alumni by graduation year, field, or location to expand your network.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Directory Features</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Search by graduation year
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Filter by profession or industry
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Location-based networking
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Professional achievements
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Contact information (with consent)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Privacy & Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Verified alumni access only
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Opt-in contact sharing
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Secure login credentials
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Regular data updates
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  GDPR compliant
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Notable Alumni Highlights</h2>
            <p className="text-gray-600 mb-6">
              Our alumni have made significant contributions in various fields including government, 
              academia, international relations, journalism, and civil society organizations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-accent bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h4 className="font-semibold text-gray-800">Government</h4>
                <p className="text-sm text-gray-600">Civil servants, diplomats, policy makers</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="font-semibold text-gray-800">Academia</h4>
                <p className="text-sm text-gray-600">Professors, researchers, scholars</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📰</span>
                </div>
                <h4 className="font-semibold text-gray-800">Media</h4>
                <p className="text-sm text-gray-600">Journalists, analysts, commentators</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/alumni/register" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors mr-4">
            Register for Access
          </Link>
          <Link href="/contact" className="inline-block bg-secondary text-white hover:bg-secondary-dark px-6 py-2 rounded-md transition-colors mr-4">
            Request Directory Access
          </Link>
          <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}