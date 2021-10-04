import React from "react";
import Head from "next/head";
import Footer from "~/c/Footer";
import Topnav from "~/c/Topnav";

import styles from "~/styles/Home.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/zenchinese.png" />
      </Head>
      <Topnav />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
