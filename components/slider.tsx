import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PostType } from "../types";
import Thumbnail from "./thumbnail";
import { useElementSize, useHover, useWindowDimensions } from "../hooks";

// 13rem === 208px on macbook pro 13'

const width = 208;
const aspectRatio = 36 / 52;

interface SlidesProps {
  data: PostType[] | undefined;
}

const Slider = ({ data }: SlidesProps) => {
  const slides = [...data, ...data];
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const { width: containerWidth } = useElementSize(containerRef);
  const { width: sliderWidth } = useElementSize(sliderRef);
  const x = useMotionValue(0);
  const freeSpace = containerWidth - sliderWidth;

  useEffect(() => {
    function updateX() {
      //console.log(x.get());
    }
    const unsubscribeX = x.onChange(updateX);

    return () => unsubscribeX();
  }, []);

  return (
    <div ref={containerRef} className="flex">
      <div ref={sliderRef} className="flex">
        {slides?.map((slide, index) => (
          <motion.div
            key={index}
            animate={{ x: freeSpace }}
            style={{ x }}
            transition={{ duration: 4 }}
          >
            <Thumbnail {...slide} width={width} height={width * aspectRatio} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
