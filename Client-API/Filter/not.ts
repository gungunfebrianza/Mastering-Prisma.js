const result = await prisma.user.findMany({
  where: {
    name: {
      not: "Gun Gun Febrianza",
    },
  },
});
