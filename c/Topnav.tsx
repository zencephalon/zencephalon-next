import React from "react";
import Link from "next/link";
import Image from "next/image";

import zen from "~/public/zenchinese.png";

const Topnav: React.FC = ({ children }) => {
  return (
    <header>
      <Link href="/">
        <div
          style={{
            width: "3.6em",
            display: "block",
          }}
        >
          <Image src={zen} alt="Z腦" />
        </div>
      </Link>
    </header>
  );
};

export default Topnav;
