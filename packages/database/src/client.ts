import { PrismaClient } from "@prisma/client";

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";

// some random change
// some randob change v2
