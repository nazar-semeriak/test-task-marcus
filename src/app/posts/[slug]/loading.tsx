export default function Loading() {
  return (
    <div className="mt-6 flex gap-6 lg:gap-10 flex-col lg:flex-row">
      <div className="aspect-video w-full lg:w-[40%] h-fit bg-gray-300 animate-pulse" />
      <div className="flex-1">
        <div className="flex flex-col gap-2 items-end">
          <div className="w-24 h-6 rounded-md bg-gray-300 animate-pulse" />
          <div className="w-1/3 h-6 rounded-md bg-gray-300 animate-pulse" />
        </div>
        <div className="w-[80%] h-6 mb-4 rounded-md bg-gray-300  animate-pulse mt-4" />
        <div className="flex gap-2">
          <div className="w-28 h-6 mb-4 rounded-md bg-gray-300  animate-pulse" />
          <div className="w-24 h-6 mb-4 rounded-md bg-gray-300  animate-pulse" />
        </div>
        <div className="w-full h-24 rounded-md bg-gray-300  animate-pulse" />
      </div>
    </div>
  );
}
