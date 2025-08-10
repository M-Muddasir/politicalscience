import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Mission & Vision | Department of Political Science',
  description: 'Our mission and vision for the Department of Political Science at Government College University Lahore',
};

export default function MissionPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Mission & Vision</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Guiding principles and aspirations of the Department of Political Science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6 text-center">
              <div className="inline-block p-4 rounded-full bg-accent bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h2>
            </div>
            <p className="text-gray-600 mb-4">
              The mission of the Department of Political Science at Government College University Lahore is to provide quality education in the field of political science, fostering critical thinking, and promoting research that contributes to the understanding of local and global political issues.
            </p>
            <p className="text-gray-600 mb-4">
              We aim to equip students with comprehensive knowledge of political theories, concepts, and methodologies, enabling them to analyze complex political phenomena and develop solutions to contemporary challenges facing society.
            </p>
            <p className="text-gray-600">
              Through rigorous academic training, we strive to prepare students for careers in public service, academia, diplomacy, and leadership roles in various sectors, while instilling values of integrity, ethical conduct, and social responsibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="mb-6 text-center">
              <div className="inline-block p-4 rounded-full bg-secondary bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h2>
            </div>
            <p className="text-gray-600 mb-4">
              The Department of Political Science at GCU Lahore envisions becoming a leading center of excellence in political science education and research in the region, known for its innovative teaching methods, impactful research output, and contribution to policy development.
            </p>
            <p className="text-gray-600 mb-4">
              We aspire to create an inclusive academic environment that encourages diverse perspectives and fosters dialogue on significant political issues, contributing to the development of informed citizenship and democratic values.
            </p>
            <p className="text-gray-600">
              Our vision includes establishing strong international collaborations with renowned academic institutions and think tanks, facilitating exchange of knowledge, and enhancing the global visibility of our scholarly work.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">
                We are committed to maintaining high standards of teaching and research, promoting intellectual rigor and critical inquiry.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We value diversity of thought, background, and experience, creating an environment where all feel welcome and respected.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-primary bg-opacity-10 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ethics & Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest standards of ethical conduct in teaching, research, and community service.
              </p>
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
