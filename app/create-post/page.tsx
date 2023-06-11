'use client'
import { Form } from "@/components"
import { Iform } from "@/types";
import Image from "next/image"
import React, { useState } from "react"


const CreatePost = () => {
    const [isImageGenerating, setIsImageGenerating] = useState(false);
    const [isSharingImage, setIsSharingImage] = useState(false);
    const [form, setForm] = useState<Iform>({
        name: "@iamsidar07",
        prompt: "",
        photo: "",
        photos: [],
        numberOfImages: 1,
        subject: "",
        description: "",
        style: "modern",
        graphics: "Unreal engine",
        quality: "8k",
    })

    const generateImage = async () => {
        if (form.subject && form.description && form.style && form.graphics && form.quality) {
            setIsImageGenerating(true);
            try {
                const response = await fetch("/api/dalle", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                const data = await response.json();
                setForm({ ...form, prompt: `${data.prompt}`, photo: `data:image/jpeg;base64,${data.photo}`, photos: data.photos.map((item: string) => `data:image/jpeg;base64,${item}`) });

            } catch (error) {
                alert('error');
                console.error(error);
            } finally {
                setIsImageGenerating(false);
            }
        } else {
            alert("Please enter a subject, description, style, graphics, and quality.");
        }
    }
    

    const handleShareImageSubmission = async () => {
        if (form.photo && form.prompt) {
            setIsSharingImage(true);
            try {
                const response = await fetch("/api/post", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                })
                await response.json();
            } catch (error) {
                alert(error)
            } finally {
                setIsSharingImage(false);
                alert("Shared successfully with world.")
            }

        } else {
            alert("Please enter a prompt and generate image and start sharing.");
        }
    }
    return (
        <div className=' w-full md:fixed top-[58px] bottom-5 h-full flex flex-col md:flex-row max-w-7xl mx-auto'>
            <div className='w-full md:w-96 h-full border-b md:border-r pt-4 md:overflow-y-auto pb-[20%] custom-scroll-bar bg-white/70 shadow-sm px-4 md:px-6'>
                <Form form={form} generateImage={generateImage} handleShareImageSubmission={handleShareImageSubmission}
                    setForm={setForm} isImageGenerating={isImageGenerating} isSharingImage={isSharingImage} />
            </div>
            <div className='flex-1 bg-white/20 backdrop-blur overflow-y-auto   remove-scroll-bar '>
                <div className={`flex flex-wrap justify-center w-full h-full  gap-2 p-2 pb-[100%] ${isImageGenerating && 'animate-pulse'}`}>
                    {
                        form.photos.length !== 0 && form.photos.map((imgSrc, i) => (<Image key={i} src={imgSrc} height={300} width={300} alt={form.prompt} className='object-contain' />))
                    }

                    {
                        isImageGenerating && Array(form.numberOfImages).fill(0).map((_, i) => (<div key={i} className={`w-80 h-80 bg-gray-500 border border-gray-200`}>
                        </div>))
                    }
                </div>
            </div>
        </div>
    )
}

export default CreatePost