import React, { useLayoutEffect, useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
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
  const [xOffset, setXOffset] = useState(0);
  const windowsDimensions = useWindowDimensions();
  const sliderRef = useRef(null);
  const isHovered = useHover(sliderRef);
  const { width: sliderWidth } = useElementSize(sliderRef);
  const controls = useAnimation();

  useEffect(() => {
    if (windowsDimensions) {
      const freeSpace = sliderWidth - windowsDimensions.width / 2;
      if (freeSpace > 0) {
        setXOffset(freeSpace);
      }
    }
  }, [windowsDimensions]);

  useEffect(() => {
    console.log(isHovered);
    if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        translateX: -xOffset,
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 3,
        },
      });
    }
  }, [isHovered]);

  return (
    <div className="flex">
      <div ref={sliderRef} className="flex">
        {slides?.map((slide, index) => (
          <motion.div
            key={index}
            animate={controls}
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
