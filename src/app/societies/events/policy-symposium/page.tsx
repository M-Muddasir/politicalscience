import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Policy Research Symposium | Society Events',
  description: 'Annual Policy Research Symposium organized by the Policy Forum at GCU Lahore',
};

export default function PolicySymposiumPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Policy Research Symposium</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Annual symposium showcasing cutting-edge student research on contemporary policy challenges.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Symposium Details</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong>Date:</strong> April 20-21, 2024
                </div>
                <div>
                  <strong>Venue:</strong> Seminar Hall, GCU Lahore
                </div>
                <div>
                  <strong>Theme:</strong> &quot;Policy Innovation for Sustainable Development&quot;
                </div>
                <div>
                  <strong>Participants:</strong> 150+ researchers and policymakers
                </div>
                <div>
                  <strong>Sessions:</strong> 12 research presentation sessions
                </div>
              </div>
              <div className="mt-6">
                <Link href="/societies/events" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                  Back to Events
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/policy-symposium.jpg" 
                alt="Policy Research Symposium"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Research Tracks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Economic Policy and Development</li>
              <li>• Social Policy and Welfare</li>
              <li>• Environmental Policy</li>
              <li>• Foreign Policy and Diplomacy</li>
              <li>• Governance and Public Administration</li>
              <li>• Technology and Digital Policy</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Keynote Speakers</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Dr. Sarah Ahmed - Policy Expert</li>
              <li>• Prof. Muhammad Ali - Economist</li>
              <li>• Ms. Fatima Khan - Development Specialist</li>
              <li>• Dr. Hassan Raza - Governance Expert</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}