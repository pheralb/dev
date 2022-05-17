import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Doc } from "interfaces/doc";

// Docs path ->
const docsDirectory = path.join(process.cwd(), "docs");

// Get slugs from docs files ->
export const getSlugs = (): string[] => {
  return fs.readdirSync(docsDirectory);
};

// Get all docs order by update ->
export const getAllDocs = () => {
  const docs = getSlugs()
    .map((slug) => getDocsFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.update > b.meta.update) return 1;
      if (a.meta.update < b.meta.update) return -1;
      return 0;
    })
    .reverse();
  return docs;
};

// Get all docs from slug ->
export const getDocsFromSlug = (slug: string): Doc => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const postPath = path.join(docsDirectory, `${realSlug}.mdx`);
  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug: realSlug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      update: (data.date ?? new Date()).toString(),
      description: data.description ?? "",
    },
  };
};
