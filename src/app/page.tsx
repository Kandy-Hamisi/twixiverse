import { IKImage } from "imagekitio-next";
import React from "react";
import Image from "@/components/Image";

const HomePage = () => {
  return (
    <div>
      <h1>Hello there is my homepage</h1>
      <Image path="default-image.jpg" alt="test image" />
    </div>
  );
};

export default HomePage;
