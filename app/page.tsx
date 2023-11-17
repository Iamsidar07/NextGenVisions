"use client";
import { ImageCard, ImageCardSkeleton, Modal } from "@/components";
import { Post } from "@/types";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openImageId, setOpenImageId] = useState<string | null>(null);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [error, setError] = useState<null | string>(null);

  const Posts = ({ data }: { data: Post[] }) => {
    return data.map((post, i) =>
      openImageId === post._id ? (
        <Modal key={i} post={post} setOpenImageId={setOpenImageId} />
      ) : (
        <ImageCard key={i} post={post} setOpenImageId={setOpenImageId} />
      ),
    );
  };

  //fetch all posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/post");
        const data = await res.json();
        setPosts(data.reverse());
      } catch (error: any) {
        toast.error("Somthing went wrong!");
        console.log(error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    const searchValLowerCase = e.target.value.toLowerCase();
    setTimeout(() => {
      const searchPosts = posts.filter(
        (item) =>
          item.prompt.toLowerCase().includes(searchValLowerCase) ||
          item.name.toLowerCase().includes(searchValLowerCase),
      );
      setSearchResults(searchPosts);
    }, 300);
  };

  return (
    <section className="w-full flex-col flex items-center mt-12 mb-40 ">
      <h1 className="text-6xl sm:text-8xl font-extrabold text-center">
        <span>Imagine.</span>
        <br className="sm:hidden" />
        <span>Generate.</span>
        <br className="sm:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          Share.
        </span>
      </h1>
      <p className="text-center max-w-sm md:max-w-lg mt-4">
        NexGenVisions: Ignite creativity, redefine limits, create wonders. Fuel
        innovation, explore possibilities, illuminate with your creations.
      </p>
      <input
        placeholder="Search for images..."
        className="my-2 pl-4 py-2.5 md:py-3 rounded-sm border text-sm outline-none border-gray-300 w-full max-w-xs mb-6"
        type="text"
        value={searchInputValue}
        onChange={handleSearchChange}
      />
      {error ? (
        <div className="mt-12 text-center font-semibold">
          Something went wrong! {error}
        </div>
      ) : null}

      <div className="grid grid-cols-1 w-full lg:grid-cols-2 2xl:grid-cols-3 7xl:flex 7xl:flex-wrap gap-2">
        <Posts data={searchInputValue ? searchResults : posts} />
      </div>
      <div className="grid grid-cols-1 w-full lg:grid-cols-2 2xl:grid-cols-3 7xl:flex 7xl:flex-wrap gap-2">
        {isLoading &&
          Array(9)
            .fill(0)
            .map((_, i) => <ImageCardSkeleton key={i} />)}
      </div>
    </section>
  );
}
