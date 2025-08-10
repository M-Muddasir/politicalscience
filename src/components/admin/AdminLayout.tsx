"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const { data: session, status } = useSession();

  // Navigation links
  const navLinks = [
    { name: 'Dashboard', href: '/admin/dashboard' },
    { name: 'Faculty', href: '/admin/faculty' },
    { name: 'Programs', href: '/admin/programs' },
    { name: 'News', href: '/admin/news' },
    { name: 'Messages', href: '/admin/messages' },
    { name: 'Admissions', href: '/admin/admissions' },
    { name: 'Events', href: '/admin/events' },
  ];

  const isActive = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <div className="min-h-screen w-[76%] bg-gray-50 overflow-hidden">
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed inset-y-0 left-0 w-64 bg-primary shadow-md z-10">
          <div className="flex items-center justify-center h-16 px-4 bg-primary-dark">
            <Link href="/admin/dashboard">
              <span className="text-xl font-bold text-black">PS Admin Panel</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mt-5 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`group flex items-center px-3 py-3 text-sm font-medium rounded-md mb-1 ${
                  isActive(link.href)
                    ? 'bg-primary-dark text-black'
                    : 'text-gray-100 hover:bg-primary-dark hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* User Profile */}
          <div className="absolute bottom-0 w-full px-4 py-4 bg-primary-dark text-black">
            {status === 'authenticated' && session?.user && (
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-sm font-medium">
                    {session.user.name ? session.user.name.charAt(0).toUpperCase() : 'A'}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium truncate">{session.user.name || 'Admin'}</p>
                    <p className="text-xs text-gray-300 truncate">{session.user.email}</p>
                  </div>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="w-full mt-2 px-4 py-2 text-sm font-medium text-black bg-red-600 rounded-md hover:bg-red-700 focus:outline-none"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-1 ml-64">
          {/* Top Header */}
          <header className="z-10 py-4 bg-white shadow-md">
            <div className="px-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800">
                {navLinks.find((link) => isActive(link.href))?.name || 'Admin'}
              </h2>
              <div className="flex items-center">
                <Link href="/" className="text-sm text-accent hover:underline">
                  View Website
                </Link>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 w-4/5 overflow-y-auto p-6">
            {status === 'loading' ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              children
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
