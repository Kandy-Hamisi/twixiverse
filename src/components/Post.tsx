import React from "react";
import Image from "@/components/Image";
import PostInfo from "@/components/PostInfo";

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
        <div className="flex-1">
          {/*  TOP */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-md font-bold">Kandy Hamisi</h1>
              <span className="text-textGray">@kandy-hamisi</span>
              <span className="text-textGray">1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/*    TEXT & MEDIA */}
          <p className="my-2">
            there is alot to be said so I wont say it all right now. Have a
            wonderful day and stop being blasphemous for the entire day
          </p>
          <Image path="default-image.jpg" alt="" w={600} h={600} />
        </div>
      </div>
    </div>
  );
};
export default Post;
