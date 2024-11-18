import { getPosts } from "@/actions/postsActions";
import Image from "next/image";
import Link from "next/link";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-3">
      {posts.map((item) => (
        <div
          key={item.id}
          className="w-full border border-gray-300 rounded-2xl text-gray-900 flex flex-col"
        >
          <div className="px-6 md:px-10 pt-6 md:pt-10 pb-4 flex-1 space-y-4">
            <Image
              src={item.img}
              width={500}
              height={500}
              className="w-full rounded-lg mb-4"
              alt="post_image"
            />
            <Link href={`posts/${item.slug}`} className="font-medium text-lg">
              {item.title}
            </Link>
            <p className="line-clamp-3 mb-4">{item.content}</p>

            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-sm bg-gray-300 text-gray-600 font-medium px-2 py-0.5 cursor-default"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-300 px-6 md:px-10 pb-6 md:pb-10 pt-4 flex flex-col items-end gap-1 text-sm text-gray-600">
            <p>{item.author}</p>
            <p>{new Date(item.date).toDateString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
