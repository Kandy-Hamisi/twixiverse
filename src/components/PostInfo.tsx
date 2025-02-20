"use client";

import React from "react";
import Image from "@/components/Image";

const PostInfo = () => {
  return (
    <div className="relative w-6 h-6 cursor-pointer">
      <Image path="/icons/infoMore.svg" alt="" w={16} h={16} />
    </div>
  );
};
export default PostInfo;
