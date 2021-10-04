import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "~/styles/Home.module.css";

import zen from "~/public/zenchinese.png";

const Topnav: React.FC = ({ children }) => {
  return (
    <header>
      <Link href="/">
        <a>
          <div
            style={{
              width: "3.6em",
              display: "block",
            }}
          >
            <Image src={zen} alt="Z腦" layout="responsive" />
          </div>
        </a>
      </Link>
    </header>
  );
};

export default Topnav;
