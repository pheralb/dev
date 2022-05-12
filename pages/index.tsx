import { GetStaticProps } from "next";
import { getAllDocs } from "functions";
import { DocMeta } from "interfaces/docMeta";
import Documents from "components/documents";

export default function Index({ documents }: { documents: DocMeta[] }) {
  return (
    <>
      <h1>Articles</h1>
      <Documents documents={documents} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const documents = getAllDocs()
    .slice(0, 9)
    .map((doc) => doc.meta);
  return { props: { documents } };
};
