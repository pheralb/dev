import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { DocMeta } from "src/interfaces/docMeta";

export interface MDXDoc {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: DocMeta;
}
