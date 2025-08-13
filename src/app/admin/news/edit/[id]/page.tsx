"use client";

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ImageUpload from '@/components/admin/ImageUpload';

type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  isHighlighted: boolean;
  isPublished: boolean;
  imageUrl: string | null;
};

export default function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [newsId, setNewsId] = useState<string>('');
  const [formData, setFormData] = useState<News>({
    id: '',
    title: '',
    content: '',
    publishedAt: new Date().toISOString().split('T')[0],
    isHighlighted: false,
    isPublished: true,
    imageUrl: ''
  });

  // Resolve params Promise
  useEffect(() => {
    const resolveParams = async () => {
      const resolvedParams = await params;
      setNewsId(resolvedParams.id);
    };
    resolveParams();
  }, [params]);

  // Fetch news data and departments
  useEffect(() => {
    if (!newsId) return;
    
    const fetchData = async () => {
      try {
        // Fetch news details
        const newsResponse = await fetch(`/api/news/${newsId}`);
        if (!newsResponse.ok) {
          throw new Error('Failed to fetch news data');
        }
        let newsData = await newsResponse.json();
        
        if (newsData.newsItem) {
          // API returns data as newsItem property
          newsData = newsData.newsItem;
        }
        
        setFormData({
          id: newsData.id,
          title: newsData.title || '',
          content: newsData.content || '',
          publishedAt: newsData.publishedAt ? new Date(newsData.publishedAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
          isHighlighted: newsData.isHighlighted !== undefined ? newsData.isHighlighted : false,
          isPublished: newsData.isPublished !== undefined ? newsData.isPublished : true,
          imageUrl: newsData.imageUrl || '',
        });
        
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching data:', err);
        setErrorMessage('Failed to load data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, [newsId]);

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
      const response = await fetch('/api/news', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to update news');
      }

      router.push('/admin/news');
      router.refresh();
    } catch (err: any) {
      console.error('Error updating news:', err);
      setErrorMessage(err.message || 'An error occurred while updating the news');
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
        <h2 className="text-xl font-semibold">Edit News</h2>
        <Link
          href="/admin/news"
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
          <div className="md:col-span-2">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
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
            <label htmlFor="publishedAt" className="block text-sm font-medium text-gray-700 mb-1">
              Publication Date *
            </label>
            <input
              type="date"
              id="publishedAt"
              name="publishedAt"
              required
              value={formData.publishedAt}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-accent focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              News Image
            </label>
            <ImageUpload
              folder="news"
              currentImage={formData.imageUrl || ''}
              onImageUpload={(imageUrl) => setFormData({ ...formData, imageUrl })}
              className="mb-4"
              entityId={formData.id}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="isHighlighted"
              name="isHighlighted"
              checked={formData.isHighlighted}
              onChange={handleChange}
              className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
            />
            <label htmlFor="isHighlighted" className="ml-2 block text-sm text-gray-700">
              Featured News
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="isPublished"
              name="isPublished"
              checked={formData.isPublished}
              onChange={handleChange}
              className="h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded"
            />
            <label htmlFor="isPublished" className="ml-2 block text-sm text-gray-700">
              Published
            </label>
          </div>

          {/* Summary field removed as it's not in the schema */}

          <div className="md:col-span-2">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              required
              rows={10}
              value={formData.content}
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
            {isSubmitting ? 'Saving...' : 'Update News'}
          </button>
        </div>
      </form>
    </div>
  );
}
