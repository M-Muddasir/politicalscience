import React from 'react';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getPrograms() {
  try {
    const programs = await prisma.program.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    return programs;
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

export default async function ProgramsPage() {
  const programs = await getPrograms();

  // Define degree level order for sorting
  const degreeOrder = {
    'Bachelor': 1,
    'Master': 2,
    'MPhil': 3,
    'PhD': 4,
  };

  // Sort programs by degree level
  const sortedPrograms = [...programs].sort((a, b) => {
    return degreeOrder[a.degreeType as keyof typeof degreeOrder] - degreeOrder[b.degreeType as keyof typeof degreeOrder];
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Academic Programs</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 text-center">
          The Department of Political Science offers a comprehensive range of academic programs 
          from undergraduate to doctoral level, designed to provide students with a solid foundation 
          in political theory, international relations, and public policy.
        </p>
      </div>

      {programs.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">Program information is currently being updated.</p>
        </div>
      ) : (
        <div className="space-y-16">
          {sortedPrograms.map((program) => (
            <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary p-6">
                <h2 className="text-2xl font-bold text-black">{program.name}</h2>
                <p className="text-black/90 mt-2">{program.duration} • {program.degreeType} Program</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Program Details</h3>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-medium text-gray-700 w-32">Degree Level:</span>
                        <span className="text-gray-600">{program.degreeType}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-700 w-32">Duration:</span>
                        <span className="text-gray-600">{program.duration}</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium text-gray-700 w-32">Credit Hours:</span>
                        <span className="text-gray-600">{program.creditHours}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">Admission Requirements</h3>
                    <p className="text-gray-600">{program.eligibility}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <Link href={`/programs/${program.id}`} 
                    className="inline-block bg-secondary hover:bg-secondary-dark text-black font-medium py-2 px-6 rounded-md transition duration-300">
                    Program Details
                  </Link>
                  
                  <Link href="/admissions" 
                    className="inline-block bg-primary hover:bg-primary-dark text-black font-medium py-2 px-6 rounded-md transition duration-300">
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Program Comparison Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">Program Comparison</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-primary text-black">
                <th className="py-4 px-6 text-left">Program</th>
                <th className="py-4 px-6 text-left">Degree Level</th>
                <th className="py-4 px-6 text-left">Duration</th>
                <th className="py-4 px-6 text-left">Credit Hours</th>
                <th className="py-4 px-6 text-left">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              {sortedPrograms.map((program, index) => (
                <tr key={program.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-4 px-6 font-medium">{program.name}</td>
                  <td className="py-4 px-6">{program.degreeType}</td>
                  <td className="py-4 px-6">{program.duration}</td>
                  <td className="py-4 px-6">{program.creditHours}</td>
                  <td className="py-4 px-6">{program.eligibility}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Admissions CTA */}
      <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center text-black">
        <h2 className="text-2xl font-bold mb-4">Ready to Join Our Programs?</h2>
        <p className="mb-6">
          Take the next step in your academic journey with the Department of Political Science at GCU Lahore.
        </p>
        <Link href="/admissions" 
          className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-md transition duration-300">
          Apply Now
        </Link>
      </div>
    </div>
  );
}
