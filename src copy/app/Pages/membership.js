import ThreeDCardDemo from "./threeCard";
import Hover from "./hover"
import Staff from "./Staff";
export default function Membership(){
    return(
    <div>
    <h1 className="flex mt-24 text-white justify-center text-3xl md:text-5xl font-bold text-center">
  Academy membership
</h1>

    <div className=" flex space-x-[68px]">
        {/* <ThreeDCardDemo/>
        <ThreeDCardDemo/>
        <ThreeDCardDemo/> */}
        <Hover/>
        
        <div>
            
        </div>
    </div>

    </div>
    );
}