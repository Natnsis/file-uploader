import express, { Request, Response } from 'express';
import multer from 'multer';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { v2 as cloudinary } from 'cloudinary';
import streamifier from 'streamifier';

dotenv.config();

const prisma = new PrismaClient();

// Upload image buffer to Cloudinary
const uploadImage = (fileBuffer: Buffer): Promise<any> => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: 'uploads' }, // optional folder
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );
    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

// Controller
export const UploadImage = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result: any = await uploadImage(req.file.buffer);

    // Save to database
    const image = await prisma.file.create({
      data: {
        url: result.secure_url,
        name,
      },
    });

    res.json({
      message: 'Upload successful',
      image,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Upload failed', error });
  }
};
