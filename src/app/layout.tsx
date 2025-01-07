import type { Metadata } from "next";
import { Playwrite_AU_SA, Doto, Inter } from "next/font/google";
import "./globals.css";

const playwrite = Playwrite_AU_SA({
  variable: "--font-playwrite",
});
const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Craft",
  description: "simple design recraft by myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playwrite.variable} ${doto.variable} antialiased `}>{children}</body>
    </html>
  );
}
