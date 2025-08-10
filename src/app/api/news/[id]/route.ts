import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET single news item
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const newsItem = await prisma.news.findUnique({
      where: {
        id: id
      }
    });
    
    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ newsItem });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

// PUT/PATCH update news
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const newsItem = await prisma.news.update({
      where: {
        id: id
      },
      data
    });
    return NextResponse.json({ newsItem });
  } catch {
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

// DELETE news
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.news.delete({
      where: {
        id: id
      }
    });
    return NextResponse.json({ message: 'News item deleted successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}
