"use client";

import { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  currentImage?: string;
  onImageUpload: (imageUrl: string) => void;
  folder: 'news' | 'faculty';
  className?: string;
}

export default function ImageUpload({ 
  currentImage, 
  onImageUpload, 
  folder, 
  className = '' 
}: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check file type
    const fileType = file.type;
    if (!['image/jpeg', 'image/jpg', 'image/png'].includes(fileType)) {
      setError('Only JPG, JPEG, and PNG files are allowed');
      return;
    }
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError('File size should be less than 2MB');
      return;
    }
    
    // Create temporary preview
    setPreview(URL.createObjectURL(file));
    setError(null);
    setUploading(true);
    
    // Create form data for upload
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', folder);
    
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Upload failed');
      }
      
      const data = await response.json();
      onImageUpload(data.filePath);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to upload image');
      // Revert preview to original if upload fails
      setPreview(currentImage || null);
    } finally {
      setUploading(false);
    }
  };
  
  return (
    <div className={`${className} flex flex-col items-center`}>
      <div className="mb-4 relative">
        {preview ? (
          <div className="relative h-40 w-40 rounded-lg overflow-hidden border border-gray-300">
            {preview.startsWith('blob:') ? (
              // For blob URLs during preview, use Next.js Image component
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              // For server paths, use Next.js Image component
              <Image 
                src={preview.startsWith('/') ? preview : `/${preview}`}
                alt="Preview" 
                fill
                className="object-cover"
              />
            )}
          </div>
        ) : (
          <div className="h-40 w-40 rounded-lg bg-gray-200 flex items-center justify-center border border-gray-300">
            <span className="text-gray-500">No image</span>
          </div>
        )}
        
        {uploading && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
          </div>
        )}
      </div>
      
      <label className="cursor-pointer px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded transition flex items-center justify-center border border-blue-700 shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        {currentImage ? 'Change Image' : 'Upload Image'}
        <input 
          type="file" 
          accept=".jpg,.jpeg,.png" 
          className="hidden" 
          onChange={handleFileChange}
          disabled={uploading}
        />
      </label>
      
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}
