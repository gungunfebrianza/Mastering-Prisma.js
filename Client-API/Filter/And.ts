const result = await prisma.post.findMany({
  where: {
    AND: [
      {
        content: {
          contains: "Prisma",
        },
      },
      {
        published: {
          equals: false,
        },
      },
    ],
  },
});
