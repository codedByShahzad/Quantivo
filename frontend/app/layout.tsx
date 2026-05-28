import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/src/lib/ReduxProvider";

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
        <ReduxProvider>
        {children}
        </ReduxProvider>
      </body>
    </html>
  );
}