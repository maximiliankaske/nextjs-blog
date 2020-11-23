import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { PostType } from "../types";
import Thumbnail from "./thumbnail";
import { useElementSize } from "../hooks";
import Button from "./button";

// 13rem === 208px on macbook pro 13'

const width = 208;
const aspectRatio = 36 / 52;

interface SlidesProps {
  data: PostType[] | undefined;
}

const Slider = ({ data: defaultData }: SlidesProps) => {
  const [data, setData] = useState(defaultData);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const { width: containerWidth } = useElementSize(containerRef);
  const { width: sliderWidth } = useElementSize(sliderRef);
  const x = useMotionValue(0);
  const freeSpace = containerWidth - sliderWidth;

  useLayoutEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, [data]);

  useEffect(() => {
    if (sliderWidth < containerWidth) {
      setData([...data, ...defaultData]);
    }
    function updateX() {
      if (x.get() === freeSpace) {
        console.log("finished");
        //setData([...data, ...defaultData]);
      }
    }
    const unsubscribeX = x.onChange(updateX);

    return () => unsubscribeX();
  }, [sliderWidth, containerWidth]);

  return (
    <>
      <div ref={containerRef} className="flex">
        <div ref={sliderRef} className="flex">
          {data?.map((slide, index) => (
            <motion.div
              key={index}
              animate={{ x: containerWidth < sliderWidth ? freeSpace : 0 }}
              style={{ x }}
              transition={{ duration: 2 }}
            >
              <Thumbnail
                {...slide}
                width={width}
                height={width * aspectRatio}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => {
          if (data.length > 8) setData([...defaultData]);
          else setData((prev) => [...prev, ...defaultData]);
        }}
        label="add data"
      />
    </>
  );
};

export default Slider;
