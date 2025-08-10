import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'QJPSS Archive | Department of Political Science',
  description: 'Archive of all issues of the Quarterly Journal of Political Science Studies',
};

export default function QJPSSArchivePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            QJPSS Archive
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete archive of the Quarterly Journal of Political Science Studies
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">All Issues</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Volume 1, Issue 1</h3>
              <p className="text-gray-600 mb-2">January-March 2023</p>
              <p className="text-gray-500 text-sm mb-3">Latest Issue</p>
              <a href="#" className="text-accent hover:underline">Download PDF</a>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Volume 1, Issue 2</h3>
              <p className="text-gray-600 mb-2">April-June 2023</p>
              <p className="text-gray-500 text-sm mb-3">Coming Soon</p>
              <span className="text-gray-400">Not yet published</span>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">More issues will be added as they are published.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/research/qjpss" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to QJPSS
          </Link>
        </div>
      </div>
    </div>
  );
}