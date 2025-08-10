import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getNews() {
  try {
    const news = await prisma.news.findMany({
      orderBy: {
        publishedAt: 'desc',
      },
      take: 20, // Limit to 20 most recent news items
    });
    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

function formatDate(dateString: string | Date) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">Latest News</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-gray-700 text-center">
          Stay updated with the latest news, events, and announcements from the Department of Political Science.
        </p>
      </div>

      {news.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">No news available at this time.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {news.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
              <div className="h-56 relative overflow-hidden">
                {post.imageUrl ? (
                  <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500">No image</span>
                  </div>
                )}
                {post.isHighlighted && (
                  <div className="absolute top-0 right-0 bg-accent text-black px-3 py-1 text-sm font-semibold">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <p className="text-sm text-gray-500">
                    {formatDate(post.publishedAt)}
                  </p>
                </div>
                
                <h2 className="text-2xl font-semibold text-primary mb-3">{post.title}</h2>
                
                <div className="text-gray-700 mb-4 line-clamp-3">
                  {post.content.substring(0, 150) + '...'}
                </div>
                
                <div className="mt-auto">
                  <Link href={`/news/${post.id}`} className="text-primary hover:text-primary-dark font-medium flex items-center">
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
