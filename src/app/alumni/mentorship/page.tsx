import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Alumni Mentorship Program | Department of Political Science',
  description: 'Connect with our alumni mentors for guidance and career advice',
};

export default function AlumniMentorshipPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Mentorship Program</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with our distinguished alumni for guidance, career advice, and networking opportunities.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Program</h2>
          <p className="text-gray-600 mb-6">
            Our Alumni Mentorship Program connects current students with graduates who provide guidance, 
            career advice, and networking opportunities. This initiative has helped many students navigate 
            their academic and professional journeys effectively.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Students</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Career guidance and advice</li>
                <li>Industry insights and trends</li>
                <li>Networking opportunities</li>
                <li>Academic support and motivation</li>
                <li>Professional development tips</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">For Alumni</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Give back to the department</li>
                <li>Share professional experience</li>
                <li>Build meaningful connections</li>
                <li>Contribute to student success</li>
                <li>Stay connected with the university</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Participate</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Students</h3>
              <p className="text-gray-600">
                Contact the department office to express your interest in the mentorship program. 
                We will match you with an appropriate alumni mentor based on your career interests and goals.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">For Alumni</h3>
              <p className="text-gray-600">
                If you are an alumnus interested in becoming a mentor, please reach out to us. 
                We welcome volunteers who can dedicate time to guide and support our current students.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors mr-4">
            Contact Us
          </Link>
          <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}