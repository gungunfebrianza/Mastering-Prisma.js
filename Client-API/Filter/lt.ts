const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      lt: 9,
    },
  },
});
