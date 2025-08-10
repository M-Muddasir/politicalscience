import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Guest Lectures | Department of Political Science',
  description: 'Guest lectures and seminars hosted by the Department of Political Science at GCU Lahore',
};

export default function GuestLecturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Guest Lectures & Seminars
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Distinguished speakers and experts share their insights with our academic community.
          </p>
        </div>

        <div className="relative h-64 mb-12 rounded-lg overflow-hidden">
          <Image 
            src="/images/slide2.jpg" 
            alt="Guest Lectures"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-white text-center">
              Enriching Academic Discourse
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Lectures</h3>
            <p className="text-gray-600 mb-4">
              We regularly invite renowned scholars, policymakers, and practitioners to share their expertise with our students and faculty.
            </p>
            <p className="text-gray-500">Check back for upcoming lecture announcements.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Past Lectures</h3>
            <p className="text-gray-600 mb-4">
              Our department has hosted distinguished speakers from various fields including international relations, comparative politics, and public policy.
            </p>
            <p className="text-gray-500">Archive of past lectures coming soon.</p>
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