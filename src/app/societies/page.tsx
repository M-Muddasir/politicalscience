import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Student Societies | Department of Political Science',
  description: 'Student societies and clubs at the Department of Political Science, GCU Lahore',
};

export default function SocietiesPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Student Societies</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the vibrant student societies and clubs at the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="relative h-64 w-full">
                <Image 
                  src="/images/student-societies.jpg" 
                  alt="Student Societies"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Student Societies</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at GCU Lahore takes pride in its dynamic student societies that complement academic learning with practical experiences, leadership opportunities, and community engagement.
              </p>
              <p className="text-gray-600">
                Our student societies organize a variety of activities throughout the academic year, including debates, model UN conferences, policy simulations, community service projects, and social events. These activities enable students to develop essential skills, expand their networks, and enhance their overall university experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Societies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/debate-society.jpg" 
                  alt="GCU Political Science Debate Society"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Political Science Debate Society</h3>
                <p className="text-gray-600 mb-4">
                  Founded in 1998, the Debate Society is one of the oldest and most prestigious student organizations at GCU. It focuses on developing students&apos; public speaking, critical thinking, and argumentation skills through regular debates, competitions, and workshops.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Intra-departmental debate competitions</li>
                    <li>Participation in national and international tournaments</li>
                    <li>Public speaking workshops</li>
                    <li>Annual Parliamentary Debate Championship</li>
                  </ul>
                </div>
                <Link href="/societies/debate" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/model-un.jpg" 
                  alt="GCU Model United Nations Society"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Model United Nations Society</h3>
                <p className="text-gray-600 mb-4">
                  The GCU Model UN Society provides students with opportunities to simulate UN committees and international organizations. Members represent different countries and debate global issues while developing diplomacy, research, and public speaking skills.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Annual GCU Model UN Conference</li>
                    <li>Training workshops for new delegates</li>
                    <li>Participation in external MUN conferences</li>
                    <li>Guest lectures by diplomats and UN officials</li>
                  </ul>
                </div>
                <Link href="/societies/model-un" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/policy-forum.jpg" 
                  alt="Policy Research Forum"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Policy Research Forum</h3>
                <p className="text-gray-600 mb-4">
                  The Policy Research Forum engages students in policy analysis and research on contemporary political issues. The forum organizes policy simulations, roundtable discussions, and research competitions to foster analytical thinking and practical policy solutions.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Policy brief competitions</li>
                    <li>Research colloquiums</li>
                    <li>Policy simulation exercises</li>
                    <li>Publication of student policy papers</li>
                  </ul>
                </div>
                <Link href="/societies/policy-forum" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image 
                  src="/images/community-service.jpg" 
                  alt="Political Science Community Service Society"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Service Society</h3>
                <p className="text-gray-600 mb-4">
                  This society focuses on community engagement and social responsibility. Members organize and participate in various community service projects, volunteer activities, and awareness campaigns on social and political issues.
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Activities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 pl-4">
                    <li>Educational support for underprivileged children</li>
                    <li>Voter education campaigns</li>
                    <li>Environment conservation initiatives</li>
                    <li>Charity fundraisers and donation drives</li>
                  </ul>
                </div>
                <Link href="/societies/community-service" className="text-accent hover:underline">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Upcoming Society Events</h2>
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Annual Debate Championship</h3>
                  <p className="text-gray-500">July 15-16, 2023 | Bukhari Auditorium</p>
                </div>
                <Link href="/societies/events/debate-championship" className="mt-2 md:mt-0 text-accent hover:underline">Event Details</Link>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Model UN Conference 2023</h3>
                  <p className="text-gray-500">August 5-7, 2023 | GCU Examination Halls</p>
                </div>
                <Link href="/societies/events/model-un-2023" className="mt-2 md:mt-0 text-accent hover:underline">Event Details</Link>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Policy Symposium: Education Reform</h3>
                  <p className="text-gray-500">September 10, 2023 | Political Science Seminar Room</p>
                </div>
                <Link href="/societies/events/policy-symposium" className="mt-2 md:mt-0 text-accent hover:underline">Event Details</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/societies/events" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View All Society Events
            </Link>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Society Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/student-leader1.jpg" 
                  alt="Sara Ahmed - President, Debate Society"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Sara Ahmed</h3>
              <p className="text-gray-600">President, Debate Society</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/student-leader2.jpg" 
                  alt="Ali Raza - Secretary General, Model UN Society"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Ali Raza</h3>
              <p className="text-gray-600">Secretary General, Model UN</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/student-leader3.jpg" 
                  alt="Amna Khan - Director, Policy Research Forum"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Amna Khan</h3>
              <p className="text-gray-600">Director, Policy Research</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-32 w-32 rounded-full overflow-hidden mx-auto mb-4">
                <Image 
                  src="/images/student-leader4.jpg" 
                  alt="Hassan Ali - Chair, Community Service Society"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Hassan Ali</h3>
              <p className="text-gray-600">Chair, Community Service</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Join a Society</h2>
          <p className="text-gray-600 text-center mb-6">
            Interested in joining one of our student societies? Fill out the form below, and society representatives will contact you with membership details.
          </p>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstname" name="firstname" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastname" name="lastname" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent" />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                <select id="program" name="program" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                  <option value="">Select your program</option>
                  <option value="bs">BS Political Science</option>
                  <option value="ma">MA Political Science</option>
                  <option value="mphil">MPhil Political Science</option>
                  <option value="phd">PhD Political Science</option>
                </select>
              </div>
              <div>
                <label htmlFor="society" className="block text-sm font-medium text-gray-700 mb-1">Preferred Society</label>
                <select id="society" name="society" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                  <option value="">Select a society</option>
                  <option value="debate">Political Science Debate Society</option>
                  <option value="mun">Model United Nations Society</option>
                  <option value="policy">Policy Research Forum</option>
                  <option value="community">Community Service Society</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Why do you want to join?</label>
                <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block bg-accent text-black hover:bg-accent-dark px-8 py-3 rounded-md transition-colors">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
