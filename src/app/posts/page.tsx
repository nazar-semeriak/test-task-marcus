import { Suspense } from "react";
import PostList from "./_components/PostList";
import { PostsSkeleton } from "./_components/PostsSkeleton";

export default function Posts() {
  return (
    <main>
      <h2 className="mb-5 text-lg sm:text-xl">
        Our latest news, updates, and stories for developers
      </h2>
      <Suspense fallback={<PostsSkeleton />}>
        <PostList />
      </Suspense>
    </main>
  );
}
