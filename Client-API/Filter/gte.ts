const getPosts = await prisma.post.findMany({
  where: {
    likes: {
      gte: 9,
    },
  },
});

const result = await prisma.post.findMany({
  where: {
    date_created: {
      gte: new Date(
        "2020-03-19T14:21:00+0200"
      ) /* Includes time offset for UTC */,
    },
  },
});
