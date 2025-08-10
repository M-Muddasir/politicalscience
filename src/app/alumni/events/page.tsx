import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Alumni Events | Department of Political Science',
  description: 'Stay connected through alumni events and reunions',
};

export default function AlumniEventsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay connected with your alma mater through our alumni events, reunions, and networking opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Image 
                src="/images/slide1.jpg" 
                alt="Alumni Reunion"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Annual Alumni Reunion</h3>
            <p className="text-gray-600 mb-4">
              Join us for our annual reunion where alumni from different batches come together to reconnect, 
              share experiences, and celebrate their achievements.
            </p>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Date:</strong> December 2024 (TBA)
            </div>
            <div className="text-sm text-gray-500 mb-4">
              <strong>Venue:</strong> GCU Lahore Campus
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <Image 
                src="/images/slide2.jpg" 
                alt="Networking Event"
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Professional Networking Events</h3>
            <p className="text-gray-600 mb-4">
              Regular networking events that bring together alumni working in various sectors including 
              government, academia, international organizations, and private sector.
            </p>
            <div className="text-sm text-gray-500 mb-2">
              <strong>Frequency:</strong> Quarterly
            </div>
            <div className="text-sm text-gray-500 mb-4">
              <strong>Format:</strong> In-person and Virtual
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Alumni Career Panel</h3>
              <p className="text-gray-600 mb-2">
                A panel discussion featuring alumni from diverse career paths sharing their experiences 
                and advice with current students.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Date:</strong> Coming Soon | <strong>Format:</strong> Hybrid Event
              </div>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Distinguished Alumni Lecture Series</h3>
              <p className="text-gray-600 mb-2">
                Monthly lectures by distinguished alumni on contemporary political issues, 
                policy challenges, and international affairs.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Schedule:</strong> Monthly | <strong>Format:</strong> Virtual and In-person
              </div>
            </div>
            
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Regional Alumni Meetups</h3>
              <p className="text-gray-600 mb-2">
                Informal gatherings for alumni living in the same city or region to maintain 
                local connections and support networks.
              </p>
              <div className="text-sm text-gray-500">
                <strong>Locations:</strong> Lahore, Karachi, Islamabad, International
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Events Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Golden Jubilee Reunion 2023</div>
              <p className="text-gray-600">Celebrated 50 years of the department with over 200 alumni in attendance.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">International Alumni Conference</div>
              <p className="text-gray-600">Virtual conference connecting alumni from 15 countries worldwide.</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-2">Career Mentorship Workshop</div>
              <p className="text-gray-600">Successful workshop pairing 50 students with alumni mentors.</p>
            </div>
          </div>
        </div>

        <div className="bg-accent bg-opacity-10 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected</h2>
          <p className="text-gray-600 mb-6">
            Don&apos;t miss out on upcoming alumni events! Update your contact information and 
            join our alumni network to receive event notifications and updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors text-center">
              Update Contact Info
            </Link>
            <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors text-center">
              Alumni Directory
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}