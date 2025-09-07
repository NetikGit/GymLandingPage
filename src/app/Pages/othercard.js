import { DirectionAwareHover2 } from "@/components/cards-2-2";
import { DirectionAwareHover } from "@/components/ui/hoverCard";

export function DirectionAwareHoverDemo2() {
  const image = "/train2.jpeg"; // Public folder path doesn't need `../../public`

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 md:h-[40rem] px-4 py-8">
     <div>
       <DirectionAwareHover2 image={image}>
        <p className="font-bold text-xl">Surendra Singh</p>
        <p className="font-normal text-sm">Male Coach</p>
        <p className="font-normal text-sm">
          5th dan karate Black belt, International referee, National Grappling Coach
        </p>
      </DirectionAwareHover2>
</div>
      <DirectionAwareHover image={image} className="md:ml-4">
        <p className="font-bold text-xl">Deepa Gupta</p>
        <p className="font-normal text-sm">Female Coach</p>
        <p className="font-normal text-sm">
          2nd dan karate Black belt, National Grappling referee
        </p>
      </DirectionAwareHover>
    </div>
  );
}
