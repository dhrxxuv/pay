import { PrismaClient } from "../generated/client/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const alicePassword = await bcrypt.hash("alice", 10);
  const bobPassword = await bcrypt.hash("bob", 10);

  const alice = await prisma.user.upsert({
    where: { number: "9999999999" },
    update: {},
    create: {
      number: "9999999999",
      password: alicePassword, // ✅ hashed
      name: "alice",
      age: "25",
      email: "alice@example.com",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
      Balance: {
        create: {
          amount: 20000,
          locked: 0,
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { number: "9999999998" },
    update: {},
    create: {
      number: "9999999998",
      password: bobPassword, // ✅ hashed
      name: "bob",
      age: "25",
      email: "bob@example.com",
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
      Balance: {
        create: {
          amount: 5000,
          locked: 1000,
        },
      },
    },
  });

  console.log("✅ Seeded users with hashed passwords:", { alice, bob });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌ Error seeding DB:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
