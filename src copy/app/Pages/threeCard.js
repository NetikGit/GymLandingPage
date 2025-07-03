"use client";;
import { DirectionAwareHover } from "@/components/ui/hoverCard";

export function DirectionAwareHoverDemo() {
  const image =
  "../../public/train2.jpeg";
  return (
    (<div className="h-[40rem] ml-8 relative  flex items-center justify-center">
      <DirectionAwareHover image={image}>
      <p className="font-bold text-xl">Surendra Singh</p>
      <p className="font-normal text-sm"> Male Coach</p>
      </DirectionAwareHover>
      <DirectionAwareHover image={image}>
        <p className="font-bold text-xl">Deepa Gupta</p>
        <p className="font-normal text-sm"> Female Coach</p>
      </DirectionAwareHover>
      
      
    </div>)
  );
}
