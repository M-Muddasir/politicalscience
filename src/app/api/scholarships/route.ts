import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all scholarships or filter by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const isActive = searchParams.has('isActive') 
      ? searchParams.get('isActive') === 'true' 
      : undefined;
    
    // If ID is provided, return a single scholarship
    if (id) {
      const scholarship = await prisma.scholarship.findUnique({
        where: { id }
      });
      
      if (!scholarship) {
        return NextResponse.json({ error: 'Scholarship not found' }, { status: 404 });
      }
      
      return NextResponse.json(scholarship);
    }
    
    // Otherwise, return all scholarships with optional active filter
    const scholarships = await prisma.scholarship.findMany({
      where: {
        ...(isActive !== undefined && { isActive }),
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(scholarships);
  } catch (error) {
    console.error('Error fetching scholarships:', error);
    return NextResponse.json({ error: 'Failed to fetch scholarships' }, { status: 500 });
  }
}

// POST new scholarship
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Parse the deadline if provided as a string
    if (data.deadline && typeof data.deadline === 'string') {
      data.deadline = new Date(data.deadline);
    }
    
    const scholarship = await prisma.scholarship.create({
      data
    });
    
    return NextResponse.json(scholarship, { status: 201 });
  } catch (error) {
    console.error('Error creating scholarship:', error);
    return NextResponse.json({ error: 'Failed to create scholarship' }, { status: 500 });
  }
}

// PUT to update scholarship
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Scholarship ID is required' }, { status: 400 });
    }
    
    // Parse the deadline if provided as a string
    if (updateData.deadline && typeof updateData.deadline === 'string') {
      updateData.deadline = new Date(updateData.deadline);
    }
    
    const scholarship = await prisma.scholarship.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(scholarship);
  } catch (error) {
    console.error('Error updating scholarship:', error);
    return NextResponse.json({ error: 'Failed to update scholarship' }, { status: 500 });
  }
}

// DELETE scholarship
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Scholarship ID is required' }, { status: 400 });
    }
    
    await prisma.scholarship.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting scholarship:', error);
    return NextResponse.json({ error: 'Failed to delete scholarship' }, { status: 500 });
  }
}
