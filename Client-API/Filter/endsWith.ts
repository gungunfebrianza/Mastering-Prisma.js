const result = await prisma.user.findMany({
  where: {
    email: {
      endsWith: "prisma.io",
    },
  },
});
