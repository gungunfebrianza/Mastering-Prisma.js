const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      gt: 9,
    },
  },
});
