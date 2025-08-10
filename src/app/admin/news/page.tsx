"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DataTable, { Column } from '@/components/admin/DataTable';

type News = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  isHighlighted: boolean;
  isPublished: boolean;
  imageUrl: string | null;
};

export default function AdminNewsPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news');
        if (!response.ok) {
          throw new Error('Failed to fetch news data');
        }
        
        const data = await response.json();
        setNews(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load news data');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/news?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete news item');
      }

      // Refresh the news list
      setNews(news.filter(item => item.id !== id));
      return Promise.resolve();
    } catch (err) {
      console.error('Error deleting news:', err);
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

  const columns: Column<News>[] = [
    {
      header: 'Title',
      accessor: 'title'
    },
    {
      header: 'Published Date',
      accessor: 'publishedAt',
      render: (row: News) => formatDate(row.publishedAt)
    },
    {
      header: 'Featured',
      accessor: 'isHighlighted',
      render: (row: News) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.isHighlighted ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
          {row.isHighlighted ? 'Yes' : 'No'}
        </span>
      )
    },
    {
      header: 'Published',
      accessor: 'isPublished',
      render: (row: News) => (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${row.isPublished ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
          {row.isPublished ? 'Yes' : 'No'}
        </span>
      )
    },
    {
      header: 'Image',
      accessor: 'imageUrl',
      render: (row: News) => (
        row.imageUrl ? (
          <span className="text-accent hover:underline">
            <a href={row.imageUrl} target="_blank" rel="noopener noreferrer">
              View Image
            </a>
          </span>
        ) : (
          <span className="text-gray-400">None</span>
        )
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
            fetch('/api/news')
              .then(res => res.json())
              .then(data => {
                setNews(Array.isArray(data) ? data : []);
                setLoading(false);
              })
              .catch(err => {
                console.error('Error fetching news:', err);
                setError('Failed to load news data');
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
        <h1 className="text-2xl font-bold text-gray-800">News Articles</h1>
        <Link 
          href="/admin/news/add" 
          className="px-4 py-2 bg-accent text-black rounded hover:bg-accent-dark transition"
        >
          Add New Article
        </Link>
      </div>
      <DataTable
        data={news}
        columns={columns}
        entityName="News"
        entityPath="news"
        primaryKey="id"
        onDelete={handleDelete}
      />
    </div>
  );
}
