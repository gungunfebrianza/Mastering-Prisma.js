
generator client {
  provider        = "prisma-client-js"
  previewFeatures = ["fullTextSearch"]
}

const result = await prisma.post.findMany({
  where: {
    title: {
      search: "cat & dog",
    },
  },
});

const result = await prisma.post.findMany({
  where: {
    title: {
      search: "cat | dog",
    },
  },
});

const result = await prisma.post.findMany({
  where: {
    title: {
      search: '!cat',
    },
  },
})