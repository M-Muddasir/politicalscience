import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Alumni Scholarship Fund | Department of Political Science',
  description: 'Supporting talented students through the Alumni Scholarship Fund',
};

export default function AlumniScholarshipFundPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alumni Scholarship Fund</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Supporting talented students who face financial constraints in pursuing their education.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">About the Fund</h2>
          <p className="text-gray-600 mb-6">
            The Alumni Scholarship Fund supports talented students who face financial constraints. 
            Established in 2010, this fund has helped dozens of deserving students complete their 
            education at the department.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fund Objectives</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Support financially disadvantaged students</li>
                <li>Promote academic excellence</li>
                <li>Ensure equal access to education</li>
                <li>Build a stronger alumni network</li>
                <li>Foster departmental growth</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Eligibility Criteria</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Enrolled in department programs</li>
                <li>Demonstrated financial need</li>
                <li>Strong academic performance</li>
                <li>Good character and conduct</li>
                <li>Commitment to academic goals</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Impact & Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <p className="text-gray-600">Students Supported</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">PKR 2M+</div>
              <p className="text-gray-600">Total Fund Amount</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <p className="text-gray-600">Graduation Rate</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Contribute</h2>
          <p className="text-gray-600 mb-6">
            Alumni and friends of the department can contribute to the scholarship fund through various means. 
            Your contribution, no matter the size, makes a significant difference in a student&apos;s life.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">One-time Donation</h3>
              <p className="text-gray-600">Make a single contribution to support current scholarship recipients.</p>
            </div>
            
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Annual Giving</h3>
              <p className="text-gray-600">Commit to an annual donation to provide sustained support.</p>
            </div>
            
            <div className="border-l-4 border-accent pl-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Endowment</h3>
              <p className="text-gray-600">Create a lasting legacy with an endowed scholarship in your name.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/contact" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors mr-4">
            Donate Now
          </Link>
          <Link href="/alumni" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Alumni
          </Link>
        </div>
      </div>
    </div>
  );
}