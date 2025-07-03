import ThreeDCardDemo from "./threeCard";
import Hover from "./hover";
import { DirectionAwareHoverDemo } from "./threeCard";
import { DirectionAwareHoverDemo2 } from "./othercard";


export default function Staff() {
    return (
        <>
            <div className="w-full px-4"> {/* w-full to make it responsive and px-4 for small padding */}
                <h1 className="mt-[120px] text-white text-center text-[48px] font-bold">Coaches</h1>

                {/* First flex container for the cards */}
                <div className="flex flex-wrap justify-center gap-24"> 
                    <DirectionAwareHoverDemo2 />
                    
                    

                </div>
            </div>
        </>
    );
}
