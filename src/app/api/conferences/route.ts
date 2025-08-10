import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all conferences or filter by ID/year
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
    
    // If ID is provided, return a single conference
    if (id) {
      const conference = await prisma.conference.findUnique({
        where: { id }
      });
      
      if (!conference) {
        return NextResponse.json({ error: 'Conference not found' }, { status: 404 });
      }
      
      return NextResponse.json(conference);
    }
    
    // Otherwise, return all conferences with optional year filter
    const conferences = await prisma.conference.findMany({
      where: {
        ...(year && { year }),
      },
      orderBy: {
        year: 'desc'
      }
    });
    
    return NextResponse.json(conferences);
  } catch (error) {
    console.error('Error fetching conferences:', error);
    return NextResponse.json({ error: 'Failed to fetch conferences' }, { status: 500 });
  }
}

// POST new conference
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Convert year to integer if it's a string
    if (typeof data.year === 'string') {
      data.year = parseInt(data.year);
    }
    
    const conference = await prisma.conference.create({
      data
    });
    
    return NextResponse.json(conference, { status: 201 });
  } catch (error) {
    console.error('Error creating conference:', error);
    return NextResponse.json({ error: 'Failed to create conference' }, { status: 500 });
  }
}

// PUT to update conference
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Conference ID is required' }, { status: 400 });
    }
    
    // Convert year to integer if it's a string
    if (typeof updateData.year === 'string') {
      updateData.year = parseInt(updateData.year);
    }
    
    const conference = await prisma.conference.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(conference);
  } catch (error) {
    console.error('Error updating conference:', error);
    return NextResponse.json({ error: 'Failed to update conference' }, { status: 500 });
  }
}

// DELETE conference
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Conference ID is required' }, { status: 400 });
    }
    
    await prisma.conference.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting conference:', error);
    return NextResponse.json({ error: 'Failed to delete conference' }, { status: 500 });
  }
}
