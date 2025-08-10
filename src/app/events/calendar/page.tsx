import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Events Calendar | Department of Political Science',
  description: 'Full calendar of events hosted by the Department of Political Science at GCU Lahore',
};

export default function EventsCalendarPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Events Calendar
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with all upcoming events, conferences, and activities organized by the Department of Political Science.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">Calendar integration coming soon.</p>
            <p className="text-gray-500">Please check back later for the full events calendar.</p>
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