import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Newsletter Archive | Department of Political Science',
  description: 'Complete archive of newsletters published by the Department of Political Science at Government College University Lahore',
};

export default function FullArchivePage() {
  const newsletters = [
    { year: 2023, quarter: 'Summer', period: 'April - June 2023', description: 'International conference highlights and faculty research updates' },
    { year: 2023, quarter: 'Spring', period: 'January - March 2023', description: 'Visiting scholar program and new faculty appointments' },
    { year: 2022, quarter: 'Winter', period: 'October - December 2022', description: 'Year-end review and annual department symposium highlights' },
    { year: 2022, quarter: 'Fall', period: 'July - September 2022', description: 'Faculty publications and research achievements' },
    { year: 2022, quarter: 'Summer', period: 'April - June 2022', description: 'Student research projects and conference presentations' },
    { year: 2022, quarter: 'Spring', period: 'January - March 2022', description: 'Alumni spotlights and departmental events' },
    { year: 2021, quarter: 'Winter', period: 'October - December 2021', description: 'COVID-19 adaptations and virtual learning initiatives' },
    { year: 2021, quarter: 'Fall', period: 'July - September 2021', description: 'Return to campus and safety protocols' },
    { year: 2021, quarter: 'Summer', period: 'April - June 2021', description: 'Online research collaborations and virtual conferences' },
    { year: 2021, quarter: 'Spring', period: 'January - March 2021', description: 'Digital transformation and remote learning success stories' },
    { year: 2020, quarter: 'Winter', period: 'October - December 2020', description: 'Pandemic response and community support initiatives' },
    { year: 2020, quarter: 'Fall', period: 'July - September 2020', description: 'Transition to online learning and faculty adaptations' },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Newsletter Archive</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of departmental newsletters from 2020 to present
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">All Newsletters</h2>
            <p className="text-gray-600 mt-1">Click on any newsletter to view or download</p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {newsletters.map((newsletter, index) => (
              <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-16 bg-accent bg-opacity-10 rounded flex items-center justify-center">
                          <span className="text-accent font-bold text-sm">{newsletter.year}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {newsletter.quarter} {newsletter.year}
                        </h3>
                        <p className="text-gray-500 text-sm mb-1">{newsletter.period}</p>
                        <p className="text-gray-600 text-sm">{newsletter.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-accent hover:text-accent-dark text-sm font-medium">
                      View Online
                    </button>
                    <button className="bg-accent text-white hover:bg-accent-dark px-4 py-2 rounded text-sm transition-colors">
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Looking for Older Issues?</h2>
            <p className="text-gray-600 mb-6">
              For newsletters published before 2020, please contact the department office. We maintain physical copies of all our publications since the department&apos;s establishment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-block bg-accent text-white hover:bg-accent-dark px-6 py-2 rounded-md transition-colors"
              >
                Contact Department
              </Link>
              <Link 
                href="/research/newsletters/subscribe" 
                className="inline-block bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-md transition-colors"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/research/newsletters" 
            className="inline-block bg-gray-200 text-gray-700 hover:bg-gray-300 px-6 py-2 rounded-md transition-colors"
          >
            Back to Newsletters
          </Link>
        </div>
      </div>
    </div>
  );
}