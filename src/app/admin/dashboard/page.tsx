"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-xl">Loading...</p>
        </div>
      </div>
    );
  }

  if (!session) {
    return null; // We'll redirect in the useEffect above
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-accent text-black p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <div>
            <span className="mr-4">Welcome, {session.user?.email}</span>
            <Link 
              href="/api/auth/signout"
              className="px-3 py-1 bg-white text-accent rounded hover:bg-gray-100"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AdminMenuCard 
            title="Manage Faculty" 
            description="Add, edit, or remove faculty members."
            href="/admin/faculty"
          />
          
          <AdminMenuCard 
            title="Manage Programs" 
            description="Manage academic programs offered by the department."
            href="/admin/programs"
          />
          
          <AdminMenuCard 
            title="News & Updates" 
            description="Add or manage news items and departmental updates."
            href="/admin/news"
          />
          
          <AdminMenuCard 
            title="Messages" 
            description="Edit Vice Chancellor & Chairperson messages."
            href="/admin/messages"
          />
          
          <AdminMenuCard 
            title="Admission Inquiries" 
            description="View and respond to admission inquiries."
            href="/admin/admissions"
          />
          
          <AdminMenuCard 
            title="Website Settings" 
            description="Manage website general settings."
            href="/admin/settings"
          />
        </div>
      </main>
    </div>
  );
}

type AdminMenuCardProps = {
  title: string;
  description: string;
  href: string;
};

function AdminMenuCard({ title, description, href }: AdminMenuCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold text-accent mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 flex justify-end">
          <span className="text-accent hover:underline">Manage →</span>
        </div>
      </div>
    </Link>
  );
}
