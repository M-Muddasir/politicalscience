import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Model UN Conference 2023 | Society Events',
  description: 'Model UN Conference 2023 organized by the Model UN Society at GCU Lahore',
};

export default function ModelUN2023Page() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Model UN Conference 2023</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A three-day diplomatic simulation bringing together students from across the region.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conference Details</h2>
              <div className="space-y-4 text-gray-600">
                <div>
                  <strong>Date:</strong> November 10-12, 2023
                </div>
                <div>
                  <strong>Venue:</strong> Conference Center, GCU Lahore
                </div>
                <div>
                  <strong>Theme:</strong> &quot;Global Challenges, Collective Solutions&quot;
                </div>
                <div>
                  <strong>Delegates:</strong> 200+ from 25 universities
                </div>
                <div>
                  <strong>Committees:</strong> 6 specialized committees
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
                src="/images/model-un-conference.jpg" 
                alt="Model UN Conference 2023"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Committees</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• UN Security Council</li>
              <li>• UN Human Rights Council</li>
              <li>• UN Economic and Social Council</li>
              <li>• International Court of Justice</li>
              <li>• Crisis Committee</li>
              <li>• Historical Security Council</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Awards</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Best Delegate Awards</li>
              <li>• Outstanding Delegate Awards</li>
              <li>• Honorable Mention Awards</li>
              <li>• Best Position Paper Awards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}