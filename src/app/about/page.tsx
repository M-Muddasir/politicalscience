import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Department of Political Science',
  description: 'Learn about the Department of Political Science at Government College University Lahore',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the Department</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The Department of Political Science at Government College University Lahore
            has a rich heritage of academic excellence and research in political studies.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                The Department of Political Science at Government College University Lahore was established
                in 1924, making it one of the oldest political science departments in the subcontinent.
                Over the decades, the department has produced numerous scholars, politicians, civil servants,
                and thought leaders who have contributed significantly to Pakistan&#39;s political landscape.
              </p>
              <p className="text-gray-600 mb-4">
                Our department is committed to academic excellence, critical thinking, and fostering an
                environment where students can develop a deep understanding of political theories,
                governance systems, and international relations.
              </p>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image 
                src="/images/gcu-vc.png" 
                alt="Department of Political Science Building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link href="/about/mission" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-accent mb-2">Mission & Vision</h3>
            <p className="text-gray-600 mb-4">Learn about our mission, vision, and the core values that drive our academic excellence.</p>
            <span className="text-accent hover:underline">Read More →</span>
          </Link>

          <Link href="/about/history" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-accent mb-2">Department History</h3>
            <p className="text-gray-600 mb-4">Explore the rich history and notable achievements of our department since its inception.</p>
            <span className="text-accent hover:underline">Read More →</span>
          </Link>

          <Link href="/about/china-study-centre" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-accent mb-2">China Study Centre</h3>
            <p className="text-gray-600 mb-4">Discover our specialized research centre dedicated to Chinese politics and Pakistan-China relations.</p>
            <span className="text-accent hover:underline">Read More →</span>
          </Link>
        </div>

        <div className="bg-accent bg-opacity-5 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Academic Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-accent mb-2">Diverse Programs</h3>
              <p className="text-gray-600">
                We offer undergraduate and graduate programs designed to provide a comprehensive understanding of political science.
                Our curriculum is regularly updated to reflect contemporary political issues and theories.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent mb-2">Distinguished Faculty</h3>
              <p className="text-gray-600">
                Our faculty comprises highly qualified professors and researchers who are experts in various subfields of political science,
                including comparative politics, international relations, public policy, and political theory.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent mb-2">Research Focus</h3>
              <p className="text-gray-600">
                The department encourages and facilitates research in diverse areas of political science,
                with special emphasis on South Asian politics, governance, and international relations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-accent mb-2">Student Development</h3>
              <p className="text-gray-600">
                Beyond academics, we focus on developing critical thinking, analytical skills, and ethical understanding
                among our students to prepare them for careers in governance, diplomacy, academia, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
