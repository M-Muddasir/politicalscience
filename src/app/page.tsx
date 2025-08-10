import React from 'react';
import Link from 'next/link';

// Import home page components
import HeroSection from '@/components/home/HeroSection';
import ViceChancellorMessage from '@/components/home/ViceChancellorMessage';
import ChairpersonMessage from '@/components/home/ChairpersonMessage';
import AboutUs from '@/components/home/AboutUs';
import LatestNews from '@/components/home/LatestNews';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content (VC Message, Chair Message & About Us) */}
          <div className="lg:w-2/3">
            <ViceChancellorMessage />
            <div className="mt-12">
              <ChairpersonMessage />
            </div>
            <div className="mt-12">
              <AboutUs />
            </div>
          </div>
          
          {/* Right Sidebar (Latest News) */}
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <LatestNews />
          </div>
        </div>
        
        {/* Programs Section */}
        <section className="mt-16 py-12 bg-gray-50 -mx-4 px-4">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">OUR PROGRAMS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* BS Program */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary mb-3">BS Political Science</h3>
              <p className="text-gray-700 mb-4">4-year bachelor program covering political theory, international relations, and governance.</p>
              <Link href="/programs/bs" className="text-primary hover:text-primary-dark font-medium">Learn More →</Link>
            </div>
            
            {/* MA Program */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary mb-3">MA Political Science</h3>
              <p className="text-gray-700 mb-4">2-year master program with advanced coursework in political analysis and research.</p>
              <Link href="/programs/ma" className="text-primary hover:text-primary-dark font-medium">Learn More →</Link>
            </div>
            
            {/* MPhil Program */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary mb-3">MPhil Political Science</h3>
              <p className="text-gray-700 mb-4">Research-focused program developing specialized knowledge and analytical skills.</p>
              <Link href="/programs/mphil" className="text-primary hover:text-primary-dark font-medium">Learn More →</Link>
            </div>
            
            {/* PhD Program */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-semibold text-primary mb-3">PhD Political Science</h3>
              <p className="text-gray-700 mb-4">Doctoral program for advanced research and academic expertise in the field.</p>
              <Link href="/programs/phd" className="text-primary hover:text-primary-dark font-medium">Learn More →</Link>
            </div>
          </div>
        </section>
        
        {/* Quick Links Section */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Admissions */}
          <div className="bg-primary text-black p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Admissions</h3>
            <p className="mb-4">Ready to join us? Explore our admission criteria, process, and deadlines.</p>
            <Link href="/admissions" className="inline-block bg-white text-primary hover:bg-gray-100 font-medium py-2 px-4 rounded transition duration-300">
              Apply Now
            </Link>
          </div>
          
          {/* Journal */}
          <div className="bg-secondary text-black p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">QJPSS Journal</h3>
            <p className="mb-4">Discover our quarterly academic journal featuring scholarly articles and research.</p>
            <Link href="/research/qjpss" className="inline-block bg-white text-secondary hover:bg-gray-100 font-medium py-2 px-4 rounded transition duration-300">
              Explore Journal
            </Link>
          </div>
          
          {/* Events & Activities */}
          <div className="bg-accent text-black p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-3">Events & Activities</h3>
            <p className="mb-4">Stay updated with our academic events, conferences, and student activities.</p>
            <Link href="/events" className="inline-block bg-white text-accent hover:bg-gray-100 font-medium py-2 px-4 rounded transition duration-300">
              View Calendar
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
