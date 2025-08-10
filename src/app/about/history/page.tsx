import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Department History | Department of Political Science',
  description: 'History of the Department of Political Science at Government College University Lahore',
};

export default function HistoryPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Department History</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey through the rich heritage and evolution of the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8 mb-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/gcu-vc.png" 
                  alt="Historical Image of GCU Department of Political Science"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Establishment</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at Government College University Lahore was established in 1924, as one of the first political science departments in the subcontinent. It was founded with a vision to provide a comprehensive understanding of political theories, governance systems, and international relations to students in the region.
              </p>
              <p className="text-gray-600">
                At its inception, the department focused primarily on political philosophy and colonial governance systems. Over the years, it has evolved to encompass a broader curriculum covering various aspects of modern political science, international relations, and public administration.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Key Milestones</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">1924</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Foundation Year</h3>
                  <p className="text-gray-600">
                    The Department of Political Science was formally established at Government College Lahore (now GCU).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">1947</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Post-Independence Era</h3>
                  <p className="text-gray-600">
                    After Pakistan&apos;s independence, the department played a crucial role in developing political science education focused on the newly formed state&apos;s political system.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">1965</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Expansion of Programs</h3>
                  <p className="text-gray-600">
                    Introduction of specialized courses in International Relations and Comparative Politics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">1986</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Research Journal Launch</h3>
                  <p className="text-gray-600">
                    Launched the Quarterly Journal of Political Studies (QJPS), which later evolved into QJPSS.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">2002</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">University Status</h3>
                  <p className="text-gray-600">
                    With GCU&apos;s elevation to university status, the department expanded its academic offerings to include MPhil and PhD programs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="bg-accent rounded-full text-black p-3 mr-4">
                  <span className="text-lg font-bold">2015</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">China Study Centre</h3>
                  <p className="text-gray-600">
                    Establishment of the specialized China Study Centre to focus on Chinese politics and Pakistan-China relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Notable Alumni</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Dr. Ahmad Khan</h3>
              <p className="text-sm text-gray-500 mb-2">Graduated 1962</p>
              <p className="text-gray-600">Former Ambassador to United Nations</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Prof. Samina Ali</h3>
              <p className="text-sm text-gray-500 mb-2">Graduated 1975</p>
              <p className="text-gray-600">Renowned Political Analyst & Author</p>
            </div>
            
            <div className="text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Mr. Tariq Mahmood</h3>
              <p className="text-sm text-gray-500 mb-2">Graduated 1988</p>
              <p className="text-gray-600">Former Foreign Secretary</p>
            </div>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Legacy of Excellence</h2>
          <p className="text-gray-600 mb-4">
            Throughout its history, the Department of Political Science at GCU Lahore has maintained a tradition of academic excellence and intellectual rigor. It has consistently produced graduates who have gone on to make significant contributions in academia, politics, diplomacy, and public service.
          </p>
          <p className="text-gray-600">
            The department&apos;s commitment to quality education, research, and community engagement has established it as one of the premier institutions for political science studies in Pakistan. As we move forward, we continue to build on this rich legacy while adapting to the evolving landscape of political studies in the 21st century.
          </p>
        </div>

        <div className="text-center">
          <Link href="/about" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to About Us
          </Link>
        </div>
      </div>
    </div>
  );
}
