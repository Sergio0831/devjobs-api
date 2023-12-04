import { Prisma, PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome </>👨🏻‍💻👨🏻‍💻👨🏻‍💻💻💻💻</>',
  });
});

app.get('/jobs', async (req: Request, res: Response) => {
  const jobs = await prisma.job.findMany();
  res.json(jobs);
});

export default app;
