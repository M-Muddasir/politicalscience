import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Model UN Society | Student Societies',
  description: 'Join the Model United Nations Society at the Department of Political Science, GCU Lahore',
};

export default function ModelUNPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Model United Nations Society</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience international diplomacy through Model UN simulations and conferences.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Society</h2>
              <p className="text-gray-600 mb-4">
                The Model United Nations Society provides students with hands-on experience in international
                relations, diplomacy, and global governance through realistic UN simulations.
              </p>
              <p className="text-gray-600 mb-6">
                Our members represent different countries in various UN committees, debating real-world issues
                and developing solutions to global challenges.
              </p>
              <Link href="/societies" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Back to Societies
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/model-un.jpg" 
                alt="Model UN Society"
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
              <li>• Model UN conferences</li>
              <li>• Diplomatic training workshops</li>
              <li>• International relations seminars</li>
              <li>• Crisis simulation exercises</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Meeting Schedule</h3>
            <p className="text-gray-600 mb-2">Every Wednesday at 4:00 PM</p>
            <p className="text-gray-600">Conference Room, Political Science Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}