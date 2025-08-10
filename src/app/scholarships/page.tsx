import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Scholarships | Department of Political Science',
  description: 'Scholarship opportunities for students at the Department of Political Science, GCU Lahore',
};

export default function ScholarshipsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Scholarships</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Financial aid and scholarship opportunities for Political Science students at GCU Lahore
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/slide3.jpg" 
                  alt="Scholarships"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Scholarship Opportunities</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at GCU Lahore is committed to supporting talented and deserving students through various scholarships and financial aid programs. These opportunities aim to recognize academic excellence, address financial needs, and promote diversity within our student body.
              </p>
              <p className="text-gray-600">
                We offer a range of scholarships, including merit-based awards, need-based financial aid, and specialized scholarships for specific categories of students. Additionally, our department collaborates with external organizations, government bodies, and alumni to provide more scholarship opportunities for our students.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Types of Scholarships</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Merit-Based Scholarships
            </h3>
            <p className="text-gray-600 mb-6">
              Merit-based scholarships are awarded to students who demonstrate exceptional academic achievement or potential. These scholarships recognize and reward students who have excelled in their studies.
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">GCU Academic Excellence Scholarship</h4>
                <p className="text-gray-600 mb-2">
                  Awarded to top-performing students based on their CGPA or admission test scores.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4 mb-2">
                  <li>Full tuition fee waiver</li>
                  <li>Eligibility: Minimum CGPA of 3.75 or 90% marks in admission test</li>
                  <li>Duration: Entire program, subject to maintaining a minimum CGPA of 3.5</li>
                </ul>
                <Link href="/scholarships/apply" className="text-accent hover:underline">Application Details →</Link>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Vice Chancellor&apos;s Merit Scholarship</h4>
                <p className="text-gray-600 mb-2">
                  Prestigious scholarship awarded to exceptional students across all departments.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4 mb-2">
                  <li>Full tuition fee waiver plus monthly stipend of Rs. 15,000</li>
                  <li>Eligibility: Top 3 positions in admission merit list</li>
                  <li>Duration: One year, renewable based on academic performance</li>
                </ul>
                <Link href="/scholarships/apply" className="text-accent hover:underline">Application Details →</Link>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Political Science Research Excellence Award</h4>
                <p className="text-gray-600 mb-2">
                  Departmental scholarship for students demonstrating exceptional research potential.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4 mb-2">
                  <li>Partial tuition fee waiver (50%)</li>
                  <li>Eligibility: Outstanding research proposal or published work</li>
                  <li>Duration: One semester, renewable based on research progress</li>
                </ul>
                <Link href="/scholarships/apply" className="text-accent hover:underline">Application Details →</Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Need-Based Financial Aid
            </h3>
            <p className="text-gray-600 mb-6">
              Need-based financial aid is provided to academically qualified students who demonstrate financial need. These scholarships aim to ensure that financial constraints do not hinder deserving students from pursuing education.            
            </p>
            <div className="space-y-6">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">GCU Need-Based Scholarship Program</h4>
                <p className="text-gray-600 mb-2">
                  Comprehensive financial support for students from low-income backgrounds.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4 mb-2">
                  <li>Up to 100% tuition fee waiver based on family income evaluation</li>
                  <li>Eligibility: Family income below Rs. 40,000 per month</li>
                  <li>Duration: Entire program, subject to annual financial review</li>
                </ul>
                <Link href="/scholarships/apply" className="text-accent hover:underline">Application Details →</Link>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">HEC Need-Based Scholarship</h4>
                <p className="text-gray-600 mb-2">
                  Government-funded scholarship administered through the Higher Education Commission.
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4 mb-2">
                  <li>Full tuition fee waiver plus monthly stipend</li>
                  <li>Eligibility: Pakistani nationals with demonstrated financial need</li>
                  <li>Duration: Entire degree program</li>
                </ul>
                <Link href="/scholarships/apply" className="text-accent hover:underline">Application Details →</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              International Scholarships
            </h3>
            <p className="text-gray-600 mb-4">
              These scholarships are available for international study, research, and exchange programs.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Fulbright Scholarship Program</h4>
                <p className="text-gray-600 mb-1">For graduate studies in the United States</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Commonwealth Scholarships</h4>
                <p className="text-gray-600 mb-1">For studies in the UK and other Commonwealth countries</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">DAAD Scholarships</h4>
                <p className="text-gray-600 mb-1">For studies and research in Germany</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              External Scholarships &amp; Grants
            </h3>
            <p className="text-gray-600 mb-4">
              These scholarships are offered by external organizations, foundations, and government bodies.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Prime Minister&apos;s Fee Reimbursement Scheme</h4>
                <p className="text-gray-600 mb-1">For students from less developed areas</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Punjab Educational Endowment Fund</h4>
                <p className="text-gray-600 mb-1">For talented students from Punjab province</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
              
              <div className="border-l-4 border-accent pl-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-1">Pakistan Bait-ul-Mal Scholarships</h4>
                <p className="text-gray-600 mb-1">For orphans and children from disadvantaged backgrounds</p>
                <Link href="/contact" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 1: Check Eligibility</h3>
              <p className="text-gray-600">
                Review the eligibility criteria and requirements for each scholarship program. Different scholarships have different requirements related to academic performance, financial need, and other factors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 2: Submit Application</h3>
              <p className="text-gray-600">
                Complete the scholarship application form and submit all required documents by the deadline. Make sure to include academic transcripts, financial statements, and any other requested materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Step 3: Selection Process</h3>
              <p className="text-gray-600">
                Shortlisted candidates may be called for interviews or further document verification. The scholarship committee will evaluate applications based on merit, need, and other specific criteria.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/scholarships/apply" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              Apply for Scholarships
            </Link>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Scholarship Office</h2>
          <p className="text-gray-600 mb-6">
            For more information about scholarships or assistance with the application process, please contact the Department&apos;s Scholarship Office.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Information</h3>
              <p className="text-gray-600 mb-1">Ms. Saadia Ahmed, Scholarship Coordinator</p>
              <p className="text-gray-600 mb-1">Email: scholarships.polsc@gcu.edu.pk</p>
              <p className="text-gray-600 mb-1">Phone: +92-42-99213344 Ext. 123</p>
              <p className="text-gray-600">Office: Room 101, Political Science Department Building</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-1">Monday to Thursday: 9:00 AM - 3:00 PM</p>
              <p className="text-gray-600">Friday: 9:00 AM - 12:30 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
