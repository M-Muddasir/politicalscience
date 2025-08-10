import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all programs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const departmentId = searchParams.get('departmentId') || undefined;
    const degreeType = searchParams.get('degreeType') || undefined;
    
    const programs = await prisma.program.findMany({
      where: {
        ...(departmentId && { departmentId }),
        ...(degreeType && { degreeType }),
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
        },
        _count: {
          select: {
            courses: true
          }
        }
      }
    });
    
    return NextResponse.json(programs);
  } catch (error) {
    console.error('Error fetching programs:', error);
    return NextResponse.json({ error: 'Failed to fetch programs' }, { status: 500 });
  }
}

// POST new program
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const program = await prisma.program.create({
      data
    });
    
    return NextResponse.json(program, { status: 201 });
  } catch (error) {
    console.error('Error creating program:', error);
    return NextResponse.json({ error: 'Failed to create program' }, { status: 500 });
  }
}

// PUT to update program
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Program ID is required' }, { status: 400 });
    }
    
    const program = await prisma.program.update({
      where: { id: parseInt(id) },
      data: updateData
    });
    
    return NextResponse.json(program);
  } catch (error) {
    console.error('Error updating program:', error);
    return NextResponse.json({ error: 'Failed to update program' }, { status: 500 });
  }
}

// DELETE program
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Program ID is required' }, { status: 400 });
    }
    
    await prisma.program.delete({
      where: { id: parseInt(id) }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting program:', error);
    return NextResponse.json({ error: 'Failed to delete program' }, { status: 500 });
  }
}
