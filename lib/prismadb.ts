import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient() // to prevent Next.js 13 hot reload issues
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client
