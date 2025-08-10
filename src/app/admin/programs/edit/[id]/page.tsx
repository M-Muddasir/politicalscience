"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Department = {
  id: string;
  name: string;
};

type Program = {
  id: number;
  name: string;
  degreeType: string;
  description: string;
  duration: string;
  creditHours: string;
  eligibility: string;
  departmentId: string;
};

export default function EditProgramPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [programId, setProgramId] = useState<string>('');
  const [formData, setFormData] = useState<Program>({
    id: 0,
    name: '',
    degreeType: '',
    description: '',
    duration: '',
    creditHours: '',
    eligibility: '',
    departmentId: ''
  });

  // Resolve params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setProgramId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  // Fetch program data and departments
  useEffect(() => {
    if (!programId) return;
    
    const fetchData = async () => {
      try {
        // Fetch program details
        const programResponse = await fetch(`/api/programs/${programId}`);
        if (!programResponse.ok) {
          throw new Error('Failed to fetch program data');
        }
        const programData = await programResponse.json();
        
        // Fetch departments for the dropdown
        const departmentsResponse = await fetch('/api/departments');
        if (!departmentsResponse.ok) {
          throw new Error('Failed to fetch departments');
        }
        const departmentsData = await departmentsResponse.json();
        
        // Find Political Science department
        const politicalScienceDept = Array.isArray(departmentsData) ? 
          departmentsData.find((dept: Department) => dept.name.includes('Political Science')) : null;
        
        setFormData({
          id: parseInt(programId),
          name: programData.name || '',
          degreeType: programData.degreeType || '',
          description: programData.description || '',
          duration: programData.duration || '',
          creditHours: programData.creditHours || '',
          eligibility: programData.eligibility || '',
          departmentId: programData.departmentId || (politicalScienceDept ? politicalScienceDept.id : ''),
        });
        
        setDepartments(Array.isArray(departmentsData) ? departmentsData : []);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setErrorMessage('Failed to load data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [programId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/programs', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update program');
      }

      router.push('/admin/programs');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating program:', err);
      setErrorMessage(err.message || 'An error occurred while updating the program');
    } finally {
      setIsSubmitting(false);
    }
  };

  const degreeTypes = ['Bachelor', 'Master', 'MPhil', 'PhD'];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Edit Program</h2>
        <Link
          href="/admin/programs"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Cancel
        </Link>
      </div>

      {errorMessage && (
        <div className="mb-4 bg-red-50 p-4 rounded-md">
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Program Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="degreeType" className="block text-sm font-medium text-gray-700 mb-1">
              Degree Type *
            </label>
            <select
              id="degreeType"
              name="degreeType"
              required
              value={formData.degreeType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            >
              <option value="">Select Degree Type</option>
              {degreeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
              Duration *
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              required
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="e.g., 4 Years"
            />
          </div>

          <div>
            <label htmlFor="creditHours" className="block text-sm font-medium text-gray-700 mb-1">
              Credit Hours *
            </label>
            <input
              type="text"
              id="creditHours"
              name="creditHours"
              required
              value={formData.creditHours}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="e.g., 120 Credit Hours"
            />
          </div>

          <div>
            <label htmlFor="departmentId" className="block text-sm font-medium text-gray-700 mb-1">
              Department *
            </label>
            <select
              id="departmentId"
              name="departmentId"
              required
              value={formData.departmentId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            >
              <option value="">Select a Department</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="eligibility" className="block text-sm font-medium text-gray-700 mb-1">
              Eligibility Criteria *
            </label>
            <textarea
              id="eligibility"
              name="eligibility"
              required
              rows={4}
              value={formData.eligibility}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            ></textarea>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Program Description *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-accent text-black rounded hover:bg-accent-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : 'Update Program'}
          </button>
        </div>
      </form>
    </div>
  );
}
