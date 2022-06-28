const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      lte: 9,
    },
  },
});
