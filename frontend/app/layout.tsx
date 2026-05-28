import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantivo",
  description: "Modern POS & Business Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={``}
    >
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}