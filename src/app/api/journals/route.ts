import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all journals or filter by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const year = searchParams.get('year') ? parseInt(searchParams.get('year')!) : undefined;
    
    // If ID is provided, return a single journal
    if (id) {
      const journal = await prisma.journal.findUnique({
        where: { id }
      });
      
      if (!journal) {
        return NextResponse.json({ error: 'Journal not found' }, { status: 404 });
      }
      
      return NextResponse.json(journal);
    }
    
    // Otherwise, return all journals with optional year filter
    const journals = await prisma.journal.findMany({
      where: {
        ...(year && { year })
      },
      orderBy: [
        { year: 'desc' },
        { volume: 'desc' },
        { issue: 'desc' }
      ]
    });
    
    return NextResponse.json(journals);
  } catch (error) {
    console.error('Error fetching journals:', error);
    return NextResponse.json({ error: 'Failed to fetch journals' }, { status: 500 });
  }
}

// POST new journal
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Convert numeric fields to integers
    if (typeof data.volume === 'string') data.volume = parseInt(data.volume);
    if (typeof data.issue === 'string') data.issue = parseInt(data.issue);
    if (typeof data.year === 'string') data.year = parseInt(data.year);
    
    const journal = await prisma.journal.create({
      data
    });
    
    return NextResponse.json(journal, { status: 201 });
  } catch (error) {
    console.error('Error creating journal:', error);
    return NextResponse.json({ error: 'Failed to create journal' }, { status: 500 });
  }
}

// PUT to update journal
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Journal ID is required' }, { status: 400 });
    }
    
    // Convert numeric fields to integers
    if (typeof updateData.volume === 'string') updateData.volume = parseInt(updateData.volume);
    if (typeof updateData.issue === 'string') updateData.issue = parseInt(updateData.issue);
    if (typeof updateData.year === 'string') updateData.year = parseInt(updateData.year);
    
    const journal = await prisma.journal.update({
      where: { id },
      data: updateData
    });
    
    return NextResponse.json(journal);
  } catch (error) {
    console.error('Error updating journal:', error);
    return NextResponse.json({ error: 'Failed to update journal' }, { status: 500 });
  }
}

// DELETE journal
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Journal ID is required' }, { status: 400 });
    }
    
    await prisma.journal.delete({
      where: { id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting journal:', error);
    return NextResponse.json({ error: 'Failed to delete journal' }, { status: 500 });
  }
}
