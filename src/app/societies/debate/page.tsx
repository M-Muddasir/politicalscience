import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Debate Society | Student Societies',
  description: 'Join the Debate Society at the Department of Political Science, GCU Lahore',
};

export default function DebateSocietyPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Debate Society</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enhance your public speaking and critical thinking skills through structured debates and discussions.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Society</h2>
              <p className="text-gray-600 mb-4">
                The Debate Society is one of the most active student organizations in the Department of Political Science.
                We organize regular debates, public speaking workshops, and participate in inter-university competitions.
              </p>
              <p className="text-gray-600 mb-6">
                Our members develop essential skills in argumentation, research, and public presentation that serve them
                well in their academic and professional careers.
              </p>
              <Link href="/societies" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Back to Societies
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/debate-society.jpg" 
                alt="Debate Society"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Activities</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Weekly debate sessions</li>
              <li>• Public speaking workshops</li>
              <li>• Inter-university competitions</li>
              <li>• Guest speaker events</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Meeting Schedule</h3>
            <p className="text-gray-600 mb-2">Every Friday at 3:00 PM</p>
            <p className="text-gray-600">Room 105, Political Science Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}