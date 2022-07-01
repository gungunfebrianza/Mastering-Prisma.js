import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // CREATE SINGLE RECORD
  //   const user = await prisma.user.create({
  //     data: {
  //       email: "gungunfebrianza@cryptolibertarian.id",
  //       name: "Gun Gun Febrianza",
  //     },
  //   });
  // CREATE MULTIPLE RECORD
  //   const createMany = await prisma.user.createMany({
  //     data: [
  //       { name: "Gun", email: "gun@cryptolibertarian.id" },
  //       {
  //         name: "Gun Gun Febrianza",
  //         email: "gungunfebrianza@cryptolibertarian.id",
  //       }, // Duplicate unique key!
  //       { name: "Maudy", email: "maudy@cryptolibertarian.id" },
  //       { name: "KodokGempal", email: "KodokGempal@cryptolibertarian.id" },
  //       { name: "KodokZuma", email: "KodokZuma@cryptolibertarian.id" },
  //     ],
  //     skipDuplicates: true,
  //   });
  // FIND ALL USER
  //   const listUsers = await prisma.user.findMany();
  //   console.dir(listUsers, { depth: null });
  //   //FIND ALL USER USING INCLUDE PROFILE
  //   const allUsers = await prisma.user.findMany({
  //     include: {
  //       posts: true,
  //       profile: true,
  //     },
  //   });
  // console.dir(allUsers, { depth: null });
  // FIND SPECIFIC USER
  //   let resultFindByEmail = await prisma.user
  //     .findUnique({
  //       where: { email: "gungunfebrianza@cryptolibertarian.id" },
  //     })
  //     .catch((error) => console.log(error));
  //   console.dir(resultFindByEmail);
  // FIND BY SPECIFIC CRITERIA
  //   const findFirstUser = await prisma.user.findFirst({
  //     where: {
  //       posts: {
  //         some: {
  //           likes: {
  //             gt: 100,
  //           },
  //         },
  //       },
  //     },
  //     orderBy: {
  //       id: "desc",
  //     },
  //   });
  //   console.dir(findFirstUser);
  // GET FILTERED LIST OF RECORDS
  //   const filteredUsers = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: "cryptolibertarian.id",
  //       },
  //     },
  //   });
  //   console.dir(filteredUsers);
  // GET BY MULTIPLE FIELD VALUES
  //   const users = await prisma.user.findMany({
  //     where: {
  //       OR: [
  //         {
  //           name: {
  //             startsWith: "G",
  //           },
  //         },
  //         {
  //           AND: {
  //             profileViews: {
  //               gt: 0,
  //             },
  //             role: {
  //               equals: "USER",
  //             },
  //           },
  //         },
  //       ],
  //     },
  //   });
  //   console.dir(users);
  // GET BY FILTERED RELATED RECORD OF FIELD VALUES
  //   const users = await prisma.user.findMany({
  //     where: {
  //       email: {
  //         endsWith: "cryptolibertarian.id",
  //       },
  //       posts: {
  //         some: {
  //           published: true,
  //         },
  //       },
  //     },
  //   });
  //   console.dir(users);
  // SELECT BY SUBSET OF FIELDS
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email: "gun@cryptolibertarian.id",
  //     },
  //     select: {
  //       email: true,
  //       profile: true,
  //     },
  //   });
  //   console.dir(user);
  // SELECT A SUBSET OF RELATED RECORD FIELDS
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       email: "gun@cryptolibertarian.id",
  //     },
  //     select: {
  //       email: true,
  //       posts: {
  //         select: {
  //           likes: true,
  //         },
  //       },
  //     },
  //   });
  //   console.dir(user);
  // READ RELATED RECORD
  //   const users = await prisma.user.findMany({
  //     where: {
  //       role: "USER",
  //     },
  //     include: {
  //       posts: true,
  //     },
  //   });
  //   console.dir(users);
  // Run inside `async` function
  // UPDATE SINGLE RECORD
  //   const post = await prisma.user.update({
  //     where: { id: 1 },
  //     data: { profileViews: 100 },
  //   });
  //   console.dir(post);
  // UPDATE MULTIPLE RECORD
  //   const updateUsers = await prisma.user.updateMany({
  //     where: {
  //       email: {
  //         contains: "prisma.io",
  //       },
  //     },
  //     data: {
  //       role: "ADMIN",
  //     },
  //   });
  // UPSERT (UPDATE OR INSERT
  //   const upsertUser = await prisma.user.upsert({
  //     where: {
  //       email: "viola@prisma.io",
  //     },
  //     update: {
  //       name: "Viola the Magnificent",
  //     },
  //     create: {
  //       email: "viola@prisma.io",
  //       name: "Viola the Magnificent",
  //     },
  //   });
  // UPDATE NUMBER FIELDS
  //   const updatePosts = await prisma.post.updateMany({
  //     data: {
  //       views: {
  //         increment: 1,
  //       },
  //       likes: {
  //         increment: 1,
  //       },
  //     },
  //   });
  // DELETE SINGLE RECORD
  //   const deleteUser = await prisma.user.delete({
  //     where: {
  //       email: "gungunfebrianza@prisma.io",
  //     },
  //   });
  // console.dir(listUsers, { depth: null });
  // DELETE MULTIPLE RECORD
  //   const deleteUsers = await prisma.user.deleteMany({
  //     where: {
  //       email: {
  //         contains: "prisma.io",
  //       },
  //     },
  //   });
  // DELETE ALL RECORD
  // const deleteUsers = await prisma.user.deleteMany({});
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
  // TRANSACTION
  //   const transaction = await prisma.$transaction([deletePosts, deleteUser]);
}

main()
  .catch((error) => {
    console.log(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
