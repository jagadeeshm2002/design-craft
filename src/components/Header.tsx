"use client";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef} from "react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  pages: Array<{
    name: string;
    link: string;
  }>;
}

const Header: React.FC<HeaderProps> = ({ pages }) => {
  const currentUrl = usePathname();
  const router = useRouter();
 

  const selectedLink = useRef<HTMLSelectElement>(null);

  const handleSelectChange = () => {
    const selectedValue = selectedLink.current?.value;
    if (selectedValue && selectedValue !== currentUrl) {
     
      router.push(selectedValue);
    }
  };
  return (
    <div className="w-full h-[60px] px-10 bg-gray-400 flex justify-between items-center relative z-10">
      <div className="bg-violet-950 p-2 rounded-2xl">
        <Image src="/svg/component.svg" width={30} height={30} alt="logo" />
      </div>
      <div className="mx-auto  text-black">
        <select
          className="p-2 rounded-lg font-poppins"
          ref={selectedLink}
          onChange={handleSelectChange}
          defaultValue={currentUrl}
        >
          {pages?.map((page, i) => {
            return (
              <option
                key={i}
                value={page.link}
                className="hover:bg-gray-600 hover:text-gray-50"
              >
                {page.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="bg-slate-950 p-2 rounded-2xl">
        <Link href={"https://github.com/jagadeeshm2002"}>
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Header;
