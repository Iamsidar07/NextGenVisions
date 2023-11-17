import FileSaver from "file-saver";
import { toast } from "react-hot-toast";

export const copyToClipboard = (content: string) => {
  navigator.clipboard.writeText(content);
  toast.success("Copied to clipboard!");
};
export const downloadImage = (_id: string, photo: string) => {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
  toast.success("Photo saved successfull.");
};
