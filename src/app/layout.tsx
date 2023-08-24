import "./globals.css";
import type { Metadata } from "next";
import { Rajdhani } from "next/font/google";

const rajdhani = Rajdhani({
  weight: "600",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DROGARIA DREORP",
  description: "Drogaria Dreorp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={rajdhani.className}>{children}</body>
    </html>
  );
}
