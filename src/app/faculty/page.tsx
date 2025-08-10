import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getFaculty() {
  try {
    const faculty = await prisma.faculty.findMany({
      orderBy: {
        name: 'asc',
      },
    });
    return faculty;
  } catch (error) {
    console.error('Error fetching faculty:', error);
    return [];
  }
}

export default async function FacultyPage() {
  const faculty = await getFaculty();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Our Faculty</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 text-center">
          Our department is proud to host distinguished faculty members with expertise in various fields of political science, 
          international relations, and public policy. Our professors are dedicated to excellence in teaching, research, and mentoring.
        </p>
      </div>

      {faculty.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">Faculty information is currently being updated.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 relative overflow-hidden">
                {member.imageUrl ? (
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image available</span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-primary mb-1">{member.name}</h2>
                <p className="text-secondary font-medium mb-3">{member.designation}</p>
                
                <div className="mb-4">
                  <p className="text-gray-700"><span className="font-medium">Email:</span> {member.email}</p>
                  <p className="text-gray-700"><span className="font-medium">Expertise:</span> {member.expertise}</p>
                </div>
                
                {/* <div className="mt-4">
                  <Link href={`/faculty/${member.id}`} className="text-primary hover:text-primary-dark font-medium flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
