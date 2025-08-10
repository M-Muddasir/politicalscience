import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import AdmissionForm from '@/components/admissions/AdmissionForm';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getPrograms() {
  try {
    const programs = await prisma.program.findMany({
      select: {
        id: true,
        name: true,
        degreeType: true,
      },
      orderBy: {
        degreeType: 'asc',
      },
    });
    return programs;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export default async function AdmissionsPage() {
  const programs = await getPrograms();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Admissions</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 text-center">
          Join the prestigious Department of Political Science at GCU Lahore and embark on a journey of academic excellence, 
          critical thinking, and leadership development.
        </p>
      </div>
      
      {/* Hero Banner */}
      <div className="relative h-[300px] rounded-lg overflow-hidden mb-12">
        <Image
          src="/images/university-building.jpg"
          alt="GCU Lahore Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
          <div className="text-black p-8 max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Your Future Begins Here</h2>
            <p className="mb-6">
              Our programs are designed to prepare students for careers in government, 
              diplomacy, research, and academia.
            </p>
          </div>
        </div>
      </div>
      
      {/* Admission Process */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Admission Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Research Programs</h3>
            <p className="text-gray-700">
              Explore our academic programs to find the one that best matches your academic interests and career goals.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Apply Online</h3>
            <p className="text-gray-700">
              Complete our online application form and submit all required documents including academic transcripts and letters of recommendation.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Admission Test & Interview</h3>
            <p className="text-gray-700">
              Qualified candidates will be invited for an admission test and/or interview to assess their aptitude and motivation.
            </p>
          </div>
        </div>
      </section>
      
      {/* Programs Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Available Programs</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b text-primary">Program</th>
                  <th className="py-3 px-4 text-left border-b text-primary">Degree Level</th>
                  <th className="py-3 px-4 text-center border-b text-primary">Details</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program) => (
                  <tr key={program.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b font-medium">{program.name}</td>
                    <td className="py-3 px-4 border-b">{program.degreeType}</td>
                    <td className="py-3 px-4 border-b text-center">
                      <Link href={`/programs/${program.id}`} 
                        className="text-primary hover:text-primary-dark font-medium">
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Admission Requirements */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Admission Requirements</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Undergraduate Programs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Intermediate/A-Level or equivalent with minimum 45% marks</li>
                <li>Pass the departmental admission test</li>
                <li>Interview performance (if shortlisted)</li>
                <li>Complete application form with all required documents</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Graduate Programs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Bachelor&apos;s/Master&apos;s degree in relevant field with minimum 60% marks</li>
                <li>Pass the departmental admission test</li>
                <li>Research proposal (for MPhil/PhD)</li>
                <li>Interview performance</li>
                <li>Complete application form with all required documents</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-primary mb-3">Required Documents</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Attested copies of academic transcripts and certificates</li>
              <li>Copy of CNIC/Passport</li>
              <li>Recent passport-sized photographs</li>
              <li>Character certificate from last attended institution</li>
              <li>Migration certificate (if applicable)</li>
              <li>Research proposal (for MPhil/PhD)</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Admission Enquiry Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Admission Enquiry</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-700 mb-6">
            Have questions about our admission process? Fill out the form below and our admissions team will get back to you.
          </p>
          
          <AdmissionForm programs={programs} />
        </div>
      </section>
      
      {/* Important Dates */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-primary mb-6">Important Dates</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left border-b text-primary">Activity</th>
                  <th className="py-3 px-4 text-left border-b text-primary">Fall Semester</th>
                  <th className="py-3 px-4 text-left border-b text-primary">Spring Semester</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Application Submission</td>
                  <td className="py-3 px-4 border-b">June 1 - July 15, 2025</td>
                  <td className="py-3 px-4 border-b">November 1 - December 15, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Admission Test</td>
                  <td className="py-3 px-4 border-b">July 25, 2025</td>
                  <td className="py-3 px-4 border-b">December 26, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Interviews</td>
                  <td className="py-3 px-4 border-b">August 5-10, 2025</td>
                  <td className="py-3 px-4 border-b">January 5-10, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Results Announcement</td>
                  <td className="py-3 px-4 border-b">August 20, 2025</td>
                  <td className="py-3 px-4 border-b">January 20, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Fee Payment Deadline</td>
                  <td className="py-3 px-4 border-b">August 30, 2025</td>
                  <td className="py-3 px-4 border-b">January 30, 2026</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 border-b font-medium">Classes Begin</td>
                  <td className="py-3 px-4 border-b">September 5, 2025</td>
                  <td className="py-3 px-4 border-b">February 5, 2026</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">Note: Dates are tentative and subject to change.</p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Admissions Office</h3>
              <p className="text-gray-700 mb-4">
                For any inquiries related to admissions, please contact:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>admissions@gcu.edu.pk</span>
                </li>
                <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+92-42-99213340</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Office Hours</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span>9:00 AM - 1:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
