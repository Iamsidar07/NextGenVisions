export interface Post {
    photos: string[];
    _id: string;
    name: string;
    prompt: string;
    photo: string;
    profilePhoto: string;
    __v: number
}

export interface Iform {
    name: string;
    prompt: string;
    subject:string;
    description:string;
    style:string;
    graphics:string;
    quality:string;
    photo: string;
    photos: string[];
    numberOfImages: number;
}