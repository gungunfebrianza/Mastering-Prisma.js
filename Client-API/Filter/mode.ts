const result = await prisma.post.findMany({
  where: {
    title: {
      contains: "prisma",
      mode: "insensitive",
    },
  },
});
