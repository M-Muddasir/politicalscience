"use client";

import { useState, useEffect } from 'react';
import DataTable, { Column } from '@/components/admin/DataTable';

type Program = {
  id: number;
  name: string;
  degreeType: string;
  description: string;
  duration: string;
  creditHours: string;
  eligibility: string;
  departmentId: string;
  department?: {
    name: string;
  };
  _count?: {
    courses: number;
  };
  createdAt: string;
  updatedAt: string;
};

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await fetch('/api/programs');
        if (!response.ok) {
          throw new Error('Failed to fetch programs data');
        }
        
        const data = await response.json();
        setPrograms(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching programs:', err);
        setError('Failed to load programs data');
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/programs?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete program');
      }

      // Refresh the programs list
      setPrograms(programs.filter(item => item.id !== parseInt(id)));
      return Promise.resolve();
    } catch (err) {
      console.error('Error deleting program:', err);
      return Promise.reject(err);
    }
  };

  const columns: Column<Program>[] = [
    {
      header: 'Name',
      accessor: 'name'
    },
    {
      header: 'Degree Type',
      accessor: 'degreeType'
    },
    {
      header: 'Duration',
      accessor: 'duration'
    },
    {
      header: 'Credit Hours',
      accessor: 'creditHours'
    },
    {
      header: 'Department',
      accessor: 'department.name'
    },
    {
      header: 'Courses',
      accessor: '_count.courses',
      render: (row: Program) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {row._count?.courses || 0}
        </span>
      )
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
            fetch('/api/programs')
              .then(res => res.json())
              .then(data => {
                setPrograms(Array.isArray(data) ? data : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching programs:', err);
                setError('Failed to load programs data');
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
        <h1 className="text-2xl font-bold text-gray-800">Academic Programs</h1>
      </div>
      <DataTable
        data={programs}
        columns={columns}
        entityName="Program"
        entityPath="programs"
        primaryKey="id"
        onDelete={handleDelete}
      />
    </div>
  );
}
