import PostSchema from '@/models/Post';
import { Iform } from '@/types';
import { connectToDatabase } from '@/utils/database';
import cld from 'cloudinary';

const cloudinary = cld.v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRETE_KEY
});

export const GET = async () => {
    try {
        await connectToDatabase();
        const posts = await PostSchema.find({});
        return new Response(JSON.stringify(posts), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to fetch posts', { status: 500 });
    }
}

const getRandomNumber = () => Math.ceil(Math.random() * 11);

export const POST = async (req: Request) => {
    const form:Iform = await req.json();
    const randomId = getRandomNumber();
    const profilePhoto = `https://api.multiavatar.com/${randomId}.png`;
    try {
        await connectToDatabase();
        const photoUploadPromises = form.photos.map(async (element: string) => {
            const photoUrl = await cloudinary.uploader.upload(element);
            return photoUrl.url;
        });
        const photosUrl = await Promise.all(photoUploadPromises);
        const image = await cloudinary.uploader.upload(form.photo);
        const newPost = await PostSchema.create({
            name:form.name,
            prompt:form.prompt,
            photo: image.url,
            photos: photosUrl,
            profilePhoto: profilePhoto,
            numberOfImages: form.numberOfImages
        });
        return new Response(JSON.stringify(newPost), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response('Failed to share post', { status: 500 });
    }
}