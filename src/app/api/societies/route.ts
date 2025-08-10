import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all societies or filter by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // If ID is provided, return a single society with events
    if (id) {
      const society = await prisma.society.findUnique({
        where: { id },
        include: {
          events: {
            orderBy: {
              date: 'desc'
            }
          }
        }
      });
      
      if (!society) {
        return NextResponse.json({ error: 'Society not found' }, { status: 404 });
      }
      
      return NextResponse.json(society);
    }
    
    // Otherwise, return all societies
    const societies = await prisma.society.findMany({
      orderBy: {
        name: 'asc'
      },
      include: {
        _count: {
          select: {
            events: true
          }
        }
      }
    });
    
    return NextResponse.json(societies);
  } catch (error) {
    console.error('Error fetching societies:', error);
    return NextResponse.json({ error: 'Failed to fetch societies' }, { status: 500 });
  }
}

// POST new society
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const society = await prisma.society.create({
      data
    });
    
    return NextResponse.json(society, { status: 201 });
  } catch (error) {
    console.error('Error creating society:', error);
    return NextResponse.json({ error: 'Failed to create society' }, { status: 500 });
  }
}

// PUT to update society
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Society ID is required' }, { status: 400 });
    }
    
    const society = await prisma.society.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(society);
  } catch (error) {
    console.error('Error updating society:', error);
    return NextResponse.json({ error: 'Failed to update society' }, { status: 500 });
  }
}

// DELETE society
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Society ID is required' }, { status: 400 });
    }
    
    await prisma.society.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting society:', error);
    return NextResponse.json({ error: 'Failed to delete society' }, { status: 500 });
  }
}
