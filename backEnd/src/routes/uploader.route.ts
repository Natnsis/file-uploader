import express from 'express';
import { UploadImage } from '../controllers/uploader.controller';
import multer from 'multer';

const router = express.Router();

// Multer setup
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.single('image'), UploadImage);

export default router;
