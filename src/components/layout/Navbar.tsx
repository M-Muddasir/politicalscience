"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#800000] text-white">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-wrap items-center justify-start sm:justify-center">
          {/* Mobile menu button */}
          <div className="block lg:hidden py-3">
            <button 
              className="flex items-center px-3 py-2 border rounded border-white hover:text-secondary hover:border-secondary"
              onClick={toggleMenu}
            >
              <svg className="fill-current h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          
          {/* Menu (Responsive) */}
          <div className={`w-full ${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto`}>
            <div className="text-sm lg:flex-grow">
              <ul className="flex flex-col lg:flex-row">
                {/* Essential Top-Level Navigation */}
                <li>
                  <Link href="/" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    HOME
                  </Link>
                </li>
                <li className="group relative">
                  <Link href="/about" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    ABOUT
                  </Link>
                  <ul className="hidden group-hover:block absolute left-0 top-full z-10 bg-accent w-48 shadow-lg text-black bg-white">
                    <li>
                      <Link href="/about/mission" className="block px-4 py-2 hover:bg-accent-dark">
                        Mission & Vision
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/history" className="block px-4 py-2 hover:bg-accent-dark">
                        History
                      </Link>
                    </li>
                    <li>
                      <Link href="/about/china-study-centre" className="block px-4 py-2 hover:bg-accent-dark">
                        China Study Centre
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/faculty" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    FACULTY
                  </Link>
                </li>
                <li className="group relative">
                  <Link href="/programs" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    PROGRAMS
                  </Link>
                  <ul className="hidden group-hover:block absolute left-0 top-full z-10 bg-accent w-48 shadow-lg text-black bg-white">
                    <li>
                      <Link href="/programs/bs" className="block px-4 py-2 hover:bg-accent-dark">
                        BS Political Science
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/ma" className="block px-4 py-2 hover:bg-accent-dark">
                        MA Political Science
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/mphil" className="block px-4 py-2 hover:bg-accent-dark">
                        MPhil Political Science
                      </Link>
                    </li>
                    <li>
                      <Link href="/programs/phd" className="block px-4 py-2 hover:bg-accent-dark">
                        PhD Political Science
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/admissions" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    ADMISSIONS
                  </Link>
                </li>
                
                {/* Research & Publications grouped together */}
                <li className="group relative">
                  <button className="block py-3 lg:py-4 px-4 hover:bg-accent-dark w-full text-left">
                    RESEARCH
                  </button>
                  <ul className="hidden group-hover:block absolute left-0 top-full z-10 bg-accent w-52 shadow-lg text-black bg-white">
                    <li>
                      <Link href="/qjpss" className="block px-4 py-2 hover:bg-accent-dark">
                        QJPSS Journal
                      </Link>
                    </li>
                    <li>
                      <Link href="/newsletters" className="block px-4 py-2 hover:bg-accent-dark">
                        Newsletters
                      </Link>
                    </li>
                  </ul>
                </li>
                
                {/* More dropdown for less frequently accessed items */}
                <li className="group relative">
                  <button className="block py-3 lg:py-4 px-4 hover:bg-accent-dark w-full text-left">
                    MORE
                  </button>
                  <ul className="hidden group-hover:block absolute left-0 top-full z-10 bg-accent w-52 shadow-lg text-black bg-white">
                    <li>
                      <Link href="/events" className="block px-4 py-2 hover:bg-accent-dark">
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link href="/events/conferences" className="block px-4 py-2 hover:bg-accent-dark">
                        Conferences
                      </Link>
                    </li>
                    <li>
                      <Link href="/alumni" className="block px-4 py-2 hover:bg-accent-dark">
                        Alumni
                      </Link>
                    </li>
                    <li>
                      <Link href="/societies" className="block px-4 py-2 hover:bg-accent-dark">
                        Societies
                      </Link>
                    </li>
                    <li>
                      <Link href="/scholarships" className="block px-4 py-2 hover:bg-accent-dark">
                        Scholarships
                      </Link>
                    </li>
                  </ul>
                </li>
                
                {/* Keep Contact at top level as it's important */}
                <li>
                  <Link href="/contact" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark">
                    CONTACT
                  </Link>
                </li>
                
                {/* Admin Login Link */}
                <li>
                  <Link href="/admin/login" className="block py-3 lg:py-4 px-4 hover:bg-accent-dark font-medium">
                    ADMIN LOGIN
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
