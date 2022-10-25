import React from "react";
import Link from "next/link";

const Footer: React.FC = ({ children }) => {
  return (
    <footer className="footer">
      <p>
        © Matthew Bunday 2010-2022. Made with <Link href="/luv">luv</Link>.
      </p>
    </footer>
  );
};

export default Footer;
