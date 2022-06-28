const result = await prisma.user.findMany({
  where: {
    name: {
      equals: "Gun Gun Febrianza",
    },
  },
});
