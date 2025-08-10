import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all newsletters or filter by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
    
    // If ID is provided, return a single newsletter
    if (id) {
      const newsletter = await prisma.newsletter.findUnique({
        where: { id }
      });
      
      if (!newsletter) {
        return NextResponse.json({ error: 'Newsletter not found' }, { status: 404 });
      }
      
      return NextResponse.json(newsletter);
    }
    
    // Otherwise, return all newsletters with optional year filter
    const newsletters = await prisma.newsletter.findMany({
      where: {
        ...(year && { year })
      },
      orderBy: [
        { year: 'desc' },
        { issue: 'desc' }
      ]
    });
    
    return NextResponse.json(newsletters);
  } catch (error) {
    console.error('Error fetching newsletters:', error);
    return NextResponse.json({ error: 'Failed to fetch newsletters' }, { status: 500 });
  }
}

// POST new newsletter
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Convert numeric fields to integers
    if (typeof data.issue === 'string') data.issue = parseInt(data.issue);
    if (typeof data.year === 'string') data.year = parseInt(data.year);
    
    const newsletter = await prisma.newsletter.create({
      data
    });
    
    return NextResponse.json(newsletter, { status: 201 });
  } catch (error) {
    console.error('Error creating newsletter:', error);
    return NextResponse.json({ error: 'Failed to create newsletter' }, { status: 500 });
  }
}

// PUT to update newsletter
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Newsletter ID is required' }, { status: 400 });
    }
    
    // Convert numeric fields to integers
    if (typeof updateData.issue === 'string') updateData.issue = parseInt(updateData.issue);
    if (typeof updateData.year === 'string') updateData.year = parseInt(updateData.year);
    
    const newsletter = await prisma.newsletter.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(newsletter);
  } catch (error) {
    console.error('Error updating newsletter:', error);
    return NextResponse.json({ error: 'Failed to update newsletter' }, { status: 500 });
  }
}

// DELETE newsletter
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Newsletter ID is required' }, { status: 400 });
    }
    
    await prisma.newsletter.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting newsletter:', error);
    return NextResponse.json({ error: 'Failed to delete newsletter' }, { status: 500 });
  }
}
