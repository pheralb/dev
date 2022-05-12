import React from "react";
import { MDXDoc } from "interfaces/mdxDoc";
import { GetStaticPaths, GetStaticProps } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { getDocsFromSlug, getAllDocs } from "functions";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

export default function PostPage({ document }: { document: MDXDoc }) {
  return (
    <>
      <h1>{document.meta.title}</h1>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { content, meta } = getDocsFromSlug(params?.slug as string);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });
  return { props: { document: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const documents = getAllDocs()
    .slice(0, 9)
    .map((doc) => doc.meta);

  const paths = documents.map((doc) => ({
    params: {
      slug: doc.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
