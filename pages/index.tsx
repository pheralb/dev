import { GetStaticProps } from "next";
import { getAllDocs } from "functions";
import { DocMeta } from "interfaces/docMeta";
import { Box, Link, Flex, Text } from "@chakra-ui/react";
import Documents from "components/documents";
import NextLink from "next/link";
import BioSide from "components/bioSide";

export default function Index({ documents }: { documents: DocMeta[] }) {
  return (
    <>
      <BioSide>
        <Text>Articles:</Text>
        <Documents documents={documents} />
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
