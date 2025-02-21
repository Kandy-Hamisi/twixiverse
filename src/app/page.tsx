import { IKImage } from "imagekitio-next";
import React from "react";
import Image from "@/components/Image";
import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="px-4 pt-4 flex justify-between items-center text-textGray font-bols borde-b-[1px] border-borderGray">
        <Link
          className="pb-3 flex items-center border-b-4 border-iconBlue"
          href="/"
        >
          For you
        </Link>
        <Link className="pb-3 flex items-center" href="/">
          Following
        </Link>
        <Link className="pb-3 hidden md:flex items-center " href="/">
          React.js
        </Link>
        <Link className="pb-3 hidden md:flex items-center " href="/">
          Golang
        </Link>
        <Link className="pb-3 hidden md:flex items-center " href="/">
          Docker
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default HomePage;
