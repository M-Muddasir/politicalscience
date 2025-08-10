import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Community Service Society | Student Societies',
  description: 'Join the Community Service Society at the Department of Political Science, GCU Lahore',
};

export default function CommunityServicePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Community Service Society</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Make a positive impact in the community through volunteer work and social initiatives.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Society</h2>
              <p className="text-gray-600 mb-4">
                The Community Service Society is dedicated to serving the local community through various
                volunteer initiatives and social welfare programs.
              </p>
              <p className="text-gray-600 mb-6">
                Our members engage in meaningful community work that addresses social issues and helps
                build stronger, more inclusive communities.
              </p>
              <Link href="/societies" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Back to Societies
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/chairperson.jpeg" 
                alt="Community Service Society"
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
              <li>• Community outreach programs</li>
              <li>• Educational support initiatives</li>
              <li>• Environmental awareness campaigns</li>
              <li>• Social welfare projects</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Meeting Schedule</h3>
            <p className="text-gray-600 mb-2">Every Saturday at 10:00 AM</p>
            <p className="text-gray-600">Community Hall, Political Science Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}