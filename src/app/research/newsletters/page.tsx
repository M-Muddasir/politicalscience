import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Newsletters | Department of Political Science',
  description: 'Newsletters published by the Department of Political Science at Government College University Lahore',
};

export default function NewslettersPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Department Newsletters</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and achievements from the Department of Political Science
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative h-72 w-56 shadow-lg">
                <Image 
                  src="/images/newsletter-cover.jpg" 
                  alt="Department Newsletter"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Newsletters</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science publishes quarterly newsletters to keep students, faculty, alumni, and the broader academic community informed about departmental activities, achievements, and upcoming events.
              </p>
              <p className="text-gray-600">
                Our newsletters feature faculty and student accomplishments, research highlights, conference reports, interviews with visiting scholars, and announcements of upcoming events. They serve as a platform to showcase the vibrant academic life within our department and to strengthen connections with our community.
              </p>
              
              <div className="mt-6">
                <Link href="/research/newsletters/subscribe" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
                  Subscribe to Newsletter
                </Link>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Recent Newsletters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/images/newsletter-2023-q2.jpg" 
                alt="Summer 2023 Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Summer 2023</h3>
              <p className="text-gray-500 text-sm mb-4">April - June 2023</p>
              <p className="text-gray-600 mb-4">
                Featuring highlights from our international conference on "Democracy and Governance in South Asia," faculty research updates, and student achievements.
              </p>
              <a href="#" className="text-accent hover:underline">Read Newsletter →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/images/newsletter-2023-q1.jpg" 
                alt="Spring 2023 Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Spring 2023</h3>
              <p className="text-gray-500 text-sm mb-4">January - March 2023</p>
              <p className="text-gray-600 mb-4">
                Covering the visiting scholar program, new faculty appointments, student research projects, and departmental events calendar.
              </p>
              <a href="#" className="text-accent hover:underline">Read Newsletter →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="/images/newsletter-2022-q4.jpg" 
                alt="Winter 2022 Newsletter"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Winter 2022</h3>
              <p className="text-gray-500 text-sm mb-4">October - December 2022</p>
              <p className="text-gray-600 mb-4">
                Year-end review featuring faculty publications, alumni spotlights, student achievements, and highlights from the annual department symposium.
              </p>
              <a href="#" className="text-accent hover:underline">Read Newsletter →</a>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Newsletter Archive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Fall 2022</h3>
                <p className="text-gray-500 text-sm">July - September 2022</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Summer 2022</h3>
                <p className="text-gray-500 text-sm">April - June 2022</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Spring 2022</h3>
                <p className="text-gray-500 text-sm">January - March 2022</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Winter 2021</h3>
                <p className="text-gray-500 text-sm">October - December 2021</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Fall 2021</h3>
                <p className="text-gray-500 text-sm">July - September 2021</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>

            <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-md transition-colors">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Summer 2021</h3>
                <p className="text-gray-500 text-sm">April - June 2021</p>
              </div>
              <a href="#" className="text-accent hover:underline">View</a>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/research/newsletters/full-archive" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
              View Complete Archive
            </Link>
          </div>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Stay informed about the latest developments, events, and achievements in the Department of Political Science by subscribing to our quarterly newsletter.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Affiliation</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-accent focus:border-accent">
                  <option value="">Select your affiliation</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                  <option value="alumni">Alumni</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="flex items-start">
                <input type="checkbox" id="consent" name="consent" className="mt-1 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded" />
                <label htmlFor="consent" className="ml-2 block text-sm text-gray-600">
                  I agree to receive the quarterly newsletter and occasional updates from the Department of Political Science.
                </label>
              </div>
              <div className="text-center">
                <button type="submit" className="inline-block bg-accent text-black hover:bg-accent-dark px-8 py-3 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="text-center">
          <Link href="/research" className="inline-block bg-accent text-black hover:bg-accent-dark px-6 py-2 rounded-md transition-colors">
            Back to Research
          </Link>
        </div>
      </div>
    </div>
  );
}
