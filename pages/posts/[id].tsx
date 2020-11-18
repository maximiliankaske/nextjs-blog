import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="container">
        <p className="text-lg text-red-600">{postData.title}</p>
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
