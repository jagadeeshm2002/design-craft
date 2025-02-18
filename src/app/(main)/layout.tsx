import Header from "@/components/Header";
import React from "react";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // I am useing a same list in two place. i know that. make sure you dont do it.
  const pages: { name: string; link: string }[] = [
    { name: "Magnatic", link: "/magnatic" },
    { name: "Sticky cursor", link: "/stickycursor" },
    { name: "Background image parallax", link: "/background-image-parallax" },
    { name: "Mask section transition", link: "/mask-section-transition/1" },
    { name: "Mask section transition 2", link: "/mask-section-transition/2" },
    { name: "Text Parallax", link: "/text-parallax" },
    { name: "Sticky Footer", link: "/sticky-footer" },
    {
      name: "Perspective section transition",
      link: "/perspective-section-transition",
    },
    { name: "Text Along Path", link: "/text-along-path" },
    { name: "Path Animation", link: "/path-animation" },
    { name: "Vertical Scroll", link: "/vertical-scroll" },
    { name: "Zoom Parallax", link: "/zoom-parallax" },
    { name: "Parallax Scroll", link: "/parallax-scroll" },
    { name: "Horizontal Scroll", link: "/horizontal-scroll" },
    {
      name: "Text Gradient Scroll Opacity",
      link: "/text-gradient-scroll-opacity",
    },
    { name: "Cards Parallax", link: "/cards-parallax" },
    { name: "3D Perspective Scroll", link: "/3d-perspective-scroll" },
    { name: "SVG Mask Scroll", link: "/svg-mask-scroll" },
  ];
  return (
    <>
      <Header pages={pages} />
      {children}
    </>
  );
}
