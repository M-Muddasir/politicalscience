import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Society Events | Student Societies',
  description: 'Upcoming and past events organized by student societies at the Department of Political Science',
};

export default function SocietyEventsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Society Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest events and activities organized by our student societies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Link href="/societies/events/debate-championship" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Image 
                src="/images/debate-championship.jpg" 
                alt="Debate Championship"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Debate Championship</h3>
            <p className="text-gray-600 mb-4">
              Inter-university debate competition featuring teams from across Punjab.
            </p>
            <span className="text-accent font-medium">Learn More →</span>
          </Link>

          <Link href="/societies/events/model-un-2023" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Image 
                src="/images/model-un-conference.jpg" 
                alt="Model UN Conference"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Model UN Conference 2023</h3>
            <p className="text-gray-600 mb-4">
              Three-day Model United Nations conference with international participation.
            </p>
            <span className="text-accent font-medium">Learn More →</span>
          </Link>

          <Link href="/societies/events/policy-symposium" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">
              <Image 
                src="/images/policy-symposium.jpg" 
                alt="Policy Symposium"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Policy Research Symposium</h3>
            <p className="text-gray-600 mb-4">
              Annual symposium showcasing student research on contemporary policy issues.
            </p>
            <span className="text-accent font-medium">Learn More →</span>
          </Link>
        </div>

        <div className="text-center">
          <Link href="/societies" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Societies
          </Link>
        </div>
      </div>
    </div>
  );
}