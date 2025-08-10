import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getEvent(id: string) {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: id
      },
      include: {
        society: true
      }
    });
    
    return event;
  } catch (error) {
    console.error('Error fetching event:', error);
    return null;
  }
}

async function getRelatedEvents(societyId: string | null, currentEventId: string) {
  try {
    const relatedEvents = await prisma.event.findMany({
      where: {
        id: {
          not: currentEventId
        },
        ...(societyId ? { societyId: societyId } : {})
      },
      orderBy: {
        date: 'desc'
      },
      take: 3
    });
    
    return relatedEvents;
  } catch (error) {
    console.error('Error fetching related events:', error);
    return [];
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

export default async function EventDetailPage({ params }: { params: { id: string } }) {
  const event = await getEvent(params.id);
  
  if (!event) {
    return notFound();
  }
  
  const relatedEvents = await getRelatedEvents(event.societyId, event.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/events" className="text-gray-500 hover:text-primary">Events</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900">{event.title}</span>
          </nav>
        </div>
        
        {/* Event Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{event.title}</h1>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-6">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{formatEventDate(event.date)}</span>
            </div>
            
            {event.venue && (
              <div className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{event.venue}</span>
              </div>
            )}
            
            {event.society && (
              <span className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full">
                {event.society.name}
              </span>
            )}
          </div>
        </div>
        
        {/* Featured Image */}
        {event.imageUrl && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: event.description.replace(/\\n/g, '<br />') }} />
          
          {/* Organization info */}
          {event.society && (
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Organized by</h3>
              <p className="mb-0">{event.society.name}</p>
            </div>
          )}
        </div>
        
        {/* Related Events */}
        {relatedEvents.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Related Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedEvents.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/events/${related.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="h-44 relative">
                      {related.imageUrl ? (
                        <Image
                          src={related.imageUrl}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-1">{formatEventDate(related.date)}</p>
                      <h4 className="font-semibold text-primary group-hover:text-accent mb-2 line-clamp-2">{related.title}</h4>
                      {related.venue && (
                        <p className="text-sm text-gray-600 mb-2">{related.venue}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Back Button */}
        <div className="mt-12">
          <Link 
            href="/events"
            className="flex items-center text-primary hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
