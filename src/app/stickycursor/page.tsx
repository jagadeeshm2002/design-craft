"use client";

import Magnatic from "@/components/Magnatic";
import StickyCursor from "@/components/StickyCursor";
import { Menu } from "lucide-react";
import { useRef } from "react";

export default function StickyCursorPage() {
  const StickyElement = useRef<HTMLDivElement>(null);
  return (
    <div className="min-h-screen sm:px-24 px-8 md:px-48 gap-16 py-10 sm:py-10 relative">
      <StickyCursor
        stickyElement={StickyElement as React.RefObject<HTMLDivElement>}
      />
      <main className="flex flex-col  gap-8 row-start-2 items-start justify-center sm:items-start mx-auto ">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-doto">StickyCursor</h2>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-8 items-center">
          <div className="w-80 h-56 bg-slate-900 rounded-lg flex justify-center items-center px-3">
            <Magnatic>
              <div className=" w-20 h-20 flex justify-center items-center relative ">
                <Menu className="pointer-events-none"/>  
                <div
                  ref={StickyElement}
                  className="absolute w-full h-full  left-0 top-0 hover:scale-110 transform origin-center  
  pointer-events: all"
                ></div>
              </div>
            </Magnatic>
          </div>
        </div>
      </main>
    </div>
  );
}

