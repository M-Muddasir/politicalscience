import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all news
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const isHighlighted = searchParams.has('highlighted') ? searchParams.get('highlighted') === 'true' : undefined;
    
    const news = await prisma.news.findMany({
      where: isHighlighted !== undefined ? {
        isHighlighted: isHighlighted
      } : {},
      take: limit,
      orderBy: {
        publishedAt: 'desc'
      }
    });
    
    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

// POST new news
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const newsItem = await prisma.news.create({
      data: {
        ...data,
        publishedAt: data.publishedAt ? new Date(data.publishedAt) : new Date()
      }
    });
    
    return NextResponse.json(newsItem, { status: 201 });
  } catch (error) {
    console.error('Error creating news:', error);
    return NextResponse.json({ error: 'Failed to create news' }, { status: 500 });
  }
}

// PUT to update news
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, publishedAt, ...rest } = data;

    if (!id) {
      return NextResponse.json({ error: 'News ID is required' }, { status: 400 });
    }

    const updateData = {
      ...rest,
      ...(publishedAt && { publishedAt: new Date(publishedAt) }),
    };

    const newsItem = await prisma.news.update({
      where: { id: id },
      data: updateData,
    });

    return NextResponse.json(newsItem);
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}


// DELETE news
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'News ID is required' }, { status: 400 });
    }
    
    await prisma.news.delete({
      where: { id: id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}
