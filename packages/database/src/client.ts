import { PrismaClient } from "@prisma/client";

export const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export * from "@prisma/client";

// some random change
// some random change v2
// some random change v23
// some random update v4
console.log('// some random update v4');
// some random update v5
console.log('// some random update v4');
