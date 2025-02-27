import React from "react";
import Image from "@/components/Image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening?
      </h1>
      {/*    Trend Event */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image path="default-image.jpg" alt="" h={120} w={120} tr={true} />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">The Pixiverse meetup</h2>
          <span className="text-sm text-textGray">Tomorrow</span>
        </div>
      </div>
      {/*    Topics*/}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoMore.svg" alt="" h={16} w={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoMore.svg" alt="" h={16} w={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoMore.svg" alt="" h={16} w={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoMore.svg" alt="" h={16} w={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K Posts</span>
      </div>
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray text-sm">Technology - Trending</span>
          <Image path="icons/infoMore.svg" alt="" h={16} w={16} />
        </div>
        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K Posts</span>
      </div>
    </div>
  );
};
export default PopularTags;
