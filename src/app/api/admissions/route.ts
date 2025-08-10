import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all contact submissions / admissions
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined;
    const programId = searchParams.get('programId') || undefined;
    const status = searchParams.get('status') || undefined;
    
    const submissions = await prisma.contactSubmission.findMany({
      where: {
        ...(programId && { programId }),
        ...(status && { status }),
      },
      take: limit,
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        program: {
          select: {
            name: true
          }
        }
      }
    });
    
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json({ error: 'Failed to fetch contact submissions' }, { status: 500 });
  }
}

// POST new contact submission / admission
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    const submission = await prisma.contactSubmission.create({
      data: {
        ...data,
        createdAt: data.createdAt || new Date()
      }
    });
    
    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ error: 'Failed to create contact submission' }, { status: 500 });
  }
}

// PUT to update contact submission / admission
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { id, ...updateData } = data;
    
    if (!id) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 });
    }
    
    const submission = await prisma.contactSubmission.update({
      where: { id: id },
      data: updateData
    });
    
    return NextResponse.json(submission);
  } catch (error) {
    console.error('Error updating contact submission:', error);
    return NextResponse.json({ error: 'Failed to update contact submission' }, { status: 500 });
  }
}

// DELETE contact submission / admission
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'Submission ID is required' }, { status: 400 });
    }
    
    await prisma.contactSubmission.delete({
      where: { id: id }
    });
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    return NextResponse.json({ error: 'Failed to delete contact submission' }, { status: 500 });
  }
}
