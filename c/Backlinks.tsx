import React from "react";
import Link from "next/link";

interface Props {
  backlinks: Array<[string, string]>;
}

const Backlinks: React.FC<Props> = ({ backlinks }) => {
  const bl = backlinks.filter((link) => !!link[0]);
  return (
    <div className="backlinks">
      <p>
        {bl.map(([slug, name], index) => {
          return (
            <>
              <Link key={slug} href={`/${slug}`}>
                <a>{name}</a>
              </Link>
              {index < backlinks.length - 1 ? ", " : ""}
            </>
          );
        })}
      </p>
    </div>
  );
};

export default Backlinks;
