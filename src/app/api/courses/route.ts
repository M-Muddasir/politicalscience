import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all courses or filter by program ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const programId = searchParams.get('programId') ? parseInt(searchParams.get('programId')!) : undefined;
    
    const courses = await prisma.course.findMany({
      where: {
        ...(programId && { programId }),
      },
      orderBy: {
        title: 'asc'
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
    
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });
  }
}

// POST new course
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Ensure programId is an integer
    if (data.programId && typeof data.programId === 'string') {
      data.programId = parseInt(data.programId);
    }
    
    const course = await prisma.course.create({
      data
    });
    
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error('Error creating course:', error);
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 });
  }
}

// PUT to update course
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
    }
    
    // Ensure programId is an integer
    if (updateData.programId && typeof updateData.programId === 'string') {
      updateData.programId = parseInt(updateData.programId);
    }
    
    const course = await prisma.course.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(course);
  } catch (error) {
    console.error('Error updating course:', error);
    return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
  }
}

// DELETE course
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Course ID is required' }, { status: 400 });
    }
    
    await prisma.course.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting course:', error);
    return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
  }
}
