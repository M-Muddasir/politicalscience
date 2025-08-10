import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Policy Forum | Student Societies',
  description: 'Join the Policy Forum at the Department of Political Science, GCU Lahore',
};

export default function PolicyForumPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Policy Forum</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Engage in policy analysis and research on contemporary political and social issues.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">About the Forum</h2>
              <p className="text-gray-600 mb-4">
                The Policy Forum brings together students interested in policy research, analysis, and
                development. We focus on both domestic and international policy issues affecting Pakistan.
              </p>
              <p className="text-gray-600 mb-6">
                Our members conduct research, write policy briefs, and engage with policymakers to
                contribute to informed public discourse and policy development.
              </p>
              <Link href="/societies" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Back to Societies
              </Link>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/slide3.jpg" 
                alt="Policy Forum"
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
              <li>• Policy research projects</li>
              <li>• Policy brief writing workshops</li>
              <li>• Guest lectures by policymakers</li>
              <li>• Policy analysis seminars</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Meeting Schedule</h3>
            <p className="text-gray-600 mb-2">Every Tuesday at 2:00 PM</p>
            <p className="text-gray-600">Seminar Room, Political Science Department</p>
          </div>
        </div>
      </div>
    </div>
  );
}