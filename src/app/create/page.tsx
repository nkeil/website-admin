import CenterNav from "@/components/centerNav";
import CreatePostForm from "@/components/createPostForm";
import { prisma } from "../../../prisma/db";

export default async function Page() {
  const users = await prisma.author.findMany({
    select: { firstName: true, id: true },
  });

  async function handleSubmit(form: FormData) {
    "use server";

    // for (const formInput of form.keys()) {
    //   console.log(formInput);
    // }
    const authorId = form.get("authorId");
    const title = form.get("title");
    const metaTitle = form.get("metaTitle");
    const slug = form.get("slug");
    const description = form.get("description");
    const content = form.get("content");

    if (
      authorId === null ||
      title === null ||
      metaTitle === null ||
      slug === null ||
      description === null ||
      content === null
    ) {
      console.error("could not find all form values!");
      return;
    }

    console.log("success");
    console.log(authorId);

    await prisma.post.create({
      data: {
        author: { connect: { id: authorId as string } },
        title: title as string,
        metaTitle: metaTitle as string,
        slug: slug as string,
        description: description as string,
        content: content as string,
        isPublished: false,
      },
    });
  }

  return (
    <main className="h-full w-full bg-purple-50 p-24">
      <CenterNav links={[{ text: "Back", href: "/" }]} />
      <div className="text-3xl">Create Post</div>

      <div className="w-full">
        <div className="m-auto w-min">
          <CreatePostForm handleSubmit={handleSubmit} users={users} />
        </div>
      </div>
    </main>
  );
}
