const getUser = await prisma.user.findMany({
  where: {
    id: { notIn: [22, 91, 14, 2, 5] },
  },
});
