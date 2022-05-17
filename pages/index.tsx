import { GetStaticProps } from "next";
import { getAllDocs } from "functions";
import { DocMeta } from "interfaces/docMeta";
import Documents from "components/documents";
import BioSide from "components/bioSide";
import Section from "components/section";
import Projects from "components/projects";

export default function Index({ documents }: { documents: DocMeta[] }) {
  return (
    <>
      <BioSide>
        <Section title="Featured Posts:">
          <Documents documents={documents} />
        </Section>
        <Section title="Projects:">
          <Projects />
        </Section>
      </BioSide>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const documents = getAllDocs()
    .slice(0, 9)
    .map((doc) => doc.meta);
  return { props: { documents } };
};
