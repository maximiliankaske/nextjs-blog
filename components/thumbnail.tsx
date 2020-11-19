import { PostType } from "../types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Thumbnail = ({ id, title, image, color }: PostType) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <Link key={id} href={`/posts/${id}`}>
      <motion.div
        style={style}
        className="rounded-3xl border border-white m-2 w-52 h-36 cursor-pointer relative"
        whileHover={{ scale: 1.02 }}
      >
        <Image src={image} alt={title} layout="fill" />
      </motion.div>
    </Link>
  );
};

export default Thumbnail;
