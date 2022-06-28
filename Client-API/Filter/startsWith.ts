const result = await prisma.post.findMany({
  where: {
    title: {
      startsWith: "Pr",
    },
  },
});
