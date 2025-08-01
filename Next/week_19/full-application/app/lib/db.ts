import { PrismaClient } from "@prisma/client";

// @ts-ignore
const prisma = globalThis.prisma ?? new PrismaClient()


if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
export default prisma
