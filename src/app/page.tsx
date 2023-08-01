import CenterNav from "@/components/centerNav";
import { prisma } from "../../prisma/db";
import Link from "next/link";

export default async function Home() {
  const posts = await prisma.post.findMany();
  console.log(posts);

  return (
    <main className="w-full p-24">
      <CenterNav links={[{ text: "Create", href: "/create" }]} />
      <div className="text-3xl">Posts</div>
      <div className="mt-10 w-full">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="w-full bg-gray-100 p-5"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </main>
  );
}
