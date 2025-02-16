import React from "react";
import { IKImage } from "imagekitio-next";

type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
};

const urlEndpoint = " https://ik.imagekit.io/87oy0vazw/";

const Image = ({ path, w, h, alt, className }: ImageType) => {
  return (
    <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      width={w}
      height={h}
      alt={alt}
      className={className}
    />
  );
};
export default Image;
