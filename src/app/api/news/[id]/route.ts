import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET single news item
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const newsItem = await prisma.news.findUnique({
      where: {
        id: params.id
      }
    });
    
    if (!newsItem) {
      return NextResponse.json({ error: 'News item not found' }, { status: 404 });
    }
    
    return NextResponse.json({ newsItem });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch news item' }, { status: 500 });
  }
}

// PUT/PATCH update news
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    const newsItem = await prisma.news.update({
      where: {
        id: params.id
      },
      data
    });
    return NextResponse.json({ newsItem });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update news item' }, { status: 500 });
  }
}

// DELETE news
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.news.delete({
      where: {
        id: params.id
      }
    });
    return NextResponse.json({ message: 'News item deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete news item' }, { status: 500 });
  }
}
