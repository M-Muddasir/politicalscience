import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all activities or filter by ID/centre
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const centreId = searchParams.get('centreId');
    
    // If ID is provided, return a single activity
    if (id) {
      const activity = await prisma.activity.findUnique({
        where: { id },
        include: {
          chinaStudyCentre: {
            select: {
              title: true
            }
          }
        }
      });
      
      if (!activity) {
        return NextResponse.json({ error: 'Activity not found' }, { status: 404 });
      }
      
      return NextResponse.json(activity);
    }
    
    // Otherwise, return all activities with optional centre filter
    const activities = await prisma.activity.findMany({
      where: {
        ...(centreId && { chinaStudyCentreId: centreId }),
      },
      orderBy: {
        date: 'desc'
      },
      include: {
        chinaStudyCentre: {
          select: {
            title: true
          }
        }
      }
    });
    
    return NextResponse.json(activities);
  } catch (error) {
    console.error('Error fetching activities:', error);
    return NextResponse.json({ error: 'Failed to fetch activities' }, { status: 500 });
  }
}

// POST new activity
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Parse date if provided as string
    if (data.date && typeof data.date === 'string') {
      data.date = new Date(data.date);
    }
    
    const activity = await prisma.activity.create({
      data
    });
    
    return NextResponse.json(activity, { status: 201 });
  } catch (error) {
    console.error('Error creating activity:', error);
    return NextResponse.json({ error: 'Failed to create activity' }, { status: 500 });
  }
}

// PUT to update activity
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Activity ID is required' }, { status: 400 });
    }
    
    // Parse date if provided as string
    if (updateData.date && typeof updateData.date === 'string') {
      updateData.date = new Date(updateData.date);
    }
    
    const activity = await prisma.activity.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(activity);
  } catch (error) {
    console.error('Error updating activity:', error);
    return NextResponse.json({ error: 'Failed to update activity' }, { status: 500 });
  }
}

// DELETE activity
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Activity ID is required' }, { status: 400 });
    }
    
    await prisma.activity.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting activity:', error);
    return NextResponse.json({ error: 'Failed to delete activity' }, { status: 500 });
  }
}
