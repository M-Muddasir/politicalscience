import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

// POST endpoint to create a new contact submission
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, programId, education, message, type } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Create contact submission in database
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone: phone || null,
        message,
        education: education || null,
        type: type || 'GENERAL',
        program: programId ? { connect: { id: programId } } : undefined,
        status: 'PENDING',
      },
    });

    return NextResponse.json(submission, { status: 201 });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json(
      { error: 'Failed to create contact submission' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all contact submissions or a specific one by ID
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    // If ID is provided, return a specific submission
    if (id) {
      const submission = await prisma.contactSubmission.findUnique({
        where: { id },
        include: {
          program: {
            select: {
              id: true,
              name: true,
              degreeType: true
            }
          }
        }
      });
      
      if (!submission) {
        return NextResponse.json({ error: 'Contact submission not found' }, { status: 404 });
      }
      
      return NextResponse.json(submission);
    }
    
    // Otherwise, return all submissions
    const submissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        program: {
          select: {
            id: true,
            name: true,
            degreeType: true,
          },
        },
      },
    });

    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch contact submissions' },
      { status: 500 }
    );
  }
}
