// import Image from 'next/image'
import Link from "next/link";
import React from "react";
import Image from "@/components/Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo menu button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-center">
        {/* logo */}
        <Link href="/" className="p-2 rounded-full bg-[#181818]">
          <Image path="/icons/logo.svg" w={24} h={24} alt="" />
        </Link>
        {/* manu list */}
        <div className="flex flex-col">
          {menuList.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                path={`/icons/${item.icon}`}
                w={24}
                h={24}
                alt={item.name}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* Button */}
        <Link
          href="/"
          className="bg-white text-black rounded-full font-bold py-2 px-20 w-12 h-12 flex justify-center xxl:hidden"
        >
          <Image path="/icons/post.svg" alt="" h={24} w={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* user profile */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="/general/avatar.png"
              alt="kandyhamisi"
              h={100}
              w={100}
              tr={true}
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">Kandy Hamisi</span>
            <span className="text-sm text-textGray">@kandy-hamisi</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};
export default LeftBar;
