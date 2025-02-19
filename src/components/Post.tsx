import React from "react";
import Image from "@/components/Image";

const Post = () => {
  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/*    POST TYPE */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 from-black">
        icon
        <span>Kandy Dev Reposted</span>
      </div>
      {/*    Post Content*/}
      <div className="flex gap-4">
        {/*  Avatar*/}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="default-image.jpg"
            alt="default-ima"
            w={100}
            h={100}
            tr={true}
          />
        </div>
        {/*  Content */}
        <div className="">
          {/*  TOP */}
          <div className="">
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
