import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //CREATE SINGLE RECORD
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "gungunfebrianza@prisma.io",
  //       name: "Gun Gun Febrianza",
  //     },
  //   });

  //CREATE MULTIPLE RECORD
  //   const createMany = await prisma.user.createMany({
  //     data: [
  //       { name: "Gun", email: "gun@prisma.io" },
  //       { name: "Maudy", email: "maudy@prisma.io" }, // Duplicate unique key!
  //       { name: "KodokGempal", email: "KodokGempal@prisma.io" },
  //       { name: "KodokZuma", email: "KodokZuma@prisma.io" },
  //     ],
  //     skipDuplicates: true,
  //   });

  //FIND ALL USER
  const listUsers = await prisma.user.findMany();
  console.dir(listUsers, { depth: null });
  //FIND ALL USER USING INCLUDE PROFILE
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  //console.dir(allUsers, { depth: null });
  //FIND SPECIFIC USER
  //   let resultFindByEmail = await prisma.user
  //     .findUnique({
  //       where: { email: "gungunfebrianza@prisma.io" },
  //     })
  //     .catch((error) => console.log(error));
  //console.dir(resultFindByEmail);
  // Run inside `async` function
  //Update Single Record
  //   const post = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { profileViews: 100 },
  //   });
  //   console.dir(post);
  //DELETE SINGLE RECORD
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       email: "gungunfebrianza@prisma.io",
  //     },
  //   });
  //console.dir(listUsers, { depth: null });
  //DELETE MULTIPLE RECORD
  //   const deleteUsers = await prisma.user.deleteMany({
  //     where: {
  //       email: {
  //         contains: "prisma.io",
  //       },
  //     },
  //   });
  //DELETE ALL RECORD
  //const deleteUsers = await prisma.user.deleteMany({});
  // CASCADING DELETE
  //   const deletePosts = prisma.post.deleteMany({
  //     where: {
  //       authorId: 7,
  //     },
  //   });

  //   const deleteUser = prisma.user.delete({
  //     where: {
  //       id: 7,
  //     },
  //   });
  //TRANSACTION
  const transaction = await prisma.$transaction([deletePosts, deleteUser]);
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
