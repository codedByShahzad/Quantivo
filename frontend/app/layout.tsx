import type { Metadata } from "next";
import "./globals.css";
import ReduxProvider from "@/src/lib/ReduxProvider";
import { Toaster } from "react-hot-toast";

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
        <Toaster
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: {
      background: "#fff",
      color: "#0F172A",
      borderRadius: "16px",
      padding: "16px",
      fontWeight: "500",
      boxShadow:
        "0 10px 25px rgba(0,0,0,0.08)",
      border: "1px solid #E2E8F0",
    },

    success: {
      iconTheme: {
        primary: "#10B981",
        secondary: "#fff",
      },
    },

    error: {
      iconTheme: {
        primary: "#EF4444",
        secondary: "#fff",
      },
    },
  }}
/>
        </ReduxProvider>
      </body>
    </html>
  );
}