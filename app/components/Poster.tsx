import React from "react";
import Image from "next/image";

type PropType = {
  srcPath: string;
  height: number;
  width: number;
  alt: string;
};

export default function Poster({ srcPath, height, width, alt }: PropType) {
  return (
    <Image src={srcPath} height={height} width={width} alt={alt} priority />
  );
}
