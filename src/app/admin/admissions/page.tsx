"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  programId: string | null;
  status: string;
  createdAt: string;
  program?: {
    name: string;
  };
};

export default function AdminAdmissionsPage() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/admissions');
        if (!response.ok) {
          throw new Error('Failed to fetch admissions data');
        }
        
        const data = await response.json();
        setSubmissions(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching admissions:', err);
        setError('Failed to load admissions data');
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/admissions?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete submission');
      }

      // Refresh the submissions list
      setSubmissions(submissions.filter(item => item.id !== id));
      return Promise.resolve();
    } catch (err) {
      console.error('Error deleting submission:', err);
      return Promise.reject(err);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const columns: Column<ContactSubmission>[] = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Email',
      accessor: 'email'
    },
    {
      header: 'Phone',
      accessor: 'phone',
      render: (row: ContactSubmission) => row.phone || 'N/A'
    },
    {
      header: 'Program',
      accessor: 'program.name',
      render: (row: ContactSubmission) => row.program?.name || 'General Inquiry'
    },
    {
      header: 'Status',
      accessor: 'status',
      render: (row: ContactSubmission) => {
        const statusClasses = {
          pending: 'bg-yellow-100 text-yellow-800',
          contacted: 'bg-blue-100 text-blue-800',
          enrolled: 'bg-green-100 text-green-800',
          rejected: 'bg-red-100 text-red-800',
          archived: 'bg-gray-100 text-gray-800',
        };
        
        const status = row.status.toLowerCase();
        const statusClass = statusClasses[status as keyof typeof statusClasses] || statusClasses.pending;
        
        return (
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass}`}>
            {row.status}
          </span>
        );
      }
    },
    {
      header: 'Date',
      accessor: 'createdAt',
      render: (row: ContactSubmission) => formatDate(row.createdAt)
    }
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 p-4 rounded-md">
        <p className="text-red-800">{error}</p>
        <button 
          onClick={() => {
            setLoading(true);
            setError(null);
            fetch('/api/admissions')
              .then(res => res.json())
              .then(data => {
                setSubmissions(Array.isArray(data) ? data : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching admissions:', err);
                setError('Failed to load admissions data');
                setLoading(false);
              });
          }}
          className="mt-2 text-sm text-accent hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Admission Inquiries</h1>
        <Link 
          href="/admin/admissions/add" 
          className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
        >
          Add New Inquiry
        </Link>
      </div>
      <DataTable
        data={submissions}
        columns={columns}
        entityName="Admission"
        entityPath="admissions"
        primaryKey="id"
        onDelete={handleDelete}
      />
    </div>
  );
}
