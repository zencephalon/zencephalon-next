import "./globals.css";
import { Vollkorn } from "@next/font/google";

const vollkorn = Vollkorn({ preload: true, subsets: ["latin"] });

import Layout from "~/c/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={vollkorn.className}>
      <head></head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
