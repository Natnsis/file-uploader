import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import uploader from './routes/uploader.route';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

//routes
app.use('/', uploader);

// Health check
app.get('/', (_req: Request, res: Response) => {
  res
    .status(200)
    .json({ message: '✅ Server running with TypeScript + Prisma!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
