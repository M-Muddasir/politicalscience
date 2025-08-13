import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { uploadToS3 } from '@/lib/s3';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Function to ensure directory exists
async function ensureDir(dirPath: string) {
  try {
    await mkdir(dirPath, { recursive: true });
  } catch (error) {
    // Directory already exists or cannot be created
    console.error(`Error creating directory ${dirPath}:`, error);
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const folder = formData.get('folder') as string; // 'news', 'faculty', 'events', etc.
    const entityId = formData.get('entityId') as string | null;
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
    if (!folder || !['news', 'faculty', 'events'].includes(folder)) {
      return NextResponse.json({ error: 'Invalid folder specified' }, { status: 400 });
    }

    // Validate file type
    const fileExtension = path.extname(file.name).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, JPEG, and PNG files are allowed.' },
        { status: 400 }
      );
    }
    
    // Create unique filename
    const originalNameWithoutExt = file.name.replace(fileExtension, '');
    const uniqueName = `${originalNameWithoutExt}-${uuidv4()}${fileExtension}`;
    
    // Convert the file to buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    
    try {
      // Upload to S3
      const s3Result = await uploadToS3(
        buffer,
        uniqueName,
        file.type,
        folder as 'faculty' | 'events' | 'news'
      );
      
      // Update database if entityId is provided
      if (entityId) {
        try {
          if (folder === 'faculty') {
            await prisma.faculty.update({
              where: { id: entityId },
              data: {
                imageUrl: s3Result.url
              }
            });
            console.log(`Updated faculty record ${entityId} with S3 image URL: ${s3Result.url}`);
          } else if (folder === 'events') {
            await prisma.event.update({
              where: { id: entityId },
              data: {
                imageUrl: s3Result.url
              }
            });
            console.log(`Updated event record ${entityId} with S3 image URL: ${s3Result.url}`);
          } else if (folder === 'news') {
            await prisma.news.update({
              where: { id: entityId },
              data: {
                imageUrl: s3Result.url
              }
            });
            console.log(`Updated news record ${entityId} with S3 image URL: ${s3Result.url}`);
          }
        } catch (dbError) {
          console.error('Error updating database:', dbError);
        }
      }
      
      return NextResponse.json({
        success: true,
        url: s3Result.url,
        key: s3Result.key
      });
    } catch (s3Error) {
      console.error('S3 upload failed, falling back to local storage:', s3Error);
      
      // Fall back to local storage
      // Ensure target directory exists
      const publicDir = path.join(process.cwd(), 'public');
      const targetDir = path.join(publicDir, folder);
      await ensureDir(targetDir);
      
      // Save file locally
      const filePath = path.join(targetDir, uniqueName);
      await writeFile(filePath, buffer);
      
      // File URL for local storage
      const fileUrl = `/${folder}/${uniqueName}`;
      
      // Update database if entityId is provided
      if (entityId) {
        try {
          if (folder === 'faculty') {
            await prisma.faculty.update({
              where: { id: entityId },
              data: {
                imageUrl: fileUrl
              }
            });
          } else if (folder === 'events') {
            await prisma.event.update({
              where: { id: entityId },
              data: {
                imageUrl: fileUrl
              }
            });
          } else if (folder === 'news') {
            await prisma.news.update({
              where: { id: entityId },
              data: {
                imageUrl: fileUrl
              }
            });
          }
        } catch (dbError) {
          console.error('Error updating database with local file info:', dbError);
        }
      }
      
      return NextResponse.json({ 
        success: true,
        filePath: fileUrl,
        storageType: 'local'
      });
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'File upload failed' },
      { status: 500 }
    );
  }
}
