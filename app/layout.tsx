import type { Metadata } from "next";
import { Volkhov } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/AOS";

const inter = Volkhov({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "Jadoo",
  description: "A Travel Agency Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
