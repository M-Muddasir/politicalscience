import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET China Study Centre info
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // If ID is provided, return a specific China Study Centre record
    if (id) {
      const centre = await prisma.chinaStudyCentre.findUnique({
        where: { id },
        include: {
          agreements: true,
          activities: {
            orderBy: {
              date: 'desc'
            }
          }
        }
      });
      
      if (!centre) {
        return NextResponse.json({ error: 'China Study Centre not found' }, { status: 404 });
      }
      
      return NextResponse.json(centre);
    }
    
    // Otherwise, return all records (usually just one)
    const centres = await prisma.chinaStudyCentre.findMany({
      include: {
        _count: {
          select: {
            agreements: true,
            activities: true
          }
        }
      }
    });
    
    return NextResponse.json(centres);
  } catch (error) {
    console.error('Error fetching China Study Centre info:', error);
    return NextResponse.json({ error: 'Failed to fetch China Study Centre information' }, { status: 500 });
  }
}

// POST create new China Study Centre record
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const centre = await prisma.chinaStudyCentre.create({
      data
    });
    
    return NextResponse.json(centre, { status: 201 });
  } catch (error) {
    console.error('Error creating China Study Centre record:', error);
    return NextResponse.json({ error: 'Failed to create China Study Centre record' }, { status: 500 });
  }
}

// PUT to update China Study Centre record
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'China Study Centre ID is required' }, { status: 400 });
    }
    
    const centre = await prisma.chinaStudyCentre.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(centre);
  } catch (error) {
    console.error('Error updating China Study Centre record:', error);
    return NextResponse.json({ error: 'Failed to update China Study Centre record' }, { status: 500 });
  }
}

// DELETE China Study Centre record
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'China Study Centre ID is required' }, { status: 400 });
    }
    
    await prisma.chinaStudyCentre.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting China Study Centre record:', error);
    return NextResponse.json({ error: 'Failed to delete China Study Centre record' }, { status: 500 });
  }
}
