import React from 'react';
import { prisma } from '@/lib/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// This page will not be cached and will be regenerated on each request
export const dynamic = 'force-dynamic';

async function getNewsPost(id: string) {
  try {
    const post = await prisma.news.findUnique({
      where: {
        id: id
      }
    });
    
    return post;
  } catch (error) {
    console.error('Error fetching news post:', error);
    return null;
  }
}

async function getRelatedNews(currentPostId: string) {
  try {
    const relatedPosts = await prisma.news.findMany({
      where: {
        id: {
          not: currentPostId
        },
      },
      orderBy: {
        publishedAt: 'desc'
      },
      take: 3,
    });
    
    return relatedPosts;
  } catch (error) {
    console.error('Error fetching related news:', error);
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

export default async function NewsDetailPage({ params }: { params: { id: string } }) {
  const post = await getNewsPost(params.id);
  
  if (!post) {
    return notFound();
  }
  
  const relatedPosts = await getRelatedNews(post.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/news" className="text-gray-500 hover:text-primary">News</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
        
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-3 text-sm text-gray-600 mb-6">
            <span>{formatDate(post.publishedAt)}</span>
            {post.isHighlighted && (
              <>
                <span className="text-gray-400">•</span>
                <span className="bg-accent text-black px-2 py-0.5 rounded-md text-xs font-medium">Featured</span>
              </>
            )}
          </div>
        </div>
        
        {/* Featured Image */}
        {post.imageUrl && (
          <div className="relative h-96 w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        
        {/* Content */}
        <div className="prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\\n/g, '<br />') }} />
        </div>
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Related News</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/news/${related.id}`}
                  className="group block"
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden h-full hover:shadow-lg transition-shadow">
                    <div className="h-44 relative">
                      {related.imageUrl ? (
                        <Image
                          src={related.imageUrl}
                          alt={related.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">No image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-500 mb-1">{formatDate(related.publishedAt)}</p>
                      <h4 className="font-semibold text-primary group-hover:text-accent mb-2 line-clamp-2">{related.title}</h4>
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {related.content.substring(0, 100) + '...'}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* Back Button */}
        <div className="mt-12">
          <Link 
            href="/news"
            className="flex items-center text-primary hover:text-accent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to News
          </Link>
        </div>
      </div>
    </div>
  );
}
