import { PostType } from "../types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
  return (
    <Link key={id} href={`/posts/${id}`}>
      <motion.div
        style={style}
        className="rounded-3xl border border-white cursor-pointer relative"
        whileHover={{ scale: 1.02 }}
      >
        <Image src={image} alt={title} layout="fill" />
      </motion.div>
    </Link>
  );
};

export default Thumbnail;
