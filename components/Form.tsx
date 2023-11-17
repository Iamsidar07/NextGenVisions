"use client";
import { FormProps } from "@/types";
import { useState, ChangeEvent } from "react";
import { BsImage, BsShare } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Select from "./Select";
import { FiCopy } from "react-icons/fi";
import { copyToClipboard } from "@/utils";

const Form = ({
  form,
  generateImage,
  handleShareImageSubmission,
  setForm,
  isSharingImage,
  isImageGenerating,
}: FormProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, numberOfImages: Number(e.target.value) });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleCopyToClipboard = () => {
    setIsCopied(true);
    copyToClipboard(form.prompt);
    setTimeout(() => setIsCopied(false), 5300);
  };

  return (
    <form className="relative px-2.5 flex flex-col space-y-2 ">
      <div className="flex flex-col space-y-1">
        <label>Subject</label>
        <input
          placeholder="A village"
          className="px-2 py-2.5 rounded shadow-sm border text-sm outline-none border-gray-300 w-full  pl-2 h-full"
          name="subject"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <label>Description</label>
        <input
          placeholder="on christmas covered with snow"
          className="px-2 py-2.5 rounded shadow-sm border text-sm outline-none border-gray-300 w-full  pl-2 h-full"
          name="description"
          onChange={handleChange}
        />
      </div>
      <Select
        name={"style"}
        form={form}
        setForm={setForm}
        label={"Style"}
        options={["fantasy", "detailed", "modern", "contemporary"]}
      />
      <Select
        name={"graphics"}
        form={form}
        setForm={setForm}
        label={"Graphic"}
        options={["Unreal engine", "3D rendering", "octane render"]}
      />
      <Select
        name={"quality"}
        form={form}
        setForm={setForm}
        label={"Quality"}
        options={["4K", "8k", "HD"]}
      />
      <div className="flex flex-col space-y-2 my-6">
        <label>
          Number of images:{" "}
          <span className="text-zinc-800">{form.numberOfImages}</span>
        </label>
        <input
          type="range"
          min={"1"}
          max={"4"}
          value={form.numberOfImages}
          onChange={handleRangeChange}
          className="w-full h-[4px] bg-gray-300 rounded-full appearance-none focus:outline-none transition-all duration-300 ease-linear"
        />
      </div>
      {form.prompt && (
        <div className="mt-6 space-y-2">
          <span
            className={`w-28 text-center px-4 py-1 text-white rounded-full border bg-red-500 text-sm`}
          >
            Prompt
          </span>
          <div className="bg-white border p-2">
            <p> {form.prompt}</p>
            {isCopied ? (
              <AiOutlineCheckCircle
                size={14}
                className="text-gray-500 ml-auto"
              />
            ) : (
              <FiCopy
                size={14}
                onClick={handleCopyToClipboard}
                className="cursor-pointer text-gray-500 ml-auto"
              />
            )}
          </div>
        </div>
      )}
      {isImageGenerating && (
        <div className="mt-12 w-full  space-y-2">
          <span
            className={`w-28 text-center px-4 py-1 text-white rounded-full border bg-green-500 text-sm`}
          >
            Progressing
          </span>
          <div className="p-2 bg-white border animate-pulse space-y-2">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <p key={i} className="h-3 bg-slate-300 "></p>
              ))}
          </div>
        </div>
      )}
      <div>
        <button
          type="button"
          onClick={generateImage}
          disabled={isImageGenerating}
          className={`px-4 py-2.5 rounded-full w-full bg-black hover:bg-black/75 text-white transition-all duration-150 ease-linear cursor-pointer mt-2 flex items-center justify-center  text-center ${
            isImageGenerating ? "bg-gray-700" : ""
          }`}
        >
          <span>
            <BsImage size={20} color="white" className="mr-4" />
          </span>
          Generate
        </button>
        <p className="mt-3">
          Once you have created the image you want,you can share it with the
          world.
        </p>
        <button
          onClick={handleShareImageSubmission}
          disabled={isSharingImage}
          className={`px-4 py-2.5 rounded-full w-full border hover:bg-black/75 hover:text-white transition-all duration-150 ease-linear cursor-pointer mt-2 flex items-center justify-center text-center ${
            isSharingImage ? "bg-gray-700" : "bg-white"
          }`}
        >
          <span>
            <BsShare size={20} className="mr-4" />
          </span>
          Share
        </button>
      </div>
    </form>
  );
};

export default Form;
