import React from "react";
import Link from "next/link";
import Image from "next/image";

import zen from "~/public/zenchinese.png";

const Topnav = () => {
  return (
    <header>
      <Link href="/">
        <div
          style={{
            height: "2em",
            display: "block",
            position: "relative",
          }}
        >
          <Image
            src={zen}
            alt="Z腦"
            fill={true}
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>
      </Link>
    </header>
  );
};

export default Topnav;
