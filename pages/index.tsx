import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { Button, Curtain, Slider } from "../components";
import { getSortedPostsData } from "../lib/posts";

// add max-w-sm to Slider-parent
export default function Home({ allPostsData }) {
  const [data, setData] = useState([...allPostsData]);
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative h-full flex flex">
        <div className="w-1/2" />
        <Curtain />
        <div className="w-1/2 overflow-hidden">
          <Slider data={data} />
          <Button
            onClick={() => setData((prev) => [...prev, ...allPostsData])}
            label="add data"
          />
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
