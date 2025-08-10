import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Academic Conferences | Department of Political Science',
  description: 'Academic conferences organized by the Department of Political Science at GCU Lahore',
};

export default function ConferencesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Academic Conferences</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Annual conferences and symposia organized by the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-60 w-full">
                <Image 
                  src="/images/conference-hall.jpg" 
                  alt="Academic Conference"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Conferences</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at GCU Lahore organizes annual academic conferences on key themes in political science, governance, international relations, and public policy. These conferences bring together scholars, researchers, policymakers, and students to exchange ideas and present cutting-edge research.
              </p>
              <p className="text-gray-600">
                Our conferences feature keynote speeches by eminent scholars, panel discussions, paper presentations, and networking opportunities. The proceedings of these conferences are often published in our journal, helping to disseminate valuable research to the wider academic community.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upcoming Conference</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="md:flex gap-8">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="relative h-72 w-full mb-4">
                  <Image 
                    src="/images/upcoming-conference.jpg" 
                    alt="International Conference on Democracy and Governance"
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="bg-accent bg-opacity-10 p-4 rounded-md">
                  <h3 className="font-semibold text-gray-800 mb-2">Important Dates</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Abstract Submission:</span>
                      <span className="font-medium">July 15, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Notification of Acceptance:</span>
                      <span className="font-medium">July 30, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Full Paper Submission:</span>
                      <span className="font-medium">August 25, 2023</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Conference Dates:</span>
                      <span className="font-medium">September 21-22, 2023</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">International Conference on Democracy and Governance in South Asia</h3>
                <p className="text-gray-500 mb-4">September 21-22, 2023 | Bukhari Auditorium, GCU Lahore</p>
                <p className="text-gray-600 mb-4">
                  We are pleased to announce our upcoming international conference on &ldquo;Democracy and Governance in South Asia: Challenges and Opportunities.&rdquo; This two-day conference aims to explore various aspects of democratic systems, governance models, and policy frameworks in South Asian countries.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Conference Themes</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4 pl-4">
                  <li>Democratic Institutions and Electoral Politics in South Asia</li>
                  <li>Governance Challenges and Reform Initiatives</li>
                  <li>Civil-Military Relations and Democratic Stability</li>
                  <li>Public Policy and Service Delivery</li>
                  <li>Regional Cooperation and Integration</li>
                  <li>Media, Civil Society, and Democracy</li>
                </ul>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Keynote Speakers</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 mb-4 pl-4">
                  <li>Prof. Dr. Amartya Sen (Harvard University)</li>
                  <li>Dr. Maleeha Lodhi (Former Ambassador to the UN)</li>
                  <li>Prof. Dr. Christophe Jaffrelot (Sciences Po, Paris)</li>
                </ul>
                <div className="mt-6">
                  <Link href="/events/conferences/democracy-governance" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                    Conference Details & Registration
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Past Conferences</h2>
          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-8">
              <div className="md:flex gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/images/past-conference-1.jpg" 
                      alt="Foreign Policy Conference"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Pakistan&apos;s Foreign Policy: Challenges and Opportunities</h3>
                  <p className="text-gray-500 mb-3">May 18-19, 2022 | Bukhari Auditorium</p>
                  <p className="text-gray-600 mb-3">
                    This conference examined Pakistan&apos;s foreign policy challenges and opportunities in the evolving global order. It featured presentations on Pakistan&apos;s relations with major powers, regional dynamics, and economic diplomacy.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="text-sm text-accent hover:underline">Conference Report</a>
                    <a href="#" className="text-sm text-accent hover:underline">Photo Gallery</a>
                    <a href="#" className="text-sm text-accent hover:underline">Published Papers</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-8">
              <div className="md:flex gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/images/past-conference-2.jpg" 
                      alt="Electoral Politics Conference"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Electoral Politics and Democratic Consolidation in Pakistan</h3>
                  <p className="text-gray-500 mb-3">November 10-11, 2021 | GCU Examination Hall</p>
                  <p className="text-gray-600 mb-3">
                    This conference analyzed the role of electoral politics in Pakistan&apos;s democratic consolidation. It included discussions on electoral systems, political parties, voter behavior, and electoral reforms.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="text-sm text-accent hover:underline">Conference Report</a>
                    <a href="#" className="text-sm text-accent hover:underline">Photo Gallery</a>
                    <a href="#" className="text-sm text-accent hover:underline">Published Papers</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="md:flex gap-6">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <div className="relative h-48 w-full">
                    <Image 
                      src="/images/past-conference-3.jpg" 
                      alt="CPEC Conference"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">CPEC: Political and Economic Implications for Pakistan and the Region</h3>
                  <p className="text-gray-500 mb-3">March 15-16, 2021 | Virtual Conference</p>
                  <p className="text-gray-600 mb-3">
                    This virtual conference explored the political and economic implications of the China-Pakistan Economic Corridor (CPEC) for Pakistan and the broader region. It featured speakers from Pakistan, China, and other countries.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="text-sm text-accent hover:underline">Conference Report</a>
                    <a href="#" className="text-sm text-accent hover:underline">Video Recordings</a>
                    <a href="#" className="text-sm text-accent hover:underline">Published Papers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/events/conferences/archive" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View All Past Conferences
            </Link>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Call for Conference Proposals</h2>
          <p className="text-gray-600 mb-4">
            The Department of Political Science welcomes proposals for hosting academic conferences, symposia, and workshops. If you have an idea for a conference that aligns with our academic focus areas, we encourage you to submit a proposal.
          </p>
          <p className="text-gray-600 mb-6">
            Proposals should include the conference theme, objectives, target audience, potential speakers, and funding requirements. The department&apos;s Conference Committee reviews proposals quarterly.
          </p>
          <div className="text-center">
            <Link href="/events/conferences/submit-proposal" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              Submit Conference Proposal
            </Link>
          </div>
        </div>

        <div className="text-center">
          <Link href="/events" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Events
          </Link>
        </div>
      </div>
    </div>
  );
}
