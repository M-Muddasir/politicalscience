"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (status === 'unauthenticated' && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [status, router, pathname]);

  // Don't apply layout to login page
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session && pathname !== '/admin/login') {
    return null; // We'll redirect in the useEffect above
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-accent text-black min-h-screen flex-shrink-0 shadow-lg">
        <div className="p-4 border-b border-accent-light">
          <h1 className="text-xl font-bold">Admin Portal</h1>
          <p className="text-sm opacity-80">Department of Political Science</p>
        </div>
        <nav className="p-4">
          <div className="mb-4">
            <h2 className="text-xs uppercase tracking-wider text-black mb-2">Content Management</h2>
            <ul className="space-y-1">
              <NavLink href="/admin/dashboard" label="Dashboard" />
              <NavLink href="/admin/faculty" label="Faculty" />
              <NavLink href="/admin/programs" label="Programs" />
              <NavLink href="/admin/courses" label="Courses" />
              <NavLink href="/admin/news" label="News" />
              <NavLink href="/admin/events" label="Events" />
              <NavLink href="/admin/journals" label="Journals" />
              <NavLink href="/admin/newsletters" label="Newsletters" />
            </ul>
          </div>
          
          {/* <div className="mb-4">
            <h2 className="text-xs uppercase tracking-wider text-black mb-2">Student Resources</h2>
            <ul className="space-y-1">
              <NavLink href="/admin/societies" label="Societies" />
              <NavLink href="/admin/scholarships" label="Scholarships" />
              <NavLink href="/admin/alumni" label="Alumni" />
              <NavLink href="/admin/conferences" label="Conferences" />
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xs uppercase tracking-wider text-black mb-2">Messages & Content</h2>
            <ul className="space-y-1">
              <NavLink href="/admin/departments" label="Department Info" />
              <NavLink href="/admin/vc-messages" label="VC Messages" />
              <NavLink href="/admin/chairperson-messages" label="Chairperson Messages" />
              <NavLink href="/admin/china-study-centre" label="China Study Centre" />
              <NavLink href="/admin/agreements" label="Agreements" />
              <NavLink href="/admin/activities" label="Activities" />
            </ul>
          </div>
          
          <div className="mb-4">
            <h2 className="text-xs uppercase tracking-wider text-black mb-2">Administration</h2>
            <ul className="space-y-1">
              <NavLink href="/admin/users" label="Users" />
              <NavLink href="/admin/contact-submissions" label="Contact Submissions" />
              <NavLink href="/admin/settings" label="Settings" />
            </ul>
          </div> */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-[81%]">
        <header className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">{getPageTitle(pathname)}</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {session?.user?.email}
              </span>
              <Link 
                href="/api/auth/signout"
                className="px-3 py-1 bg-accent text-black rounded hover:bg-accent-dark transition"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </header>
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);
  
  return (
    <li>
      <Link 
        href={href}
        className={`block px-3 py-2 rounded transition ${
          isActive 
            ? 'bg-accent-light text-[#1ae41a]' 
            : 'text-black hover:bg-accent-light hover:text-[#800000]'
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function getPageTitle(pathname: string): string {
  const path = pathname.split('/').filter(Boolean);
  
  if (path.length === 1) return 'Dashboard';
  
  // Get the last meaningful segment (ignoring dynamic segments)
  let segment = path[path.length - 1];
  if (segment.startsWith('[') && segment.endsWith(']')) {
    segment = path[path.length - 2];
  }
  
  // Format the segment (e.g., 'faculty' becomes 'Faculty')
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
