"use client";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import gym1 from "../../../public/aca1.jpeg"
import gym2 from "../../../public/aca2.jpeg"
import gym3 from "../../../public/aca3.jpeg"
import gym4 from "../../../public/aca4.jpeg"
import gym5 from "../../../public/aca5.jpeg"
import gym6 from "../../../public/pic6.jpeg"
import gym7 from "../../../public/pic7.jpeg"
import gym8 from "../../../public/pic8.jpeg"
import gym9 from "../../../public/image.png"
import gym10 from "../../../public/pic9.png"
import gym11 from "../../../public/pic10.png"
import gym12 from "../../../public/pic11.png"
export function ParallaxScrollDemo() {
  return(
    <>
    <h1 className="flex mt-24 text-white justify-center text-3xl md:text-5xl font-bold text-center">
    EMPOWERING YOU TO EVOLVE INTO THE BEST VERSION OF YOURSELF.</h1>
     <ParallaxScrollSecond images={images} className="mt-[50px]" />
     </>
  )
}

const images = [
    gym1,
    gym2,
    gym3,
    gym4,
    gym5,
    gym6,
    gym7,
    gym8,
    gym9,
    gym10, 
    gym11,
    gym12,
    ];
