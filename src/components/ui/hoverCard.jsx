"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import DavidLaid from "../../../public/Deepa.jpg";

export const DirectionAwareHover = ({
  Gymtrainer,
  children,
  childrenClassName,
  imageClassName,
  className,
}) => {
  const ref = useRef(null);
  const [direction, setDirection] = useState("left");
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = (event) => {
    if (!ref.current || isMobile) return;
    const direction = getDirection(event, ref.current);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const handleMobileClick = () => {
    if (isMobile) {
      setIsMobileVisible((prev) => !prev);
    }
  };

  const getDirection = (ev, obj) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onClick={handleMobileClick}
      ref={ref}
      className={cn(
        "md:h-96 md:w-96 w-72 h-72 bg-transparent rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-full w-full"
          initial="initial"
          whileHover={!isMobile ? direction : "initial"}
          exit="exit"
        >
          {/* Desktop hover overlay */}
          <motion.div
            className={cn(
              "absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500",
              "hidden md:block"
            )}
          />

          {/* Mobile overlay on click */}
          {isMobile && isMobileVisible && (
            <div className="absolute inset-0 bg-black/40 z-10 transition duration-500" />
          )}

          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Image
              alt="image"
              className={cn("h-full w-full object-cover scale-[1.10]", imageClassName)}
              width="1000"
              height="1000"
              src={DavidLaid}
            />
          </motion.div>

          {(isMobile ? isMobileVisible : true) && (
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "text-white absolute bottom-4 left-4 z-40",
                "opacity-100",
                childrenClassName
              )}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

// Animation variants
const variants = {
  initial: { x: 0 },
  exit: { x: 0, y: 0 },
  top: { y: 20 },
  bottom: { y: -20 },
  left: { x: 20 },
  right: { x: -20 },
};

const textVariants = {
  initial: { y: 0, x: 0, opacity: 0 },
  exit: { y: 0, x: 0, opacity: 0 },
  top: { y: -20, opacity: 1 },
  bottom: { y: 2, opacity: 1 },
  left: { x: -2, opacity: 1 },
  right: { x: 20, opacity: 1 },
};
