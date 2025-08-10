import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'QJPSS Journal | Department of Political Science',
  description: 'Quarterly Journal of Political Science Studies - A peer-reviewed academic journal by GCU Department of Political Science',
};

export default function QJPSSJournalPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Quarterly Journal of Political Science Studies</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A peer-reviewed academic journal published by the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative h-72 w-56 shadow-lg">
                <Image 
                  src="/images/slide3.jpg" 
                  alt="QJPSS Journal Cover"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About the Journal</h2>
              <p className="text-gray-600 mb-4">
                The Quarterly Journal of Political Science Studies (QJPSS) is a peer-reviewed academic journal published by the Department of Political Science at Government College University Lahore. Established in 1986, the journal has been a platform for scholarly discourse on political science, international relations, and public policy.
              </p>
              <p className="text-gray-600">
                QJPSS publishes original research articles, review papers, book reviews, and commentaries on contemporary political issues. The journal embraces diverse theoretical perspectives and methodological approaches, encouraging interdisciplinary research that contributes to the advancement of knowledge in political science.
              </p>
              
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium">HEC Recognized</span>
                <span className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium">Peer-Reviewed</span>
                <span className="bg-accent bg-opacity-10 text-accent px-3 py-1 rounded-full text-sm font-medium">Quarterly Publication</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Aims & Scope</h2>
            <p className="text-gray-600 mb-4">
              QJPSS aims to promote scholarly discourse and research in various fields of political science, including:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Comparative Politics</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">International Relations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Political Theory</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Public Policy</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Political Economy</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Pakistani Politics</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-accent mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-600">Regional Studies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Editorial Board</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Editor-in-Chief</h3>
                <p className="text-gray-600">Prof. Dr. Khalid Manzoor Butt</p>
                <p className="text-gray-500 text-sm">Chairperson, Department of Political Science</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Associate Editors</h3>
                <p className="text-gray-600">Dr. Amna Mahmood</p>
                <p className="text-gray-600">Dr. Muhammad Rizwan</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Assistant Editors</h3>
                <p className="text-gray-600">Dr. Saira Aquil</p>
                <p className="text-gray-600">Dr. Asad Ullah</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800">International Advisory Board</h3>
                <p className="text-gray-600">Prof. Dr. James Wilson, University of Oxford</p>
                <p className="text-gray-600">Prof. Dr. Li Zhang, Peking University</p>
                <p className="text-gray-600">Prof. Dr. Ahmed Hassan, Cairo University</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Latest Issues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-48 mx-auto mb-4 shadow-md">
                <Image 
                  src="/images/slide1.jpg" 
                  alt="QJPSS Journal Issue"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Volume 37, Issue 2</h3>
              <p className="text-gray-500 text-sm mb-2">April-June 2023</p>
              <Link href="/research/qjpss/archive" className="text-accent hover:underline">View Issue</Link>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-48 mx-auto mb-4 shadow-md">
                <Image 
                  src="/images/slide2.jpg" 
                  alt="QJPSS Journal Issue"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Volume 37, Issue 1</h3>
              <p className="text-gray-500 text-sm mb-2">January-March 2023</p>
              <Link href="/research/qjpss/archive" className="text-accent hover:underline">View Issue</Link>
            </div>

            <div className="text-center">
              <div className="relative h-64 w-48 mx-auto mb-4 shadow-md">
                <Image 
                  src="/images/slide3.jpg" 
                  alt="QJPSS Journal Issue"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Volume 36, Issue 4</h3>
              <p className="text-gray-500 text-sm mb-2">October-December 2022</p>
              <Link href="/research/qjpss/archive" className="text-accent hover:underline">View Issue</Link>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/research/qjpss/archive" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View All Issues
            </Link>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Guidelines for Authors</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              QJPSS welcomes original research contributions on all aspects of political science. Manuscripts should be submitted according to the following guidelines:
            </p>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Submission Process</h3>
              <p className="text-gray-600">
                Manuscripts should be submitted electronically to qjpss@gcu.edu.pk in MS Word format. All submissions are subject to initial editor screening and then a double-blind peer review process.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Manuscript Format</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                <li>Articles should be between 6,000-8,000 words including references</li>
                <li>Text should be double-spaced with 12-point Times New Roman font</li>
                <li>Include an abstract of 200-250 words</li>
                <li>Include 5-7 keywords</li>
                <li>Use APA 7th edition referencing style</li>
              </ul>
            </div>
            
            <div className="text-center mt-6">
              <Link href="/research/qjpss/submission-guidelines" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                Detailed Submission Guidelines
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Editorial Office</h3>
              <p className="text-gray-600 mb-1">Department of Political Science</p>
              <p className="text-gray-600 mb-1">Government College University Lahore</p>
              <p className="text-gray-600 mb-1">Katchery Road, Lahore, Pakistan</p>
              <p className="text-gray-600">Email: qjpss@gcu.edu.pk</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Subscription</h3>
              <p className="text-gray-600 mb-1">For subscription inquiries, please contact:</p>
              <p className="text-gray-600 mb-1">Email: subscription.qjpss@gcu.edu.pk</p>
              <p className="text-gray-600">Phone: +92-42-99213344 Ext. 321</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
