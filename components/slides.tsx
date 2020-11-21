import React from "react";
import { PostType } from "../types";
import Thumbnail from "./thumbnail";
import { useWindowDimensions } from "../hooks";

// 13rem === 208px on macbook pro 13'

interface SlidesProps {
  data: PostType[] | undefined;
}

const Slides = ({ data }: SlidesProps) => {
  const slides = [...data, ...data];
  const windowsDimensions = useWindowDimensions();
  console.log(windowsDimensions);
  return (
    <div className="flex flex-row flex-wrap justify-end">
      {slides?.map((slide, index) => (
        <Thumbnail key={index} {...slide} />
      ))}
    </div>
  );
};

export default Slides;
