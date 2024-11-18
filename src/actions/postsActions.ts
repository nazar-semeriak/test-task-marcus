import posts from "@/data/posts.json";

export const getPosts = async () => {
  //request imitation
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return posts;
};

export const getPost = async (slug: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = posts.find((item) => item.slug == slug);
  return res;
};
