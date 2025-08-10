import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getProgram(id: string) {
  try {
    const program = await prisma.program.findUnique({
      where: {
        id: Number(id)
      },
    });
    return program;
  } catch (error) {
    console.error('Error fetching program:', error);
    return null;
  }
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const program = await getProgram(id);
  
  if (!program) {
    notFound();
  }

  // Mock courses for this program (in a real implementation, these would come from the database)
  const courses = [
    { id: 1, code: `${program.name.slice(0, 2).toUpperCase()}101`, name: 'Introduction to Political Science', creditHours: 3, semester: 1 },
    { id: 2, code: `${program.name.slice(0, 2).toUpperCase()}102`, name: 'Political Theory', creditHours: 3, semester: 1 },
    { id: 3, code: `${program.name.slice(0, 2).toUpperCase()}201`, name: 'International Relations', creditHours: 3, semester: 2 },
    { id: 4, code: `${program.name.slice(0, 2).toUpperCase()}202`, name: 'Comparative Politics', creditHours: 3, semester: 2 },
    { id: 5, code: `${program.name.slice(0, 2).toUpperCase()}301`, name: 'Research Methods in Political Science', creditHours: 3, semester: 3 },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/programs" className="flex items-center text-primary mb-8 hover:text-primary-dark">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Programs
      </Link>

      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Program Header */}
        <div className="bg-primary p-8 text-black">
          <h1 className="text-3xl font-bold mb-2">{program.name}</h1>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
              {program.degreeType} Program
            </span>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
              {program.duration}
            </span>
            <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm">
              {program.creditHours} Credit Hours
            </span>
          </div>
        </div>

        {/* Program Content */}
        <div className="p-8">
          {/* Overview Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Program Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {program.description}
            </p>
          </section>

          {/* Admission Requirements */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Admission Requirements</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">{program.eligibility}</p>
            </div>
          </section>

          {/* Program Structure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Program Structure</h2>
            <p className="text-gray-700 mb-4">
              The {program.name} program consists of core courses, elective courses, and {program.degreeType === 'Bachelor' ? 'a final-year project' : 'a research thesis'}.
            </p>

            <h3 className="text-xl font-semibold text-primary mb-3">Sample Courses</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left border-b">Course Code</th>
                    <th className="py-3 px-4 text-left border-b">Course Title</th>
                    <th className="py-3 px-4 text-center border-b">Credit Hours</th>
                    <th className="py-3 px-4 text-center border-b">Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td className="py-3 px-4 border-b">{course.code}</td>
                      <td className="py-3 px-4 border-b">{course.name}</td>
                      <td className="py-3 px-4 text-center border-b">{course.creditHours}</td>
                      <td className="py-3 px-4 text-center border-b">{course.semester}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">Note: This is a sample list of courses. The actual curriculum may vary.</p>
          </section>

          {/* Career Prospects */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Career Prospects</h2>
            <p className="text-gray-700 mb-4">
              Graduates of the {program.name} program have excellent career opportunities in various fields, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Government and civil service</li>
              <li>Diplomatic service and international organizations</li>
              <li>Policy analysis and think tanks</li>
              <li>Political consulting and advocacy</li>
              <li>Journalism and media</li>
              <li>Academia and research</li>
              {program.degreeType === 'Bachelor' ? null : <li>Higher education and research</li>}
              {program.degreeType === 'PhD' ? <li>University teaching positions</li> : null}
            </ul>
          </section>
        </div>

        {/* Apply Now CTA */}
        <div className="bg-gray-50 p-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">Ready to Apply?</h3>
              <p className="text-gray-600">Take the next step in your academic journey with the {program.name} program.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/admissions" 
                className="inline-block bg-secondary hover:bg-secondary-dark text-black font-medium py-3 px-8 rounded-md transition duration-300">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact for More Information */}
      <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-primary mb-4">Need More Information?</h2>
        <p className="text-gray-700 mb-4">
          If you have questions about the {program.name} program, please contact the Department of Political Science.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="mailto:politicalscience@gcu.edu.pk" 
            className="inline-block bg-primary hover:bg-primary-dark text-black font-medium py-2 px-6 rounded-md transition duration-300 text-center">
            Email Us
          </a>
          <Link href="/contact" 
            className="inline-block border border-primary text-primary hover:bg-primary hover:text-black font-medium py-2 px-6 rounded-md transition duration-300 text-center">
            Contact Form
          </Link>
        </div>
      </div>
    </div>
  );
}
