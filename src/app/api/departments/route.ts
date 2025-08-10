import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all departments or filter by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // If ID is provided, return a single department
    if (id) {
      const department = await prisma.department.findUnique({
        where: { id },
        include: {
          faculty: true,
          programs: true,
          messages: true,
          vcMessages: true
        }
      });
      
      if (!department) {
        return NextResponse.json({ error: 'Department not found' }, { status: 404 });
      }
      
      return NextResponse.json(department);
    }
    
    // Otherwise, return all departments
    const departments = await prisma.department.findMany({
      include: {
        _count: {
          select: {
            faculty: true,
            programs: true
          }
        }
      }
    });
    
    return NextResponse.json(departments);
  } catch (error) {
    console.error('Error fetching departments:', error);
    return NextResponse.json({ error: 'Failed to fetch departments' }, { status: 500 });
  }
}

// POST to create a new department
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.name || !data.description || !data.mission || !data.vision || !data.history) {
      return NextResponse.json({ 
        error: 'Missing required fields: name, description, mission, vision, and history are required' 
      }, { status: 400 });
    }
    
    const department = await prisma.department.create({
      data
    });
    
    return NextResponse.json(department, { status: 201 });
  } catch (error) {
    console.error('Error creating department:', error);
    return NextResponse.json({ error: 'Failed to create department' }, { status: 500 });
  }
}

// PUT to update a department
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Department ID is required' }, { status: 400 });
    }
    
    const department = await prisma.department.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(department);
  } catch (error) {
    console.error('Error updating department:', error);
    return NextResponse.json({ error: 'Failed to update department' }, { status: 500 });
  }
}

// DELETE a department
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Department ID is required' }, { status: 400 });
    }
    
    await prisma.department.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting department:', error);
    return NextResponse.json({ error: 'Failed to delete department' }, { status: 500 });
  }
}
