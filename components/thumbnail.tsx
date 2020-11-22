import { PostType } from "../types";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface ThumbnailProps extends PostType {
  width: number;
  height: number;
}

const Thumbnail = ({
  id,
  title,
  image,
  color,
  width,
  height,
}: ThumbnailProps) => {
  const style = {
    backgroundColor: color,
    width,
    height,
  };
  const { ref, inView, entry } = useInView();
  const controls = useAnimation();

  const item: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [inView]);

  return (
    <Link key={id} href={`/posts/${id}`}>
      <motion.div
        ref={ref}
        style={style}
        className="rounded-3xl border border-white cursor-pointer relative"
        whileHover={{ scale: 1.02 }}
        variants={item}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1,
        }}
      >
        <Image src={image} alt={title} layout="fill" />
      </motion.div>
    </Link>
  );
};

export default Thumbnail;
