import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getFacultMember(id: string) {
  try {
    const facultyMember = await prisma.faculty.findUnique({
      where: {
        id: id
      },
    });
    return facultyMember;
  } catch (error) {
    console.error('Error fetching faculty member:', error);
    return null;
  }
}

export default async function FacultyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const facultyMember = await getFacultMember(id);

  if (!facultyMember) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/faculty" className="flex items-center text-primary mb-8 hover:text-primary-dark">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Faculty
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          {/* Faculty Image */}
          <div className="md:w-1/3 relative">
            <div className="h-80 md:h-full relative">
              {facultyMember.imageUrl ? (
                <Image
                  src={facultyMember.imageUrl}
                  alt={facultyMember.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">No image available</span>
                </div>
              )}
            </div>
          </div>

          {/* Faculty Information */}
          <div className="md:w-2/3 p-8">
            <h1 className="text-3xl font-bold text-primary mb-2">{facultyMember.name}</h1>
            <p className="text-xl text-secondary font-medium mb-6">{facultyMember.designation}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold text-primary mb-3">Contact Information</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Email:</span> {facultyMember.email}
                </p>
                {facultyMember.phone && (
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Phone:</span> {facultyMember.phone}
                  </p>
                )}
              </div>

              <div>
                <h2 className="text-lg font-semibold text-primary mb-3">Academic Background</h2>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Designation:</span> {facultyMember.designation}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Expertise:</span> {facultyMember.expertise}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Joined:</span> {new Date(facultyMember.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            {/* Biography */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-primary mb-3">Biography</h2>
              <p className="text-gray-700 leading-relaxed">{facultyMember.bio}</p>
            </div>

            {/* Research and Publications - These would be in separate tables in a more detailed implementation */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-primary mb-3">Research Interests</h2>
              <p className="text-gray-700">
                The faculty member&apos;s detailed research interests and publications would be displayed here.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses Taught Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Courses Taught</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            Information about courses taught by this faculty member would be displayed here.
          </p>
        </div>
      </div>

      {/* Publications Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-primary mb-6">Selected Publications</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            Publications by this faculty member would be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
}
