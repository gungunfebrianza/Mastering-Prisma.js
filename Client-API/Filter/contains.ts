const result = await prisma.post.count({
  where: {
    content: {
      contains: "databases",
    },
  },
});

const result = await prisma.post.count({
  where: {
    NOT: {
      content: {
        contains: "databases",
      },
    },
  },
});
