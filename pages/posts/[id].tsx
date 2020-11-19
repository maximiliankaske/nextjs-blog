import Head from "next/head";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  console.log(postData);
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="container">
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
