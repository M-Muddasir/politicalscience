import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Events | Department of Political Science',
  description: 'Upcoming and past events hosted by the Department of Political Science at GCU Lahore',
};

async function getEvents() {
  try {
    // Get current date
    const today = new Date();
    
    // Fetch upcoming events (events with date >= today)
    const upcomingEvents = await prisma.event.findMany({
      where: {
        date: {
          gte: today
        }
      },
      orderBy: {
        date: 'asc'
      },
      include: {
        society: true
      },
      take: 5
    });
    
    // Fetch past events (events with date < today)
    const pastEvents = await prisma.event.findMany({
      where: {
        date: {
          lt: today
        }
      },
      orderBy: {
        date: 'desc'
      },
      include: {
        society: true
      },
      take: 5
    });
    
    return { upcomingEvents, pastEvents };
  } catch (error) {
    console.error('Error fetching events:', error);
    return { upcomingEvents: [], pastEvents: [] };
  }
}

function formatEventDate(dateString: string | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function EventsPage() {
  const { upcomingEvents, pastEvents } = await getEvents();
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seminars, conferences, workshops, and other activities organized by the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h2>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No upcoming events scheduled at this time. Check back later!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {upcomingEvents.map((event: any, index: number) => (
                <div key={event.id} className={`flex flex-col md:flex-row ${index === 0 ? 'bg-accent bg-opacity-5' : 'border border-gray-200'} rounded-lg overflow-hidden`}>
                  <div className="relative md:w-1/4 h-48 md:h-auto">
                    {event.imageUrl ? (
                      <Image 
                        src={event.imageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-500">No image available</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6 md:w-3/4">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                      {index === 0 && (
                        <div className="px-3 py-1 bg-accent text-black text-sm rounded-full inline-block mt-2 md:mt-0">
                          Featured Event
                        </div>
                      )}
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formatEventDate(event.date)}</span>
                    </div>
                    {event.venue && (
                      <div className="flex items-center text-gray-500 mb-4">
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{event.venue}</span>
                      </div>
                    )}
                    <p className="text-gray-600 mb-4">
                      {event.description.length > 200 
                        ? `${event.description.substring(0, 200)}...` 
                        : event.description}
                    </p>
                    <Link href={`/events/${event.id}`} className="inline-block bg-accent text-black hover:bg-accent-dark px-4 py-2 rounded-md transition-colors">
                      Event Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/events/calendar" className="inline-block text-accent hover:underline">
              View Full Events Calendar
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/events/conferences" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col h-full">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="/images/conference.jpg" 
                  alt="Academic Conferences"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Conferences</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Annual conferences, symposia, and academic gatherings organized by the Department of Political Science.
              </p>
              <span className="text-accent hover:underline">Learn More →</span>
            </div>
          </Link>

          <Link href="/events/guest-lectures" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex flex-col h-full">
              <div className="relative h-48 mb-4 rounded-md overflow-hidden">
                <Image 
                  src="/images/guest-lecture.jpg" 
                  alt="Guest Lectures"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Guest Lectures</h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Distinguished speakers and visiting scholars sharing insights on contemporary political issues.
              </p>
              <span className="text-accent hover:underline">Learn More →</span>
            </div>
          </Link>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Past Events</h2>
          {pastEvents.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500">No past events to display.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {pastEvents.map((event: any) => (
                <div key={event.id} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                  <p className="text-gray-500 mb-3">
                    {formatEventDate(event.date)} {event.venue && `| ${event.venue}`}
                  </p>
                  <p className="text-gray-600">
                    {event.description.length > 150 
                      ? `${event.description.substring(0, 150)}...` 
                      : event.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link href={`/events/${event.id}`} className="text-sm text-accent hover:underline">View Details</Link>
                    {event.imageUrl && (
                      <Link href={`/events/${event.id}`} className="text-sm text-accent hover:underline">View Photos</Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <Link href="/events/archive" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View All Past Events
            </Link>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Host an Event with Us</h2>
          <p className="text-gray-600 mb-6">
            If you are interested in hosting an event in collaboration with the Department of Political Science, we welcome your proposals. Whether it&apos;s a conference, seminar, workshop, or guest lecture, we are open to partnerships that align with our academic goals and values.
          </p>
          <div className="text-center">
            <Link href="/contact" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              Contact Us for Event Collaboration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
