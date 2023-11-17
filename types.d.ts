import { Dispatch, SetStateAction } from "react";
export interface Post {
  photos: string[];
  _id: string;
  name: string;
  prompt: string;
  photo: string;
  profilePhoto: string;
  __v: number;
}

export interface Iform {
  name: string;
  prompt: string;
  subject: string;
  description: string;
  style: string;
  graphics: string;
  quality: string;
  photo: string;
  photos: string[];
  numberOfImages: number;
}

export interface FormProps {
  form: Iform;
  setForm: Dispatch<SetStateAction<Iform>>;
  generateImage: () => void;
  handleShareImageSubmission: () => void;
  isImageGenerating: boolean;
  isSharingImage: boolean;
}

export interface ImageCardProps {
  post: Post;
  setOpenImageId: Dispatch<SetStateAction<string | null>>;
}

export interface ModalProps {
  post: Post;
  setOpenImageId: Dispatch<SetStateAction<string | null>>;
}

export interface SelectProps {
  label: string;
  options: string[];
  name: keyof Iform;
  form: Iform;
  setForm: React.Dispatch<SetStateAction<Iform>>;
}
