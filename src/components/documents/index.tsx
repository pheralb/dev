import { DocMeta } from "@/interfaces/docMeta";
import { CardMin } from "@/common";

const Index = ({ documents }: { documents: DocMeta[] }) => {
  return (
    <>
      {documents.map((docu) => (
        <CardMin
          key={docu.title}
          title={docu.title}
          tags={docu.tags}
          description={docu.description}
          url={`/docs/${docu.slug}`}
        />
      ))}
    </>
  );
};

export default Index;
