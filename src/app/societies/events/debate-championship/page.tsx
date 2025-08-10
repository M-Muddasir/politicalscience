import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Annual Debate Championship | Society Events',
  description: 'Annual Debate Championship organized by the Debate Society at GCU Lahore',
};

export default function DebateChampionshipPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Annual Debate Championship</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The premier inter-university debate competition in Punjab, bringing together the best debating talent.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Event Details</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong>Date:</strong> March 15-17, 2024
                </div>
                <div>
                  <strong>Venue:</strong> Main Auditorium, GCU Lahore
                </div>
                <div>
                  <strong>Format:</strong> British Parliamentary Style
                </div>
                <div>
                  <strong>Teams:</strong> 32 teams from 16 universities
                </div>
                <div>
                  <strong>Prize Pool:</strong> PKR 200,000
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
                src="/images/slide1.jpg" 
                alt="Debate Championship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Competition Rounds</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Preliminary Rounds (6 rounds)</li>
              <li>• Quarter Finals</li>
              <li>• Semi Finals</li>
              <li>• Grand Final</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Registration</h3>
            <p className="text-gray-600 mb-4">Registration deadline: February 28, 2024</p>
            <p className="text-gray-600">Contact: debate.society@gcu.edu.pk</p>
          </div>
        </div>
      </div>
    </div>
  );
}