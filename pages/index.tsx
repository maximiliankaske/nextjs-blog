import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Read <Link href="/posts/ssg-ssr">this page!</Link>
        </h1>
        {allPostsData?.map(({ id, date, title }) => (
          <Link key={id} href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
        ))}
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
