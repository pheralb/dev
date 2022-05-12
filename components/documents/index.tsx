import { DocMeta } from "interfaces/docMeta";
import Link from "next/link";

const Index = ({ documents }: { documents: DocMeta[] }) => {
  return (
    <>
      {documents.map((docu) => (
        <li key={docu.slug}>
          <div>
            <Link href={`/docs/${docu.slug}`}>{docu.title}</Link>
          </div>
          <p>{docu.description}</p>
          <p>
            {docu.tags.map((tag) => (
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            ))}
          </p>
        </li>
      ))}
    </>
  );
};

export default Index;
