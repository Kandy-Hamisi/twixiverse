import { IKImage } from "imagekitio-next";
import React from "react";
import Image from "@/components/Image";

const HomePage = () => {
  return (
    <div>
      <h1>Hello there is my homepage</h1>
      <Image path="default-image.jpg" alt="test image" w={600} h={600} />
    </div>
  );
};

export default HomePage;
