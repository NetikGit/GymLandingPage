"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  py-10", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gray-700 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardPrice>{item.price}₹</CardPrice>
            <CardDescription>{item.description}</CardDescription>
            <div className="items-center">
            <button className="ml-[30%] mt-[10%] justify-self-center relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 focus:bg-yellow-300">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Buy Now
              </span>
            </button>
            </div>
            
          </Card>
        </Link>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        " justify-self-center rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0f0f0f] hover:bg-black border border-gray-600 dark:border-white/[0.2] group-hover:border-gray-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4 justify-self-center">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 justify-self-center text-center", className)}>
      {children}
    </h4>)
  );
};
export const CardPrice= ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4 justify-self-center text-center", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm justify-self-center w-[90%] text-center h-10 overflow-hidden", className)}>
      {children}
    </p>)
  );
};
