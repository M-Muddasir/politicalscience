import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all alumni or filter by ID/year
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const graduationYear = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
    
    // If ID is provided, return a single alumni record
    if (id) {
      const alumnus = await prisma.alumni.findUnique({
        where: { id }
      });
      
      if (!alumnus) {
        return NextResponse.json({ error: 'Alumni record not found' }, { status: 404 });
      }
      
      return NextResponse.json(alumnus);
    }
    
    // Otherwise, return all alumni with optional year filter
    const alumni = await prisma.alumni.findMany({
      where: {
        ...(graduationYear && { graduationYear }),
      },
      orderBy: [
        { graduationYear: 'desc' },
        { name: 'asc' }
      ]
    });
    
    return NextResponse.json(alumni);
  } catch (error) {
    console.error('Error fetching alumni:', error);
    return NextResponse.json({ error: 'Failed to fetch alumni' }, { status: 500 });
  }
}

// POST new alumni record
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Convert graduationYear to integer if it's a string
    if (typeof data.graduationYear === 'string') {
      data.graduationYear = parseInt(data.graduationYear);
    }
    
    const alumni = await prisma.alumni.create({
      data
    });
    
    return NextResponse.json(alumni, { status: 201 });
  } catch (error) {
    console.error('Error creating alumni record:', error);
    return NextResponse.json({ error: 'Failed to create alumni record' }, { status: 500 });
  }
}

// PUT to update alumni record
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Alumni ID is required' }, { status: 400 });
    }
    
    // Convert graduationYear to integer if it's a string
    if (typeof updateData.graduationYear === 'string') {
      updateData.graduationYear = parseInt(updateData.graduationYear);
    }
    
    const alumni = await prisma.alumni.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(alumni);
  } catch (error) {
    console.error('Error updating alumni record:', error);
    return NextResponse.json({ error: 'Failed to update alumni record' }, { status: 500 });
  }
}

// DELETE alumni record
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Alumni ID is required' }, { status: 400 });
    }
    
    await prisma.alumni.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting alumni record:', error);
    return NextResponse.json({ error: 'Failed to delete alumni record' }, { status: 500 });
  }
}
