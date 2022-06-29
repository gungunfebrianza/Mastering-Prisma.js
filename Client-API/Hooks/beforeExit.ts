const prisma = new PrismaClient();

prisma.$on("beforeExit", async () => {
  console.log("beforeExit hook");
  // PrismaClient still available
  await prisma.message.create({
    data: {
      message: "Shutting down server",
    },
  });
});
