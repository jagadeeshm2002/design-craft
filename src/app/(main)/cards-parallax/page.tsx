"use client";
import Lenis from "lenis";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface PageProps {}

const Page: React.FC<PageProps> = (props) => {
  useEffect(() => {
    const lenis = new Lenis({});
    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className="bg-slate-50 w-full min-h-screen flex justify-center items-center flex-col py-[50vh] relative">
      {data.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            src={card.src}
            link={card.link}
            color={card.color}
            top={card.top}
          />
        );
      })}
    </div>
  );
};

export default Page;
interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  top?: string;
}
const data: CardProps[] = [
  {
    title: "Matthias Leidinger",

    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",

    src: "image1.jpg",

    link: "#",

    color: "#BBACAF",
    top: "0",
  },

  {
    title: "Clément Chapillon",

    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",

    src: "image5.jpg",

    link: "#",

    color: "#977F6D",
    top: "2%",
  },

  {
    title: "Zissou",

    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",

    src: "image4.jpg",

    link: "#",

    color: "#C2491D",
    top: "4%",
  },
  {
    title: "Matthias Leidinger",

    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",

    src: "image6.jpg",

    link: "#",

    color: "#BBACAF",
    top: "6%",
  },

  {
    title: "Clément Chapillon",

    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",

    src: "image4.jpg",

    link: "#",

    color: "#977F6D",
    top: "8%",
  },

  {
    title: "Zissou",

    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",

    src: "image3.jpg",

    link: "#",

    color: "#C2491D",
    top: "10%",
  },
];

const Card = ({ title, description, src, link, color, top }: CardProps) => {
  const imagePath = `/images/mask-section-transition/${src}`;
  return (
    <div
      className=" h-screen  flex  items-center justify-center sticky "
      style={{ top: top }}
    >
      <div
        style={{ backgroundColor: color }}
        className="w-[1000px] h-[500px]  rounded-md px-5 relative flex flex-col justify-center items-center"
      >
        <div className="w-full flex justify-center items-center  my-5">
          <p className="text-xl font-playwrite">{title}</p>
        </div>
        <div className="flex flex-row gap-5 h-full w-full p-5">
          <div className="w-1/2 pl-5">
            <p className="text-sm font-poppins ">{description}</p>
            <Link
              href={link}
              className="text-sm font-poppins flex py-1 items-center underline"
            >
              Read More <ArrowRightIcon />
            </Link>
          </div>
          <div className="w-1/2 h-full flex justify-center items-center">
            <Image
              src={imagePath}
              alt=""
              className="rounded-xl w-full h-full object-cover"
              style={{ objectFit: "cover" }}
              width={350}
              height={200}
              placeholder="blur"
              blurDataURL={imagePath}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
