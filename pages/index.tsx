import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Curtain, Thumbnail } from "../components";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-full">
        <Curtain />
        <div className="flex flex-row flex-wrap justify-end">
          {[...allPostsData]?.map(({ id, date, title, image, color }) => (
            <Thumbnail key={id} {...{ id, date, title, image, color }} />
          ))}
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
