import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BKK Property | Find the best property in Bangkok",
  description: "Find the best property in Bangkok",
  keywords: "retntal, property, bangkok, real estate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
