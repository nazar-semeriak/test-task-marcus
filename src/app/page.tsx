import Link from "next/link";

export default function Home() {
  return (
    <main className="h-full">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6 text-center">
        Welcome to Dev.Blog
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center">
        Here, you will find insightful articles on various topics. Dive into our
        latest posts and enjoy the content!
      </p>
      <div className="flex justify-center">
        <Link href="/posts">
          <button className="mx-auto px-4 py-2 bg-gray-600 rounded text-white">
            Check Out Our Posts
          </button>
        </Link>
      </div>
    </main>
  );
}
