"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';
import Image from 'next/image';

type Faculty = {
  id: string;
  name: string;
  designation: string;
  expertise: string;
  email: string;
  phone: string | null;
  bio: string;
  imageUrl: string | null;
  cvUrl: string | null;
  departmentId: string;
  department?: {
    name: string;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

// Component
export default function AdminFacultyPage() {
  const [faculty, setFaculty] = useState<Faculty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch faculty list
  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const response = await fetch('/api/faculty');
        if (!response.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        const data = await response.json();
        setFaculty(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching faculty:', err);
        setError('Failed to load faculty data');
        setLoading(false);
      }
    };

    fetchFaculty();
  }, []);

  // Delete a faculty member
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/faculty?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete faculty member');
      }

      setFaculty(faculty.filter(item => item.id !== id));
      return Promise.resolve();
    } catch (err) {
      console.error('Error deleting faculty:', err);
      return Promise.reject(err);
    }
  };

  // Define table columns
  const columns: Column<Faculty>[] = [
    { header: 'Name', accessor: 'name' },
    { header: 'Designation', accessor: 'designation' },
    { header: 'Expertise', accessor: 'expertise' },
    { header: 'Email', accessor: 'email' },
    { header: 'Phone', accessor: 'phone' },
    {
      header: 'Image',
      accessor: 'imageUrl',
      render: (row: Faculty) => (
        row.imageUrl ? (
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image src={row.imageUrl} alt={row.name} fill className="object-cover" />
          </div>
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-xs">N/A</span>
          </div>
        )
      )
    },
    {
      header: 'Department',
      accessor: 'departmentId',
      render: (row: Faculty) => row.department?.name || 'N/A'
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Faculty Members</h1>
      </div>
      <DataTable
        data={faculty}
        columns={columns}
        entityName="Faculty Member"
        entityPath="faculty"
        primaryKey="id"
        onDelete={handleDelete}
      />
    </div>
  );
}
