import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface Props {
  markdown: string;
}

const Article: React.FC<Props> = ({ markdown }) => {
  return (
    <article>
      <ReactMarkdown
        children={markdown}
        components={{
          a: ({ href, ...rest }) => {
            return (
              <Link href={href || ""}>
                <a {...rest} />
              </Link>
            );
          },
        }}
      />
    </article>
  );
};

export default Article;
