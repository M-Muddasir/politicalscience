import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'China Study Centre | Department of Political Science',
  description: 'Learn about the China Study Centre at the Department of Political Science, GCU Lahore',
};

export default function ChinaStudyCentrePage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">China Study Centre</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Advancing research and understanding of Chinese politics and Pakistan-China relations
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8 mb-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="relative h-72 w-full">
                <Image 
                  src="/images/china-study-centre.jpg" 
                  alt="China Study Centre"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Centre</h2>
              <p className="text-gray-600 mb-4">
                The China Study Centre at the Department of Political Science, GCU Lahore, was established in 2015 as a specialized research unit dedicated to the study of Chinese politics, economy, culture, and Pakistan-China relations.
              </p>
              <p className="text-gray-600">
                The Centre serves as a hub for academic exchange, policy research, and cultural understanding between Pakistan and China, facilitating collaborative projects, scholarly publications, and public engagement activities.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Mission</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">To promote academic research on Chinese political, economic, and social systems</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">To analyze Pakistan-China relations, with special focus on CPEC and its implications</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">To facilitate scholarly exchange between Pakistani and Chinese academics</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">To provide policy recommendations for enhancing bilateral relations</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Research Focus Areas</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-gray-600">China's Foreign Policy and International Relations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-gray-600">China-Pakistan Economic Corridor (CPEC)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-gray-600">Chinese Political System and Governance</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-gray-600">Belt and Road Initiative (BRI)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-secondary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span className="text-gray-600">Cultural and Educational Exchange Programs</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Activities and Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="rounded-full bg-accent bg-opacity-10 p-4 inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Conferences & Seminars</h3>
              <p className="text-gray-600">
                Regular academic conferences and seminars on China-related topics, featuring international speakers and researchers.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-accent bg-opacity-10 p-4 inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Publications</h3>
              <p className="text-gray-600">
                Research papers, policy briefs, and books on Chinese politics, economy, and Pakistan-China relations.
              </p>
            </div>

            <div className="text-center">
              <div className="rounded-full bg-accent bg-opacity-10 p-4 inline-flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exchange Programs</h3>
              <p className="text-gray-600">
                Faculty and student exchange programs with Chinese universities to promote cross-cultural understanding.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Collaborations</h2>
          <p className="text-gray-600 mb-6">
            The China Study Centre collaborates with various Chinese and international institutions to promote research and understanding:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Tsinghua University</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Peking University</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">Chinese Academy of Social Sciences</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <p className="font-semibold">China Institute of International Studies</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact the Centre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Director</h3>
              <p className="text-gray-600 mb-1">Prof. Dr. Abdullah Khan</p>
              <p className="text-gray-600 mb-1">Email: china.centre@gcu.edu.pk</p>
              <p className="text-gray-600">Phone: +92-42-99213344</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-600 mb-1">Monday to Friday: 9:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Room 201, Political Science Department Building</p>
            </div>
          </div>
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
