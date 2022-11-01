import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  markdown: string;
}

const Article: React.FC<Props> = ({ markdown }) => {
  return (
    <article>
      <ReactMarkdown
        // eslint-disable-next-line react/no-children-prop
        children={markdown}
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children, ...rest }) => {
            if (rest.role === "doc-noteref") {
              return <a href={href}>{children}</a>;
            }
            if (rest.role === "doc-backlink") {
              return <a href={href}>{children}</a>;
            }
            return (
              <Link href={href || ""} {...rest}>
                {children}
              </Link>
            );
          },
        }}
      />
    </article>
  );
};

export default Article;
