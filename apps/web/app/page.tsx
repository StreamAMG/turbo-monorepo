import { prisma } from "@repo/database";

// some random change
// some random change v2
// some random change v3
// some random update v4
console.log('// some random update v4');
export default async function IndexPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
