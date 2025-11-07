// apps/api/prisma/seed.ts
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  // Clear existing data
  await prisma.lesson.deleteMany();
  await prisma.user.deleteMany();
  // Create users
  const admin = await prisma.user.create({
    data: {
      id: "firebase-uid-admin",
      email: "admin@synth-tree.com",
      name: "Admin User",
      role: "ADMIN",
    },
  });
  // Create lessons, trees, etc.
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());

// Add to package.json:

/*"prisma": {
  "seed": "ts-node prisma/seed.ts"
}*/