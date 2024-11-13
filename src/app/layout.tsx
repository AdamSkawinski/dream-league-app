// src/app/layout.tsx
import React from "react";
import "../styles/globals.css"
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Dream League App",
  description: "A Next.js app for Dream League Soccer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
