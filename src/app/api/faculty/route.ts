import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all faculty
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const departmentId = searchParams.get('departmentId') || undefined;
    const isActive = searchParams.has('isActive') 
      ? searchParams.get('isActive') === 'true' 
      : undefined;
    
    const faculty = await prisma.faculty.findMany({
      where: {
        ...(departmentId && { departmentId }),
        ...(isActive !== undefined && { isActive }),
      },
      take: limit,
      orderBy: {
        name: 'asc'
      },
      include: {
        department: {
          select: {
            name: true
          }
        }
      }
    });
    
    return NextResponse.json(faculty);
  } catch (error) {
    console.error('Error fetching faculty:', error);
    return NextResponse.json({ error: 'Failed to fetch faculty' }, { status: 500 });
  }
}

// POST new faculty
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const faculty = await prisma.faculty.create({
      data
    });
    
    return NextResponse.json(faculty, { status: 201 });
  } catch (error) {
    console.error('Error creating faculty:', error);
    return NextResponse.json({ error: 'Failed to create faculty' }, { status: 500 });
  }
}

// PUT to update faculty
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Faculty ID is required' }, { status: 400 });
    }
    
    const faculty = await prisma.faculty.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(faculty);
  } catch (error) {
    console.error('Error updating faculty:', error);
    return NextResponse.json({ error: 'Failed to update faculty' }, { status: 500 });
  }
}

// DELETE faculty
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Faculty ID is required' }, { status: 400 });
    }
    
    await prisma.faculty.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting faculty:', error);
    return NextResponse.json({ error: 'Failed to delete faculty' }, { status: 500 });
  }
}
