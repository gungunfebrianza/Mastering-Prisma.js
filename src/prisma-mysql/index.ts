import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "gungunfebrianza@prisma.io",
  //       name: "Gun Gun Febrianza",
  //     },
  //   });
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  console.dir(allUsers, { depth: null });
  let resultFindByEmail = await prisma.user
    .findUnique({
      where: { email: "gungunfebrianza@prisma.io" },
    })
    .catch((error) => console.log(error));
  console.dir(resultFindByEmail);
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
