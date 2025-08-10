import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all events with optional filtering
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const eventType = searchParams.get('type');
    const title = searchParams.get('title');
    
    // If ID is provided, return a single event
    if (id) {
      const event = await prisma.event.findUnique({
        where: { id },
        include: {
          society: true
        }
      });
      
      if (!event) {
        return NextResponse.json({ error: 'Event not found' }, { status: 404 });
      }
      
      return NextResponse.json(event);
    }
    
    // Otherwise, return filtered or all events
    const events = await prisma.event.findMany({
      where: {
        ...(eventType ? { eventType: { contains: eventType, mode: 'insensitive' } } : {}),
        ...(title ? { title: { contains: title, mode: 'insensitive' } } : {}),
      },
      orderBy: [
        { date: 'desc' },
        { createdAt: 'desc' }
      ],
      include: {
        society: {
          select: { name: true }
        }
      }
    });
    
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

// POST to create a new event
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.eventType || !data.date) {
      return NextResponse.json({ 
        error: 'Missing required fields: title, eventType, and date are required' 
      }, { status: 400 });
    }
    
    // Parse the date string to a valid date object
    if (data.date) {
      data.date = new Date(data.date);
    }
    
    const event = await prisma.event.create({
      data
    });
    
    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}

// PUT to update an event
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }
    
    // Parse the date string to a valid date object
    if (updateData.date) {
      updateData.date = new Date(updateData.date);
    }
    
    const event = await prisma.event.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    return NextResponse.json({ error: 'Failed to update event' }, { status: 500 });
  }
}

// DELETE an event
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Event ID is required' }, { status: 400 });
    }
    
    await prisma.event.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting event:', error);
    return NextResponse.json({ error: 'Failed to delete event' }, { status: 500 });
  }
}
