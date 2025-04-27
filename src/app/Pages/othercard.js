import { DirectionAwareHover2 } from "@/components/cards-2-2";
import { DirectionAwareHover } from "@/components/ui/hoverCard";

export function DirectionAwareHoverDemo2() {
  const image =
  "../../public/train2.jpeg";
  return (
    (<div className="h-[40rem] relative  flex items-center justify-center pr-0">
      <DirectionAwareHover2 image={image}>
      <p className="font-bold text-xl">Surendra Singh</p>
      <p className="font-normal text-sm"> Male Coach</p>
      <p className="font-normal text-sm"> 5th dan karate BLack belt, International refree, National Grappling Coach </p>
      </DirectionAwareHover2>
      <DirectionAwareHover image={image} className={"ml-4"}>
        <p className="font-bold text-xl">Deepa Gupta</p>
        <p className="font-normal text-sm"> Female Coach</p>
        <p className="font-normal text-sm"> 2nd dan karate BLack belt, National Grappling refree </p>
      </DirectionAwareHover>
      
      
    </div>)
  );
}