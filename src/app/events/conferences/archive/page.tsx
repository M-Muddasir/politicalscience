import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Conference Archive | Department of Political Science',
  description: 'Archive of past conferences hosted by the Department of Political Science at GCU Lahore',
};

export default function ConferencesArchivePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conference Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse through our collection of past academic conferences and symposia.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Conferences</h2>
          
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Political Science Conference 2023</h3>
              <p className="text-gray-600 mb-2">March 15-16, 2023</p>
              <p className="text-gray-500 mb-4">
                Theme: &quot;Democracy in the Digital Age: Challenges and Opportunities&quot;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Sessions:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Digital Governance and E-Democracy</li>
                    <li>Social Media and Political Participation</li>
                    <li>Cybersecurity and National Security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Keynote Speakers:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Dr. Sarah Johnson (Oxford University)</li>
                    <li>Prof. Ahmed Hassan (LSE)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Democracy and Governance Symposium 2022</h3>
              <p className="text-gray-600 mb-2">November 20, 2022</p>
              <p className="text-gray-500 mb-4">
                Theme: &quot;Strengthening Democratic Institutions in South Asia&quot;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Key Sessions:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Electoral Systems and Representation</li>
                    <li>Judicial Independence and Rule of Law</li>
                    <li>Civil Society and Democratic Participation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Participants:</h4>
                  <p className="text-gray-600 text-sm">Over 150 academics, policymakers, and civil society representatives</p>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">International Relations Workshop 2022</h3>
              <p className="text-gray-600 mb-2">September 10, 2022</p>
              <p className="text-gray-500 mb-4">
                Theme: &quot;Regional Security Dynamics in South Asia&quot;
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Focus Areas:</h4>
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    <li>Nuclear Security and Non-Proliferation</li>
                    <li>Economic Cooperation and Trade</li>
                    <li>Climate Change and Environmental Security</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Format:</h4>
                  <p className="text-gray-600 text-sm">Interactive workshop with panel discussions and working groups</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">Conference proceedings and presentations are available upon request.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/events/conferences" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Conferences
          </Link>
        </div>
      </div>
    </div>
  );
}