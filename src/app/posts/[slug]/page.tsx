import { getPost } from "@/actions/postsActions";
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post)
    return (
      <h3 className="text-center text-2xl font-medium">404. Post not found</h3>
    );
  return (
    <main>
      <Link href="/posts">
        <button className="flex gap-1.5 items-center">
          <Image width={14} height={14} src="/arrow.svg" alt="arrow" />
          <p className="font-medium">All Posts</p>
        </button>
      </Link>
      <div className="mt-6 flex gap-6 lg:gap-10 flex-col lg:flex-row">
        <Image
          className="aspect-video w-full lg:w-[40%] h-fit"
          src={post?.img}
          width={500}
          height={500}
          alt="post_image"
        />
        <div className="flex-1">
          <p className="text-sm text-right">{post.author}</p>
          <p className="text-sm text-right">
            Published: {new Date(post.date).toDateString()}
          </p>
          <h2 className="text-2xl font-medium text-gray-800 mb-4 mt-2">
            {post?.title}
          </h2>
          <div className="flex gap-2 flex-wrap mb-4">
            {post.tags.map((tag, index) => (
              <div
                key={index}
                className="text-sm bg-gray-300 text-gray-600 font-medium px-2 py-0.5 cursor-default"
              >
                {tag}
              </div>
            ))}
          </div>
          <p>{post.content}</p>
        </div>
      </div>
    </main>
  );
}
