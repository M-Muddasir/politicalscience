"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Program = {
  id: string;
  name: string;
};

type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  programId: string | null;
  status: string;
  adminNotes: string | null;
  createdAt: string;
};

export default function EditAdmissionPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [programs, setPrograms] = useState<Program[]>([]);
  const [formData, setFormData] = useState<ContactSubmission>({
    id: params.id,
    name: '',
    email: '',
    phone: '',
    message: '',
    programId: '',
    status: 'Pending',
    adminNotes: '',
    createdAt: new Date().toISOString()
  });

  // Define status options
  const statusOptions = ['Pending', 'Contacted', 'Enrolled', 'Rejected', 'Archived'];

  // Fetch submission data and programs
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch submission details
        const submissionResponse = await fetch(`/api/admissions/${params.id}`);
        if (!submissionResponse.ok) {
          throw new Error('Failed to fetch submission data');
        }
        const submissionData = await submissionResponse.json();
        
        // Fetch programs for the dropdown
        const programsResponse = await fetch('/api/programs');
        if (!programsResponse.ok) {
          throw new Error('Failed to fetch programs');
        }
        const programsData = await programsResponse.json();
        
        setFormData({
          id: submissionData.id,
          name: submissionData.name || '',
          email: submissionData.email || '',
          phone: submissionData.phone || '',
          message: submissionData.message || '',
          programId: submissionData.programId || '',
          status: submissionData.status || 'Pending',
          adminNotes: submissionData.adminNotes || '',
          createdAt: submissionData.createdAt
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
  }, [params.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/admissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update submission');
      }

      router.push('/admin/admissions');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating submission:', err);
      setErrorMessage(err.message || 'An error occurred while updating the submission');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
        <h2 className="text-xl font-semibold">Manage Admission Inquiry</h2>
        <Link
          href="/admin/admissions"
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
        >
          Back to Admissions
        </Link>
      </div>

      {errorMessage && (
        <div className="mb-4 bg-red-50 p-4 rounded-md">
          <p className="text-red-800">{errorMessage}</p>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Submission Details</h3>
        <p className="text-sm text-gray-500 mb-1">Received on: {formatDate(formData.createdAt)}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent bg-gray-50"
              readOnly
            />
          </div>

          <div>
            <label htmlFor="programId" className="block text-sm font-medium text-gray-700 mb-1">
              Program
            </label>
            <select
              id="programId"
              name="programId"
              value={formData.programId || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            >
              <option value="">General Inquiry (No Program)</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
              Status *
            </label>
            <select
              id="status"
              name="status"
              required
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Original Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent bg-gray-50"
              readOnly
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="adminNotes" className="block text-sm font-medium text-gray-700 mb-1">
              Admin Notes
            </label>
            <textarea
              id="adminNotes"
              name="adminNotes"
              rows={5}
              value={formData.adminNotes || ''}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
              placeholder="Add notes about communication with the applicant, decisions, etc."
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/admin/admissions"
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-accent text-black rounded hover:bg-accent-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Saving...' : 'Update Status'}
          </button>
        </div>
      </form>
    </div>
  );
}
