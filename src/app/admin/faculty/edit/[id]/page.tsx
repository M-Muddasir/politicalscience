"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

type Department = {
  id: string;
  name: string;
};

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
  isActive: boolean;
};

export default function EditFacultyPage() {
  const router = useRouter();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [formData, setFormData] = useState<Faculty>({
    id: id?.toString() || '',
    name: '',
    designation: '',
    expertise: '',
    email: '',
    phone: '',
    bio: '',
    imageUrl: '',
    cvUrl: '',
    departmentId: '',
    isActive: true
  });

  // Fetch faculty data and departments
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch faculty member details
        const facultyResponse = await fetch(`/api/faculty/${id}`);
        if (!facultyResponse.ok) {
          throw new Error('Failed to fetch faculty data');
        }
        const {faculty} = await facultyResponse.json();
        
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
          id: faculty.id,
          name: faculty.name || '',
          designation: faculty.designation || '',
          expertise: faculty.expertise || '',
          email: faculty.email || '',
          phone: faculty.phone || '',
          bio: faculty.bio || '',
          imageUrl: faculty.imageUrl || '',
          cvUrl: faculty.cvUrl || '',
          departmentId: faculty.departmentId || (politicalScienceDept ? politicalScienceDept.id : ''),
          isActive: faculty.isActive !== undefined ? faculty.isActive : true
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
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/faculty', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update faculty member');
      }

      router.push('/admin/faculty');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating faculty:', err);
      setErrorMessage(err.message || 'An error occurred while updating the faculty member');
    } finally {
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
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Edit Faculty Member</h2>
        <Link
          href="/admin/faculty"
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
              Name *
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
            <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-1">
              Designation *
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-1">
              Expertise *
            </label>
            <input
              type="text"
              id="expertise"
              name="expertise"
              required
              value={formData.expertise}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Profile Image
            </label>
            <ImageUpload
              folder="faculty"
              currentImage={formData.imageUrl || ''}
              onImageUpload={(imageUrl) => setFormData({ ...formData, imageUrl })}
              className="mb-4"
            />
          </div>

          <div>
            <label htmlFor="cvUrl" className="block text-sm font-medium text-gray-700 mb-1">
              CV URL
            </label>
            <input
              type="text"
              id="cvUrl"
              name="cvUrl"
              value={formData.cvUrl || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="https://example.com/cv.pdf"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
              Bio *
            </label>
            <textarea
              id="bio"
              name="bio"
              required
              rows={5}
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            ></textarea>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
              checked={formData.isActive}
              onChange={handleChange}
              className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
            />
            <label htmlFor="isActive" className="ml-2 block text-sm text-gray-700">
              Active
            </label>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-accent text-black rounded hover:bg-accent-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : 'Update Faculty Member'}
          </button>
        </div>
      </form>
    </div>
  );
}
