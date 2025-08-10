import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all agreements or filter by ID/centre
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const centreId = searchParams.get('centreId');
    
    // If ID is provided, return a single agreement
    if (id) {
      const agreement = await prisma.agreement.findUnique({
        where: { id },
        include: {
          chinaStudyCentre: {
            select: {
              title: true
            }
          }
        }
      });
      
      if (!agreement) {
        return NextResponse.json({ error: 'Agreement not found' }, { status: 404 });
      }
      
      return NextResponse.json(agreement);
    }
    
    // Otherwise, return all agreements with optional centre filter
    const agreements = await prisma.agreement.findMany({
      where: {
        ...(centreId && { chinaStudyCentreId: centreId }),
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        chinaStudyCentre: {
          select: {
            title: true
          }
        }
      }
    });
    
    return NextResponse.json(agreements);
  } catch (error) {
    console.error('Error fetching agreements:', error);
    return NextResponse.json({ error: 'Failed to fetch agreements' }, { status: 500 });
  }
}

// POST new agreement
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const agreement = await prisma.agreement.create({
      data
    });
    
    return NextResponse.json(agreement, { status: 201 });
  } catch (error) {
    console.error('Error creating agreement:', error);
    return NextResponse.json({ error: 'Failed to create agreement' }, { status: 500 });
  }
}

// PUT to update agreement
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Agreement ID is required' }, { status: 400 });
    }
    
    const agreement = await prisma.agreement.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(agreement);
  } catch (error) {
    console.error('Error updating agreement:', error);
    return NextResponse.json({ error: 'Failed to update agreement' }, { status: 500 });
  }
}

// DELETE agreement
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Agreement ID is required' }, { status: 400 });
    }
    
    await prisma.agreement.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting agreement:', error);
    return NextResponse.json({ error: 'Failed to delete agreement' }, { status: 500 });
  }
}
