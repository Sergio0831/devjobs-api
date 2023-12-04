import { PrismaClient, Prisma } from '@prisma/client';
const jobs = require('../data/devjobs.json');

const prisma = new PrismaClient();

async function main() {
  await prisma.job.createMany({
    data: jobs,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
