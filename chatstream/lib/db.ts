import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

// globalThis: It is not affect by hot reload 
// And we don;t want to create a new prisma client when ever we make some new changes in out project
// That's why we are using globalThis
export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;