import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET a single course by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } } // ID comes as a string
) {
  try {
    const course = await prisma.course.findUnique({
      where: {
        id: params.id
      },
      include: {
        program: {
          select: {
            name: true,
            degreeType: true
          }
        }
      }
    });
    
    if (!course) {
      return NextResponse.json({ error: 'Course not found' }, { status: 404 });
    }
    
    return NextResponse.json(course);
  } catch (error) {
    console.error('Error fetching course:', error);
    return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
  }
}

// PATCH to update a course
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const data = await request.json();
    
    // Ensure programId is an integer if provided
    if (data.programId && typeof data.programId === 'string') {
      data.programId = parseInt(data.programId);
    }
    
    const course = await prisma.course.update({
      where: {
        id: params.id
      },
      data
    });
    
    return NextResponse.json(course);
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}

// DELETE a course
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.course.delete({
      where: {
        id: params.id
      }
    });
    
    return NextResponse.json({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}
