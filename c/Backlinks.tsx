import React from "react";
import Link from "next/link";

const Backlinks: React.FC = ({ backlinks }) => {
  console.log(backlinks);
  return (
    <div className="backlinks">
      <p>
        {backlinks.map(([slug, name], index) => {
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
