'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  publishedAt: Date;
  isPublished: boolean;
  isHighlighted: boolean;
}

export default function LatestNewsSidebar() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLatestNews() {
      try {
        const response = await fetch('/api/news?limit=5', { 
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch latest news');
        }
        
        const data = await response.json();
        // The News API returns the array directly, not wrapped in a property
        setNews(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError('Failed to load latest news');
        setLoading(false);
      }
    }
    
    fetchLatestNews();
  }, []);

  function formatDate(dateString: Date) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Latest News</h3>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-3">
              <div className="w-16 h-16 bg-gray-200 rounded"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold text-primary mb-4">Latest News</h3>
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold text-primary mb-4">Latest News</h3>
      
      {news.length === 0 ? (
        <p className="text-gray-500">No news available at this time.</p>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <Link href={`/news/${item.id}`} key={item.id} className="flex gap-3 group">
              <div className="w-16 h-16 relative flex-shrink-0 overflow-hidden rounded-md">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-xs text-gray-500">No image</span>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 group-hover:text-primary line-clamp-2 text-sm">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {formatDate(item.publishedAt)}
                </p>
              </div>
            </Link>
          ))}
          
          <div className="pt-2 mt-2 border-t">
            <Link 
              href="/news" 
              className="text-sm text-primary hover:text-primary-dark font-medium flex items-center"
            >
              View All News
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
