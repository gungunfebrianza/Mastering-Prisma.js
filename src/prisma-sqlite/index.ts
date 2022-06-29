import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const resultCreateAdmin = await prisma.user.create({
    data: {
      email: "gungunfebrianza@gmail.com",
      name: "Gun Gun Febrianza",
    },
  });
  const allUsers = await prisma.user.findMany();
  // use `console.dir` to print nested objects
  console.dir(allUsers, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
