import { GetStaticProps } from "next";
import { getAllDocs } from "src/functions";
import { DocMeta } from "src/interfaces/docMeta";

import Documents from "src/components/documents";
import BioSide from "src/components/bioSide";
import Section from "src/components/section";
import Projects from "src/components/projects";

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
