import MainFollowMouse from "@/components/MainFollowMouse";
import Link from "next/link";

export default function Home() {
  const pages: { name: string; link: string }[] = [
    { name: "Magnatic", link: "/magnatic" },
    { name: "Sticky cursor", link: "/stickycursor" },
    { name: "Background image parallax", link: "/background-image-parallax" },
    { name: "Mask section transition", link: "/mask-section-transition/1" },
    { name: "Mask section transition 2", link: "/mask-section-transition/2" },
  ];
  return (
    <div className=" items-center justify-items-center min-h-screen sm:px-24 px-8 md:px-48 gap-16 py-10 sm:py-10 relative ">
      <MainFollowMouse />

      <main className="flex flex-col  gap-8 row-start-2 items-start justify-center sm:items-start mx-auto ">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-doto">Design Recreations</h2>
        </div>
        <div className="flex flex-col ml-5">
          <ul className="list-image-component">
            {pages.map((page) => {
              return (
                <li key={page.name} className="font-playwrite">
                  <Link href={page.link}>{page.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
