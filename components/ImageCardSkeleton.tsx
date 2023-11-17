const ImageCardSkeleton = () => {
  return (
    <div className="bg-white border rounded-t-lg  w-full min-w-max">
      <div className="flex items-center space-x-1 border-b ">
        <div className="flex items-center space-x-1 p-2">
          <div className="h-3 w-3 rounded-full bg-gray-500 animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500 animate-pulse"></div>
          <div className="h-3 w-3 rounded-full bg-gray-500 animate-pulse"></div>
        </div>
        <div className="flex items-center px-2 py-2.5 rounded-tl-sm rounded-bl-sm border border-t-0  w-full border-b-0 ">
          <div className="w-3 h-3 rounded-full bg-gray-500 animate-pulse"></div>
          <p className="text-xs  text-center text-zinc-800 w-44 py-2 animate-pulse bg-gray-500 mx-2"></p>
          <div className="w-3 h-3 rounded-full bg-gray-500 animate-pulse"></div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gray-500 animate-pulse w-full h-auto rounded-b-sm min-w-md aspect-square"></div>
      </div>
    </div>
  );
};
export default ImageCardSkeleton;
