const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
  },
});

const result = await prisma.post.findMany({
  where: {
    OR: [
      {
        title: {
          contains: "Prisma",
        },
      },
      {
        title: {
          contains: "databases",
        },
      },
    ],
    AND: {
      published: false,
    },
  },
});
