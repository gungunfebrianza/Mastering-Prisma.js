const result = await prisma.user.findMany({
  where: {
    name: {
      not: "Gun Gun Febrianza",
    },
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
    NOT: {
      title: {
        contains: "SQL",
      },
    },
  },
});
