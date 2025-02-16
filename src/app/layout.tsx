import type { Metadata } from "next";
import { Playwrite_AU_SA, Doto, Inter, Poppins } from "next/font/google";
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
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body
        className={`${inter.variable} ${playwrite.variable} ${doto.variable} ${poppins.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
