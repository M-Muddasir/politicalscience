import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET single faculty
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Ensure params is used after being fully resolved
    const { id } = await params;
    
    const faculty = await prisma.faculty.findUnique({
      where: {
        id
      }
    });
    
    if (!faculty) {
      return NextResponse.json({ error: 'Faculty not found' }, { status: 404 });
    }
    
    return NextResponse.json({ faculty });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch faculty' }, { status: 500 });
  }
}

// PUT/PATCH update faculty
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    
    const faculty = await prisma.faculty.update({
      where: {
        id
      },
      data
    });
    return NextResponse.json({ faculty });
  } catch {
    return NextResponse.json({ error: 'Failed to update faculty' }, { status: 500 });
  }
}

// DELETE faculty
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await prisma.faculty.delete({
      where: {
        id
      }
    });
    return NextResponse.json({ message: 'Faculty deleted successfully' });
  } catch {
    return NextResponse.json({ error: 'Failed to delete faculty' }, { status: 500 });
  }
}
