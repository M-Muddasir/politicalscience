"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Column } from '@/components/admin/DataTable';
import DataTable from '@/components/admin/DataTable';

type Course = {
  id: string;
  title: string;
  code: string;
  description: string;
  creditHours: number;
  programId: number;
  program?: {
    name: string;
    degreeType: string;
  };
  createdAt: string;
  updatedAt: string;
};

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch courses list
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        if (!response.ok) {
          throw new Error('Failed to fetch courses data');
        }
        
        const data = await response.json();
        setCourses(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to load courses data');
        setLoading(false);
      }
    };
    
    fetchCourses();
  }, []);

  // Delete a course
  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/courses?id=${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      setCourses(courses.filter(item => item.id !== id));
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  // Define table columns
  const columns: Column<Course>[] = [
    { header: 'Title', accessor: 'title' },
    { header: 'Course Code', accessor: 'code' },
    { 
      header: 'Credit Hours', 
      accessor: 'creditHours',
      render: (row: Course) => <span>{row.creditHours}</span>
    },
    {
      header: 'Program',
      accessor: 'programId',
      render: (row: Course) => <span>{row.program?.name || 'N/A'}</span>
    },
    {
      header: 'Description',
      accessor: 'description',
      render: (row: Course) => (
        <div className="max-w-xs truncate" title={row.description}>
          {row.description}
        </div>
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
            fetch('/api/courses')
              .then(res => res.json())
              .then(data => {
                setCourses(Array.isArray(data) ? data : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching courses:', err);
                setError('Failed to load courses data');
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
        <h1 className="text-2xl font-bold text-gray-800">Courses</h1>
        <Link 
          href="/admin/courses/add" 
          className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark transition"
        >
          Add New Course
        </Link>
      </div>
      <DataTable
        data={courses}
        columns={columns}
        primaryKey="id"
        entityName="Course"
        entityPath="courses"
        onDelete={handleDelete}
      />
    </div>
  );
}
