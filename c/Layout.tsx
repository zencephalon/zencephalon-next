import React from "react";
import Footer from "~/c/Footer";
import Topnav from "~/c/Topnav";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Topnav />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
