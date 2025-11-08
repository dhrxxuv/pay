import { prisma } from "@repo/database";

export default async function Home() {
  const count = await prisma.user.count();
    return <div>user count {count}</div>;
  
}