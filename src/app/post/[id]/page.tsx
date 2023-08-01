import CenterNav from "@/components/centerNav";
import { prisma } from "../../../../prisma/db";

export default async function Page({
  params,
}: {
  params: { id: string | undefined };
}) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    include: { author: true },
  });
  if (!post) return <div>Invalid id</div>;

  return (
    <main className="p-24">
      <CenterNav links={[{ text: "Back", href: "/" }]} />
      <div className="text-3xl">{post.title}</div>
      <div>
        {post.author.firstName} {post.author.lastName}
      </div>
      <div>{post.description}</div>
    </main>
  );
}
