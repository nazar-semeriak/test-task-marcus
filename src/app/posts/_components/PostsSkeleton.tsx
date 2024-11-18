export const PostsSkeleton = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,_1fr))] gap-3">
      {Array(4)
        .fill(1)
        .map((_, index) => (
          <div key={index} className="w-full aspect-square p-6 md:p-10">
            <div className="w-full aspect-video rounded-md bg-gray-300  animate-pulse" />
            <div className="w-full h-6 my-4 rounded-md bg-gray-300  animate-pulse" />
            <div className="w-full h-12 mb-4 rounded-md bg-gray-300  animate-pulse" />
            <div className="w-24 h-6 mb-4 rounded-md bg-gray-300  animate-pulse" />
            <div className="flex items-end flex-col gap-2">
              <div className="w-24 h-6 rounded-md bg-gray-300  animate-pulse" />
              <div className="w-24 h-6 rounded-md bg-gray-300  animate-pulse" />
            </div>
          </div>
        ))}
    </div>
  );
};
