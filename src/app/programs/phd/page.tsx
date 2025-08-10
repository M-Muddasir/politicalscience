import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'PhD in Political Science | Department of Political Science',
  description: 'Doctoral program in Political Science at Government College University Lahore',
};

export default function PhDProgramPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PhD in Political Science</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advance your research and academic career with our comprehensive doctoral program.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Overview</h2>
            <p className="text-gray-600 mb-6">
              The PhD in Political Science is designed for students who wish to pursue advanced research 
              and academic careers in political science. The program emphasizes rigorous scholarship, 
              original research, and critical analysis of political phenomena.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Program Highlights</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Research-intensive curriculum
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Expert faculty supervision
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Interdisciplinary approach
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Conference presentation opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Publication support
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Duration & Structure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    3-5 years full-time
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Coursework and comprehensive exams
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Dissertation research and defense
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Teaching assistantship opportunities
                  </li>
                  <li className="flex items-center">
                    <span className="text-accent mr-2">•</span>
                    Research methodology training
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Research Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Core Specializations</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Comparative Politics</li>
                  <li>• International Relations</li>
                  <li>• Political Theory</li>
                  <li>• Public Policy and Administration</li>
                  <li>• South Asian Politics</li>
                  <li>• Political Economy</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Emerging Areas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Digital Governance</li>
                  <li>• Environmental Politics</li>
                  <li>• Gender and Politics</li>
                  <li>• Security Studies</li>
                  <li>• Political Communication</li>
                  <li>• Human Rights</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Admission Requirements</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Academic Qualifications</h3>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Master&apos;s degree in Political Science or related field</li>
                  <li>• Minimum 60% marks or equivalent CGPA</li>
                  <li>• Strong academic record in previous degrees</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Application Materials</h3>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Research proposal (2000-3000 words)</li>
                  <li>• Statement of purpose</li>
                  <li>• Academic transcripts</li>
                  <li>• Two letters of recommendation</li>
                  <li>• Writing sample (published or unpublished)</li>
                  <li>• CV/Resume</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Selection Process</h3>
                <ul className="space-y-1 text-gray-600 ml-4">
                  <li>• Written entrance examination</li>
                  <li>• Interview with faculty committee</li>
                  <li>• Research proposal evaluation</li>
                  <li>• Academic record assessment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Financial Support</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Funding Opportunities</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• University research fellowships</li>
                  <li>• Teaching assistantships</li>
                  <li>• Research assistantships</li>
                  <li>• HEC indigenous scholarships</li>
                  <li>• International scholarship programs</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Monthly stipend</li>
                  <li>• Tuition fee waiver</li>
                  <li>• Research funding</li>
                  <li>• Conference travel support</li>
                  <li>• Library and lab access</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent bg-opacity-10 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Career Prospects</h2>
            <p className="text-gray-600 mb-4">
              PhD graduates are well-prepared for careers in academia, research institutions, 
              government agencies, international organizations, think tanks, and policy analysis.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">Academic Careers</h4>
                <p className="text-sm text-gray-600">University professor, researcher</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">Policy Analysis</h4>
                <p className="text-sm text-gray-600">Think tanks, government agencies</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-gray-800">International Organizations</h4>
                <p className="text-sm text-gray-600">UN, World Bank, NGOs</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/admissions" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors mr-4">
            Apply Now
          </Link>
          <Link href="/contact" className="inline-block bg-secondary text-white hover:bg-secondary-dark px-6 py-2 rounded-md transition-colors mr-4">
            Contact for Information
          </Link>
          <Link href="/programs" className="inline-block bg-gray-600 text-white hover:bg-gray-700 px-6 py-2 rounded-md transition-colors">
            Back to Programs
          </Link>
        </div>
      </div>
    </div>
  );
}