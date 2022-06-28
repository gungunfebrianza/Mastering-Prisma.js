const getUser = await prisma.user.findMany({
  where: {
    id: { in: [22, 91, 14, 2, 5] },
  },
});

const getUser = await prisma.user.findMany({
  where: {
    name: { in: ["Gun", "Ira", "Dimas"] },
  },
});

const getUser = await prisma.user.findMany({
  where: {
    NOT: {
      name: { in: ["Gun", "Ira", "Dimas"] },
    },
  },
});

const getUser = await prisma.user.findMany({
  where: {
    // Find users where..
    posts: {
      some: {
        // ..at least one (some) posts..
        categories: {
          some: {
            // .. have at least one category ..
            name: {
              in: ["Apple", "Windows"], // .. with a name that matches one of the following.
            },
          },
        },
      },
    },
  },
});
