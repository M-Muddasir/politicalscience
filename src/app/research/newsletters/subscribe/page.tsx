import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Subscribe to Newsletter | Department of Political Science',
  description: 'Subscribe to the Department of Political Science newsletter for updates on events, research, and achievements',
};

export default function SubscribePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Subscribe to Our Newsletter</h1>
            <p className="text-lg text-gray-600">
              Stay informed about the latest developments, events, and achievements in the Department of Political Science
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input 
                    type="text" 
                    id="firstname" 
                    name="firstname" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" 
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastname" 
                    name="lastname" 
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" 
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                  <option value="">Select your affiliation</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="alumni">Alumni</option>
                  <option value="researcher">Researcher</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="consent" 
                  name="consent" 
                  required
                  className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded" 
                />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                  I agree to receive the quarterly newsletter and occasional updates from the Department of Political Science. *
                </label>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="inline-block bg-accent text-white hover:bg-accent-dark px-8 py-3 rounded-md transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </div>
            </form>
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/research/newsletters" 
              className="inline-block bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-md transition-colors"
            >
              Back to Newsletters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}