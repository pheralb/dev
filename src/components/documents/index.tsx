import { DocMeta } from "src/interfaces/docMeta";
import Card from "src/components/cards/mini";

const Index = ({ documents }: { documents: DocMeta[] }) => {
  return (
    <>
      {documents.map((docu) => (
        <Card
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
