import { S3Client, ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import dotenv from "dotenv";

dotenv.config();

// Clean credentials by removing any quotes or trailing semicolons
const cleanKey = (key: string | undefined): string => {
  if (!key) return '';
  // Remove quotes and semicolons that might be in the env var
  return key.replace(/["';]/g, '').trim();
};

const accessKeyId = cleanKey(process.env.AWS_ACCESS_KEY_ID);
const secretAccessKey = cleanKey(process.env.AWS_SECRET_ACCESS_KEY);
const region = process.env.AWS_REGION || 'us-east-1';

// For debugging
console.log('Using AWS region:', region);
console.log('Access key ID (first 5 chars):', accessKeyId.substring(0, 5) + '...');

const s3 = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME!;

export async function ensureS3FolderExists(folderName: string): Promise<void> {
  try {
    const listParams = {
      Bucket: BUCKET_NAME,
      Prefix: `${folderName}/`,
      MaxKeys: 1
    };

    const data = await s3.send(new ListObjectsV2Command(listParams));

    if (!data.Contents || data.Contents.length === 0) {
      const createParams = {
        Bucket: BUCKET_NAME,
        Key: `${folderName}/`,
        Body: ""
      };
      await s3.send(new PutObjectCommand(createParams));
      console.log(`Created S3 folder: ${folderName}/`);
    } else {
      console.log(`S3 folder already exists: ${folderName}/`);
    }
  } catch (error) {
    console.error("Error ensuring S3 folder exists:", error);
    throw error;
  }
}

export async function uploadToS3(
  buffer: Buffer,
  fileName: string,
  contentType: string,
  folder: 'faculty' | 'events' | 'news'
): Promise<{ key: string; url: string }> {
  try {
    await ensureS3FolderExists(folder);

    const key = `${folder}/${fileName}`;

    const upload = new Upload({
      client: s3,
      params: {
        Bucket: BUCKET_NAME,
        Key: key,
        Body: buffer,
        ContentType: contentType,
        ACL: 'public-read'
      }
    });

    const data = await upload.done();

    return {
      key,
      url: `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`
    };
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
}

export async function deleteFromS3(key: string): Promise<void> {
  try {
    await s3.send(new DeleteObjectCommand({
      Bucket: BUCKET_NAME,
      Key: key
    }));
    console.log(`Deleted file from S3: ${key}`);
  } catch (error) {
    console.error("Error deleting from S3:", error);
    throw error;
  }
}

export function getS3PublicUrl(key: string): string {
  return `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
}
