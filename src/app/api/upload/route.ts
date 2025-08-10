import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

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
    const folder = formData.get('folder') as string; // 'news', 'faculty', etc.
    
    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    
    if (!folder || !['news', 'faculty'].includes(folder)) {
      return NextResponse.json({ error: 'Invalid folder specified' }, { status: 400 });
    }

    // Create a unique filename to avoid overwriting
    const fileExtension = path.extname(file.name).toLowerCase();
    
    // Check if file type is allowed (jpg, jpeg, png)
    if (!['.jpg', '.jpeg', '.png'].includes(fileExtension)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPG, JPEG, and PNG files are allowed.' },
        { status: 400 }
      );
    }
    
    // Create unique filename with original name + uuid + extension
    const originalNameWithoutExt = file.name.replace(fileExtension, '');
    const uniqueName = `${originalNameWithoutExt}-${uuidv4().substring(0, 8)}${fileExtension}`;
    
    // Ensure target directory exists
    const publicDir = path.join(process.cwd(), 'public');
    const targetDir = path.join(publicDir, folder);
    await ensureDir(targetDir);
    
    // Create full path for the file
    const filePath = path.join(targetDir, uniqueName);
    
    // Convert the file to buffer and save it
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    await writeFile(filePath, buffer);
    
    // File path to return (relative to public folder)
    const fileUrl = `/${folder}/${uniqueName}`;
    
    return NextResponse.json({ 
      success: true,
      filePath: fileUrl
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'File upload failed' },
      { status: 500 }
    );
  }
}
