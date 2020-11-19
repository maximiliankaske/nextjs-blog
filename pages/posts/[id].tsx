import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import { motion, useViewportScroll } from "framer-motion";
import Link from "next/link";

// TODO: color of post be the primary color

export default function Post({ postData }) {
  const { scrollYProgress } = useViewportScroll();

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="h-1 fixed top-0 w-full z-10">
        <motion.div
          className="bg-red-600 w-full h-full"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
      <div className="container mx-auto">
        <div className="py-8">
          <p className="text-lg text-red-600">{postData.title}</p>
          <Date dateString={postData.date} />
          <Image
            src={postData.image}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <article
            className="prose md:prose-md lg:prose-lg"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </div>
      <footer className="h-12 bg-black w-full">
        <div className="container mx-auto">
          <div className="flex flex-1 flex-col">
            <Link href="/">
              <a className="text-white">back</a>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};
