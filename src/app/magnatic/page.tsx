"use client";
import Magnatic from "@/components/Magnatic";

import Button from "@/components/ui/Button";


export default function MagnaticPage() {
  return (
    <div className="min-h-screen sm:px-24 px-8 md:px-48 gap-16 py-10 sm:py-10 ">
    
      <main className="flex flex-col  gap-8 row-start-2 items-start justify-center sm:items-start mx-auto ">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-doto">Magnatic</h2>
        </div>
        <div className="grid grid-cols-3 grid-flow-row gap-8 items-center">
          <div className="w-80 h-56 bg-slate-900 rounded-lg flex justify-center items-center px-3">
            <Magnatic>
              <Button>Button</Button>
            </Magnatic>
          </div>
        </div>
      </main>
    </div>
  );
}
