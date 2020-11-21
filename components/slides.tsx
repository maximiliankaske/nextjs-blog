import React from "react";
import { PostType } from "../types";
import Thumbnail from "./thumbnail";
import { useWindowDimensions } from "../hooks";

// 13rem === 208px on macbook pro 13'

interface SlidesProps {
  data: PostType[] | undefined;
}

const Slides = ({ data }: SlidesProps) => {
  const slides = [...data, ...data, ...data];
  const windowsDimensions = useWindowDimensions();
  console.log(windowsDimensions);
  return (
    <div className="flex justify-end">
      <div className="flex">
        {slides?.map((slide, index) => (
          <Thumbnail key={index} {...slide} />
        ))}
      </div>
    </div>
  );
};

export default Slides;
