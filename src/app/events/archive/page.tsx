import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Events Archive | Department of Political Science',
  description: 'Archive of past events hosted by the Department of Political Science at GCU Lahore',
};

export default function EventsArchivePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of past events, conferences, and academic activities.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Events</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Political Science Conference 2023</h3>
              <p className="text-gray-600 mb-2">March 15-16, 2023</p>
              <p className="text-gray-500">
                A comprehensive conference featuring presentations on contemporary political issues, research methodologies, and policy analysis.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Democracy and Governance Symposium</h3>
              <p className="text-gray-600 mb-2">November 20, 2022</p>
              <p className="text-gray-500">
                An interdisciplinary symposium examining the challenges and opportunities in democratic governance.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Relations Workshop</h3>
              <p className="text-gray-600 mb-2">September 10, 2022</p>
              <p className="text-gray-500">
                A workshop focusing on current trends in international relations and foreign policy analysis.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">More archived events will be added soon.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/events" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}