"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Department = {
  id: string;
  name: string;
};

type ChairpersonMessage = {
  id: string;
  name: string;
  title: string;
  message: string;
  imageUrl: string | null;
  departmentId: string;
};

export default function EditChairpersonMessagePage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [departments, setDepartments] = useState<Department[]>([]);
  const [messageId, setMessageId] = useState<string>('');
  const [formData, setFormData] = useState<ChairpersonMessage>({
    id: '',
    name: '',
    title: '',
    message: '',
    imageUrl: '',
    departmentId: ''
  });

  // Resolve params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setMessageId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  // Fetch message data and departments
  useEffect(() => {
    if (!messageId) return;
    
    const fetchData = async () => {
      try {
        // Fetch message details
        const messageResponse = await fetch(`/api/messages?type=chairperson`);
        if (!messageResponse.ok) {
          throw new Error('Failed to fetch chairperson message data');
        }
        const messagesData = await messageResponse.json();
        const messageData = Array.isArray(messagesData) ? 
          messagesData.find((msg: ChairpersonMessage) => msg.id === messageId) : null;
        
        if (!messageData) {
          throw new Error('Message not found');
        }
        
        // Fetch departments for the dropdown
        const departmentsResponse = await fetch('/api/departments');
        if (!departmentsResponse.ok) {
          throw new Error('Failed to fetch departments');
        }
        const departmentsData = await departmentsResponse.json();
        
        setFormData({
          id: messageData.id,
          name: messageData.name || '',
          title: messageData.title || '',
          message: messageData.message || '',
          imageUrl: messageData.imageUrl || '',
          departmentId: messageData.departmentId || '',
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
  }, [messageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'chairperson',
          ...formData
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update chairperson message');
      }

      router.push('/admin/messages');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating chairperson message:', err);
      setErrorMessage(err.message || 'An error occurred while updating the chairperson message');
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
        <h2 className="text-xl font-semibold">Edit Chairperson Message</h2>
        <Link
          href="/admin/messages"
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
              Chairperson Name *
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
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title/Position *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl || ''}
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

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={10}
              value={formData.message}
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
            {isSubmitting ? 'Saving...' : 'Update Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
