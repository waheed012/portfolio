"use client";

import { usePathname } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";
import stairs from "./Stairs";
import Stairs from "./Stairs";
const StairTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
