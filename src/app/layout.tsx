import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {LeftBar, RightBar} from "@/components";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <div className="px-2 xsm:px-4 xxl:px-8">
              <LeftBar />
          </div>
          <div className="flex-1 min-w-[600px] border-x-[1px] border-borderGray">{children}</div>
          <div className=" hiddden lg:flex ml-4 md:ml-8 flex-1 ">
            <RightBar />
          </div>
      </div>
      </body>
    </html>
  );
}
