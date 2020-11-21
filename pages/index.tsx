import { GetStaticProps } from "next";
import Head from "next/head";
import { Curtain, Slider } from "../components";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-full flex flex">
        <div className="w-1/2" />
        <Curtain />
        <div className="w-1/2">
          <Slider data={allPostsData} />
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
