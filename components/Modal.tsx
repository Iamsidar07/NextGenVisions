'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FiCopy, FiLink } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';
import { copyToClipboard, downloadImage } from '../utils';
import { Post } from '@/types';

interface ModalProps {
    post: Post;
    setOpenImageId: React.Dispatch<React.SetStateAction<string | null>>;
}
const Modal = ({ post, setOpenImageId, }: ModalProps) => {

    const { _id, prompt, photo, profilePhoto, name, photos } = post;
    const [imageSrc, setImageSrc] = useState(photo);
    return (
        <div className=' overflow-hidden fixed flex  items-end md:items-center justify-center top-0 bottom-0 left-0 right-0 inset-0 bg-black/80 z-20 p-2'>

            <div className="w-5 h-5 rounded gradientbg1 absolute top-1 left-1 m-2  items-center justify-center cursor-pointer z-50 flex" onClick={() => setOpenImageId(null)}>
                <RxCross1 size={24} className='text-4xl font-bold text-white' />
            </div>


            <div className="max-w-4xl  md:m-auto  h-fit max-h-[calc(100vh_-_4rem)] flex flex-col-reverse sm:flex-row  justify-center gradientbg  md:p-2  sm:rounded gap-0 sm:gap-4 bg-white shadow rounded-xl overflow-auto md:overflow-hidden">
                <div className='w-full py-5 sm:py-0 md:max-w-sm mb-[100%] md:mb-0 '>
                    <div className='px-2'>
                        <div className="gradientbg1 rounded sm:rounded p-2 md:p-4 shadow-sm border   ">

                            <p className='text-sm prompt mb-3 '>
                                {prompt}
                            </p>
                            <div className="flex items-center gap-1">
                                <div className='rounded px-3 py-1.5   border text-black w-fit cursor-pointer hover:text-white hover:bg-black transition-all duration-150 ease-linear flex items-center' onClick={() => copyToClipboard(prompt)}>
                                    <FiCopy size={16} className='mr-1' />
                                    <p className='text-xs hidden md:inline-block'> Copy prompt</p>
                                </div>
                                <div className='rounded px-3 py-1.5   border text-black w-fit cursor-pointer hover:text-white hover:bg-black transition-all duration-150 ease-linear flex items-center ml-1' onClick={() => copyToClipboard(imageSrc)}>
                                    <FiLink size={16} className='mr-1' />
                                    <p className='text-xs hidden md:inline-block'> Copy Link</p>
                                </div>
                                <div className='rounded px-4 py-1.5 space-x-2  bg-black text-white hover:bg-white hover:text-black transition-all duration-150 ease-linear  w-fit cursor-pointer flex items-center border' onClick={() => downloadImage(_id, photo)}>
                                    <BsDownload size={16} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 p-1 mt-4">
                            <Image
                                src={profilePhoto}
                                width={10}
                                height={10}
                                className={`h-10 w-10 object-contain rounded`}
                                alt={name}
                            />
                            <div>
                                <p className='font-bold'>{name}</p>
                                <p className='text-xs '>{_id}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center  w-full h-full rounded max-w-lg  shadow p-2 min-w-[390px]'>
                    <Image
                        src={imageSrc}
                        width={540}
                        height={540}
                        className={`max-h-96 md:h-auto w-full object-contain`}
                        alt={prompt}
                        placeholder='blur'
                        blurDataURL={imageSrc}
                    />
                    <div className='flex items-center justify-around space-x-2 my-2'>
                        {
                            photos?.length !== 0 && photos.map((image,i) => <Image
                                src={image}
                                width={50}
                                height={50}
                                className={`w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-150 ease-linear`}
                                alt={prompt}
                                key={i}
                                onClick={() => setImageSrc(image)}
                                placeholder='blur'
                                blurDataURL={image}
                            />)
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Modal
