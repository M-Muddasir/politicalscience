'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  publishedAt: string;
}

const LatestNews: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(setNews)
      .catch(() => setNews([]));
  }, []);

  return (
    <section className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">LATEST NEWS</h2>
      {news.length === 0 ? (
        <p className="text-gray-500">No news available.</p>
      ) : (
        <div className="space-y-6">
          {news.map((item) => (
            <div key={item.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
              {item.imageUrl && (
                <div className="relative h-40 mb-3 overflow-hidden rounded">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(item.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-gray-700 line-clamp-3">{item.content}</p>
              <Link href={`/news/${item.id}`} className="block mt-2 text-primary hover:text-primary-dark font-medium text-sm">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestNews;
