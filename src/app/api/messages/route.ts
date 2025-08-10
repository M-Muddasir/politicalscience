import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// GET all messages (chairperson and vice chancellor messages)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || undefined; // 'chairperson' or 'vice_chancellor'
    
    const messages = await prisma.$transaction([
      prisma.chairpersonMessage.findMany({
        orderBy: { updatedAt: 'desc' },
        include: {
          department: {
            select: { name: true }
          }
        }
      }),
      prisma.viceChancellorMessage.findMany({
        orderBy: { updatedAt: 'desc' }
      })
    ]);
    
    if (type === 'chairperson') {
      return NextResponse.json(messages[0]);
    } else if (type === 'vice_chancellor') {
      return NextResponse.json(messages[1]);
    } else {
      return NextResponse.json({
        chairperson: messages[0],
        viceChancellor: messages[1]
      });
    }
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

// POST to create a new message
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { type, ...messageData } = data;
    
    if (!type || !['chairperson', 'vice_chancellor'].includes(type)) {
      return NextResponse.json({ error: 'Valid message type (chairperson or vice_chancellor) is required' }, { status: 400 });
    }
    
    let message;
    
    if (type === 'chairperson') {
      message = await prisma.chairpersonMessage.create({
        data: messageData
      });
    } else {
      message = await prisma.viceChancellorMessage.create({
        data: messageData
      });
    }
    
    return NextResponse.json(message, { status: 201 });
  } catch (error) {
    console.error('Error creating message:', error);
    return NextResponse.json({ error: 'Failed to create message' }, { status: 500 });
  }
}

// PUT to update a message
export async function PUT(request: NextRequest) {
  try {
    const data = await request.json();
    const { type, id, ...updateData } = data;
    
    if (!type || !['chairperson', 'vice_chancellor'].includes(type)) {
      return NextResponse.json({ error: 'Valid message type (chairperson or vice_chancellor) is required' }, { status: 400 });
    }
    
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    let message;
    
    if (type === 'chairperson') {
      message = await prisma.chairpersonMessage.update({
        where: { id: id },
        data: updateData
      });
    } else {
      message = await prisma.viceChancellorMessage.update({
        where: { id: id },
        data: updateData
      });
    }
    
    return NextResponse.json(message);
  } catch (error) {
    console.error('Error updating message:', error);
    return NextResponse.json({ error: 'Failed to update message' }, { status: 500 });
  }
}

// DELETE a message
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const id = searchParams.get('id');
    
    if (!type || !['chairperson', 'vice_chancellor'].includes(type)) {
      return NextResponse.json({ error: 'Valid message type (chairperson or vice_chancellor) is required' }, { status: 400 });
    }
    
    if (!id) {
      return NextResponse.json({ error: 'Message ID is required' }, { status: 400 });
    }
    
    if (type === 'chairperson') {
      await prisma.chairpersonMessage.delete({
        where: { id: id }
      });
    } else {
      await prisma.viceChancellorMessage.delete({
        where: { id: id }
      });
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting message:', error);
    return NextResponse.json({ error: 'Failed to delete message' }, { status: 500 });
  }
}
