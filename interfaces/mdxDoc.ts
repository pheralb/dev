import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { DocMeta } from "interfaces/docMeta";

export interface MDXDoc {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: DocMeta;
}
