//--------------------------- Connect

const prisma = new PrismaClient();

// run inside `async` function
await prisma.$connect();

//--------------------------- Disconnect

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const emailService = new EmailService();

async function main() {
  const allUsers = await prisma.user.findMany();
  const emails = allUsers.map((x) => x.email);

  await emailService.send(emails, "Hello!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
