import { Post } from "@/types"
import Image from "next/image"
import Link from "next/link";

interface ImageCardProps {
    post:Post;
    setOpenImageId: React.Dispatch<React.SetStateAction<string | null>>;
}

const ImageCard = ({ post, setOpenImageId }: ImageCardProps) => {

    return (
        <div onClick={()=>setOpenImageId(post._id)} className='bg-white border rounded-t-lg  w-full cursor-pointer'>
            <div className='flex items-center space-x-1 border-b '>
                <div className='flex items-center space-x-1 p-2'>
                    <div className='h-3 w-3 rounded-full bg-[#ff5f56]'></div>
                    <div className='h-3 w-3 rounded-full bg-[#ffbd2e]'></div>
                    <div className='h-3 w-3 rounded-full bg-[#27c93f]'></div>
                </div>
                <div className='flex items-center px-2 py-2.5 rounded-tl-sm rounded-bl-sm border border-t-0  w-full border-b-0 '>
                    <Image
                        src={'/assets/icons/lock.svg'}
                        width={15}
                        height={15}
                        alt='locked'
                        className='object-contain'
                    />
                    <p className='text-xs flex-1 text-center text-zinc-800 truncate'>https://{post.prompt.slice(0,8).replaceAll(' ','').toLowerCase()}.com</p>
                    <Image
                        src={'/assets/icons/refresh.svg'}
                        width={10}
                        height={10}
                        alt='refresh'
                        className='object-contain rotate-90 '
                    />
                </div>
            </div>
            <div className='relative'>
                <Image
                    src={post.photo}
                    width={1024}
                    height={1024}
                    quality={100}
                    alt={post.prompt}
                    className='object-contain w-full h-auto rounded-b-sm min-w-full aspect-square'
                />
            </div>

        </div>
    )
}

export default ImageCard