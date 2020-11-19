import { PostType } from "../types";
import Image from "next/image";
import Link from "next/link";

const Thumbnail = ({ id, title, image, color }: PostType) => {
  const style = {
    backgroundColor: color,
  };
  return (
    <Link key={id} href={`/posts/${id}`}>
      <div
        style={style}
        className="rounded-3xl border border-white m-2 w-52 h-36 cursor-pointer relative"
      >
        <Image src={image} alt={title} layout="fill" />
      </div>
    </Link>
  );
};

export default Thumbnail;
