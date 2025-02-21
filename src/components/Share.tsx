"use client";

import React from "react";
import Image from "@/components/Image";
import { shareAction } from "@/lib/actions";
import NextImage from "next/image";
import ImageEditor from "@/components/ImageEditor";

const Share = () => {
  const [media, setMedia] = React.useState<File | null>(null);
  const [isEditorOpen, setEditorOpen] = React.useState(false);
  const [settings, setSettings] = React.useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const previewUrl = media ? URL.createObjectURL(media) : null;

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
    }
  };
  return (
    <form
      action={(formData) => shareAction(formData, settings)}
      className="p-4 flex gap-4"
    >
      {/*  AVATAR */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Image path="/default-image.jpg" alt="" w={100} h={100} tr={true} />
      </div>
      {/*  OTHERS */}
      <div className="flex flex-1 flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="what is happening?!"
          className="bg-transparent outline-none placeholder:text-textGray text-xl"
          id="file-input"
        />
        {/* PREVIEW IMAGE */}
        {previewUrl && (
          <div className="relative rounded-xl overflow-hidden">
            <NextImage
              src={previewUrl}
              alt=""
              width={600}
              height={600}
              className={`w-full ${settings.type === "original" ? "h-full object-contain" : settings.type === "square" ? "aspect-square object-cover" : "aspect-video object-cover"}`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setEditorOpen(true)}
            >
              Edit
            </div>
          </div>
        )}

        {isEditorOpen && previewUrl && (
          <ImageEditor
            onClose={() => setEditorOpen(false)}
            previewUrl={previewUrl}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              onChange={handleMediaChange}
              id="file"
              className="hidden"
            />
            <label htmlFor="file">
              <Image
                path="/icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};
export default Share;
