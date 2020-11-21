import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { PostType } from "../types";
import Thumbnail from "./thumbnail";
import { useHover, useWindowDimensions } from "../hooks";

// 13rem === 208px on macbook pro 13'

const width = 208;
const aspectRatio = 36 / 52;

interface SlidesProps {
  data: PostType[] | undefined;
}

const Slider = ({ data }: SlidesProps) => {
  const slides = [...data, ...data];
  const [xOffset, setXOffset] = useState(0);
  const windowsDimensions = useWindowDimensions();
  const sliderRef = useRef(null);
  const isHovered = useHover(sliderRef);
  const controls = useAnimation();

  useEffect(() => {
    if (windowsDimensions) {
      const freeSpace = slides.length * width - windowsDimensions.width / 2;
      if (freeSpace > 0) {
        setXOffset(freeSpace);
      }
    }
  }, [windowsDimensions]);

  useEffect(() => {
    if (isHovered) {
      // pause animation
    } else {
      // continue animation
    }
  }, [isHovered]);

  return (
    <div ref={sliderRef} className="flex">
      <div className="flex">
        {slides?.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ translateX: 0 }}
            animate={{ translateX: -xOffset }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
            }}
            onEnded={(e) => console.log(e)}
          >
            <Thumbnail {...slide} width={width} height={width * aspectRatio} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
