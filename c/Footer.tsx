import React from "react";
import Link from "next/link";

const Footer: React.FC = ({ children }) => {
  return (
    <footer>
      <p>
        Made with{" "}
        <Link href="/luv">
          <a>luv</a>
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
