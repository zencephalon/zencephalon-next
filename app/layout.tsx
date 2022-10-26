import "./globals.css";
import Layout from "~/c/Layout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
