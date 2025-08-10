"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type Program = {
  id: number;
  name: string;
  degreeType: string;
};

type CourseFormData = {
  id: string;
  title: string;
  code: string;
  description: string;
  creditHours: number;
  programId: string;
};

export default function EditCoursePage() {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [programs, setPrograms] = useState<Program[]>([]);

  const [formData, setFormData] = useState<CourseFormData>({
    id: id?.toString() || '',
    title: '',
    code: '',
    description: '',
    creditHours: 3,
    programId: ''
  });

  // Fetch course and programs data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch course data
        const courseResponse = await fetch(`/api/courses/${id}`);
        if (!courseResponse.ok) {
          throw new Error('Failed to fetch course data');
        }
        const courseData = await courseResponse.json();
        
        // Fetch programs for dropdown
        const programsResponse = await fetch('/api/programs');
        if (!programsResponse.ok) {
          throw new Error('Failed to fetch programs');
        }
        const programsData = await programsResponse.json();
        
        setFormData({
          id: courseData.id,
          title: courseData.title || '',
          code: courseData.code || '',
          description: courseData.description || '',
          creditHours: courseData.creditHours || 3,
          programId: courseData.programId ? courseData.programId.toString() : ''
        });
        
        setPrograms(Array.isArray(programsData) ? programsData : []);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setErrorMessage('Failed to load data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'creditHours' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/courses', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update course');
      }

      router.push('/admin/courses');
    } catch (err: any) {
      setErrorMessage(err.message || 'An error occurred while updating the course');
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Course</h1>
        <Link 
          href="/admin/courses" 
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Cancel
        </Link>
      </div>

      {errorMessage && (
        <div className="bg-red-50 p-4 rounded-md mb-6">
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Course Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
              Course Code*
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={formData.code}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creditHours">
              Credit Hours*
            </label>
            <input
              type="number"
              id="creditHours"
              name="creditHours"
              min="1"
              max="12"
              value={formData.creditHours}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="programId">
              Program*
            </label>
            <select
              id="programId"
              name="programId"
              value={formData.programId}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a Program</option>
              {programs.map(program => (
                <option key={program.id} value={program.id}>
                  {program.name} ({program.degreeType})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={5}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-accent hover:bg-accent-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Updating...' : 'Update Course'}
          </button>
        </div>
      </form>
    </div>
  );
}
