import FileSaver from 'file-saver';

export const copyToClipboard = (content: string) => {
    navigator.clipboard.writeText(content);
    alert("Copied to clipboard!");
}
export const downloadImage = (_id:string,photo:string)=>{
    FileSaver.saveAs(photo,`download-${_id}.jpg`);
    alert('Photo saved successfull.');
}

