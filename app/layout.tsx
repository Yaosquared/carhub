import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";

export const metadata: Metadata = {
  title: "Car Hub",
  description: "Discover the best cars in the world.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className="relative dark:bg-[--dark]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
