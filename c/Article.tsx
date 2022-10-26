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
        // eslint-disable-next-line react/no-children-prop
        children={markdown}
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
