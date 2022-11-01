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
          a: ({ href, ...rest }) => {
            return <Link href={href || ""} {...rest}></Link>;
          },
        }}
      />
    </article>
  );
};

export default Article;
